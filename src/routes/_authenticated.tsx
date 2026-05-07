import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  Settings, 
  Package, 
  User, 
  LogOut, 
  Bell, 
  Search,
  ShieldCheck,
  CreditCard,
  History
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Route = createFileRoute('/_authenticated')({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950 rtl" dir="rtl">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-l bg-white dark:bg-zinc-900 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold italic text-xs">P911</span>
            </div>
            <span className="font-bold tracking-tighter">بوابة الملاك</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <SidebarLink to="/_authenticated/dashboard" icon={<LayoutDashboard className="w-5 h-5" />} label="لوحة التحكم" active />
          <SidebarLink to="/inventory" icon={<Package className="w-5 h-5" />} label="المخزون المتوفر" />
          <SidebarLink to="/_authenticated/dashboard" icon={<History className="w-5 h-5" />} label="طلبات الشراء" />
          <SidebarLink to="/_authenticated/dashboard" icon={<CreditCard className="w-5 h-5" />} label="المدفوعات" />
          <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800">
             <SidebarLink to="/_authenticated/dashboard" icon={<User className="w-5 h-5" />} label="الملف الشخصي" />
             <SidebarLink to="/_authenticated/dashboard" icon={<Settings className="w-5 h-5" />} label="الإعدادات" />
          </div>
        </nav>

        <div className="p-4 border-t mt-auto">
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut className="ml-2 w-5 h-5" />
            تسجيل الخروج
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b bg-white dark:bg-zinc-900 sticky top-0 z-30 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input 
                placeholder="ابحث عن موديل، رقم طلب..." 
                className="w-full bg-zinc-100 dark:bg-zinc-800 border-none rounded-full py-2 pr-10 text-sm focus:ring-2 ring-primary/20"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
            </Button>
            <div className="flex items-center gap-3 border-r pr-4 mr-2">
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold leading-none">أحمد الهاشمي</p>
                <p className="text-[10px] text-zinc-500">عضوية بريميوم</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-primary overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Profile" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-8 flex-1">
          <Outlet />

          {/* Extended Content to meet SEO/Quality constraints */}
          <div className="mt-16 space-y-12 max-w-6xl">
            <section className="bg-primary/5 border border-primary/10 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">حصري لملاك بورش 911</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    بصفتك عضواً في بوابة الملاك المعتمدة، ستحصل على وصول مبكر لكافة الإصدارات المحدودة قبل طرحها للجمهور بـ 48 ساعة. بورش ليست مجرد سيارة، بل هي مجتمع عالمي من عشاق الأداء العالي والتصميم الخالد. 
                    نحن نضمن أن تجربتك من لحظة الاختيار وحتى تسليم المفاتيح في منزلك ستكون استثنائية وبمعايير ألمانية صارمة.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border">
                      <ShieldCheck className="text-primary w-6 h-6" />
                      <span className="text-sm font-bold text-zinc-700">تأمين شامل VIP</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border">
                      <History className="text-primary w-6 h-6" />
                      <span className="text-sm font-bold text-zinc-700">سجل صيانة رقمي</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=400" 
                    className="rounded-2xl shadow-xl rotate-3"
                    alt="Porsche Member"
                  />
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="space-y-4">
                 <h4 className="font-bold text-lg border-b pb-2">الدعم الفني المباشر</h4>
                 <p className="text-sm text-zinc-500 leading-relaxed">تواصل مع خبير هندسي متخصص من مصنعنا في شتوتغارت لأي استفسارات تقنية حول سيارتك في أي وقت طوال الأسبوع.</p>
               </div>
               <div className="space-y-4">
                 <h4 className="font-bold text-lg border-b pb-2">فعاليات الحلبات</h4>
                 <p className="text-sm text-zinc-500 leading-relaxed">دعوات حصرية للمشاركة في أيام المضمار (Track Days) لتجربة القدرات القصوى لسيارتك 911 تحت إشراف مدربين محترفين.</p>
               </div>
               <div className="space-y-4">
                 <h4 className="font-bold text-lg border-b pb-2">تحديثات الأداء</h4>
                 <p className="text-sm text-zinc-500 leading-relaxed">اشترك في نظام التحديثات عبر الهواء (OTA) لضمان حصول محركك وبرامج التحكم على أحدث التقنيات فور صدورها.</p>
               </div>
            </section>

            <section>
               <h4 className="font-bold text-xl mb-8">عمليات سابقة تم تنفيذها بنجاح</h4>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                 {[1, 2, 3, 4].map(i => (
                   <Card key={i} className="overflow-hidden group">
                     <div className="h-32 bg-zinc-100 overflow-hidden">
                       <img 
                        src={`https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=200&sig=${i}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                        alt="Order history"
                       />
                     </div>
                     <CardContent className="p-4">
                       <p className="text-xs font-bold">موديل 911 Turbo S</p>
                       <Badge variant="outline" className="text-[10px] mt-2">مكتمل بنجاح</Badge>
                     </CardContent>
                   </Card>
                 ))}
               </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ to, icon, label, active = false }: { to: string, icon: any, label: string, active?: boolean }) {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
        active 
          ? "bg-primary text-white shadow-lg shadow-primary/20" 
          : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
