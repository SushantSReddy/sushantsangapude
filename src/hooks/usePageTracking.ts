import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const VISITOR_KEY = "visitor_id";

function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

/** Logs a page view to the database once per route change. */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Don't log the owner browsing the stats page itself
    if (location.pathname.startsWith("/stats")) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.from as any)("page_views")
      .insert({
        path: location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        visitor_id: getVisitorId(),
      })
      .then(({ error }: { error: { message: string } | null }) => {
        if (error) console.warn("tracking failed", error.message);
      });
  }, [location.pathname]);
}
