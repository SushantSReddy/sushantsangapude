import { corsHeaders } from '@supabase/supabase-js/cors'
import { z } from 'https://esm.sh/zod@3.23.8'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/telegram'
const CHAT_ID = '8460523899'

const BodySchema = z.object({
  name: z.string().min(1).max(255),
  message: z.string().min(1).max(2000),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
  if (!LOVABLE_API_KEY) {
    return new Response(JSON.stringify({ error: 'LOVABLE_API_KEY not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const TELEGRAM_API_KEY = Deno.env.get('TELEGRAM_API_KEY')
  if (!TELEGRAM_API_KEY) {
    return new Response(JSON.stringify({ error: 'TELEGRAM_API_KEY not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { name, message } = parsed.data

    const text = `📩 <b>New Message from Portfolio</b>\n\n<b>From:</b> ${name}\n<b>Message:</b>\n${message}`

    const response = await fetch(`${GATEWAY_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': TELEGRAM_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(`Telegram API error [${response.status}]: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    console.error('Error sending Telegram notification:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
