import { useEffect } from "react";
import { useAuth } from "@/integrations/supabase/auth-middleware";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { LayoutDashboard, Car, Calendar, Settings, LogOut, User } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { session, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) {
      navigate({ to: "/auth" });
    }
  }, [session, loading, navigate]);

  if (loading) return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
    </div>
  );

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/30">
        <Sidebar className="border-r border-border/50">
          <SidebarHeader className="h-20 flex items-center px-6 border-b">
            <Link to="/" className="flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-black italic uppercase tracking-tighter">911 Heritage</span>
            </Link>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="لوحة التحكم">
                  <Link to="/_authenticated/dashboard" className="flex items-center gap-3 italic">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>لوحة التحكم</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="حجوزاتي">
                  <Link to="/_authenticated/bookings" className="flex items-center gap-3 italic">
                    <Calendar className="h-5 w-5" />
                    <span>حجوزاتي</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="الملف الشخصي">
                  <Link to="/_authenticated/profile" className="flex items-center gap-3 italic">
                    <User className="h-5 w-5" />
                    <span>الملف الشخصي</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <div className="mt-8 border-t pt-4">
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={() => signOut()} className="text-destructive hover:text-destructive flex items-center gap-3 italic">
                    <LogOut className="h-5 w-5" />
                    <span>تسجيل الخروج</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="h-20 bg-background/50 backdrop-blur-md border-b flex items-center justify-between px-8 sticky top-0 z-10">
            <SidebarTrigger />
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium hidden md:block">{session?.user?.email}</span>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border text-primary">
                <User className="h-5 w-5" />
              </div>
            </div>
          </header>
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
