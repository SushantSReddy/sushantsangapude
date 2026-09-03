import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Users, CalendarDays, LogOut, Loader2 } from "lucide-react";
import type { Session } from "@supabase/supabase-js";

type PageView = {
  id: string;
  created_at: string;
  path: string;
  referrer: string | null;
  user_agent: string | null;
  visitor_id: string | null;
};

const Stats = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [views, setViews] = useState<PageView[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
    });
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.from as any)("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }: { data: { role: string } | null }) => {
        setIsAdmin(!!data);
        if (!data) setLoading(false);
      });
  }, [session]);

  useEffect(() => {
    if (!isAdmin) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase.from as any)("page_views")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200)
      .then(({ data }: { data: PageView[] | null }) => {
        setViews(data ?? []);
        setLoading(false);
      });
  }, [isAdmin]);

  const signIn = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}/stats`,
    });
    if (result.error) {
      console.error("Sign-in failed:", result.error);
    }
  };

  const signOut = () => supabase.auth.signOut();

  const uniqueVisitors = new Set(views.map((v) => v.visitor_id)).size;
  const today = views.filter(
    (v) => new Date(v.created_at).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10">


      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Visitor Stats</h1>
          {session && (
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="h-4 w-4 mr-2" /> Sign out
            </Button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : !session ? (
          <Card>
            <CardHeader>
              <CardTitle>Owner access only</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sign in to view who visited your website.
              </p>
              <Button onClick={signIn}>Sign in with Google</Button>
            </CardContent>
          </Card>
        ) : !isAdmin ? (
          <Card>
            <CardContent className="py-10 text-center text-muted-foreground">
              This account doesn't have access. Sign in with the site owner's
              Google account.
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total visits
                  </CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="text-3xl font-bold">
                  {views.length}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Unique visitors
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="text-3xl font-bold">
                  {uniqueVisitors}
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Visits today
                  </CardTitle>
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="text-3xl font-bold">{today}</CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  Recent visits
                </CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Time</TableHead>
                      <TableHead>Page</TableHead>
                      <TableHead>Came from</TableHead>
                      <TableHead>Device</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {views.map((v) => (
                      <TableRow key={v.id}>
                        <TableCell className="whitespace-nowrap">
                          {new Date(v.created_at).toLocaleString()}
                        </TableCell>
                        <TableCell>{v.path}</TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {v.referrer ?? "—"}
                        </TableCell>
                        <TableCell className="max-w-[220px] truncate text-muted-foreground">
                          {v.user_agent ?? "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                    {views.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          className="text-center text-muted-foreground py-8"
                        >
                          No visits recorded yet.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Stats;
