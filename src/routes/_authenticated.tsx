import { createFileRoute, Outlet, Link, useNavigate } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
    LayoutDashboard, 
    Car, 
    Settings, 
    LogOut, 
    Bell, 
    Search, 
    User, 
    ShieldCheck, 
    CreditCard, 
    History, 
    BarChart3, 
    Zap,
    MapPin,
    Calendar,
    Wrench,
    Crown
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute('/_authenticated')({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    toast.info("جاري تسجيل الخروج...");
    setTimeout(() => {
        navigate({ to: '/login' });
    }, 1000);
  };

  const navItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard className="w-5 h-5" />, to: "/dashboard" },
    { label: "سياراتي", icon: <Car className="w-5 h-5" />, to: "/inventory" },
    { label: "الحجوزات", icon: <Calendar className="w-5 h-5" />, to: "/contact" },
    { label: "سجل الصيانة", icon: <Wrench className="w-5 h-5" />, to: "/about" },
    { label: "التمويل", icon: <CreditCard className="w-5 h-5" />, to: "/pricing" },
    { label: "الإعدادات", icon: <Settings className="w-5 h-5" />, to: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden text-zinc-900">
      {/* Sidebar - Desktop */}
      <aside className={`bg-black text-white ${isSidebarOpen ? 'w-72' : 'w-20'} transition-all duration-300 flex flex-col h-full border-r border-white/10 hidden md:flex`}>
        <div className="p-8 flex items-center gap-4">
            <div className="w-8 h-8 bg-red-600 flex-shrink-0" />
            {isSidebarOpen && <span className="text-xl font-black italic tracking-tighter uppercase">Porsche <span className="text-red-600">ID</span></span>}
        </div>

        <nav className="flex-1 px-4 py-8 space-y-4">
            {navItems.map((item, idx) => (
                <Link 
                    key={idx} 
                    to={item.to} 
                    className="flex items-center gap-4 px-4 py-3 rounded-none hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white group"
                    activeProps={{ className: "bg-red-600/10 text-red-600 border-l-4 border-red-600 !text-white" }}
                >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    {isSidebarOpen && <span>{item.label}</span>}
                </Link>
            ))}
        </nav>

        <div className="p-8 border-t border-white/10">
            <div className={`flex items-center gap-4 mb-8 ${!isSidebarOpen && 'justify-center'}`}>
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center font-black">A</div>
                {isSidebarOpen && (
                    <div className="flex flex-col">
                        <span className="text-xs font-black italic">أحمد الغامدي</span>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Porsche Enthusiast</span>
                    </div>
                )}
            </div>
            <Button 
                onClick={handleLogout}
                variant="ghost" 
                className={`w-full text-zinc-500 hover:text-red-600 hover:bg-red-600/10 rounded-none justify-start gap-4 px-4 h-12 uppercase font-black text-[10px] tracking-[0.2em] ${!isSidebarOpen && 'justify-center'}`}
            >
                <LogOut className="w-5 h-5" />
                {isSidebarOpen && "خروج"}
            </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-zinc-200 px-8 flex items-center justify-between z-20">
            <div className="flex items-center gap-8 flex-1">
                <div className="relative max-w-md w-full hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input className="bg-zinc-100 border-none rounded-none py-2 pl-10 pr-4 w-full text-xs font-bold uppercase tracking-widest focus:ring-1 focus:ring-red-600 transition-all font-sans" placeholder="Search Cars, VIN, Services..." />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-none text-[10px] font-black uppercase italic text-zinc-600">
                    <Crown className="w-3 h-3 text-red-600" /> Platinum Member
                </div>
                <Button variant="ghost" size="icon" className="relative text-zinc-400 hover:text-black">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full" />
                </Button>
                <div className="h-8 w-px bg-zinc-200 mx-2 hidden sm:block" />
                <Link to="/about" className="flex items-center gap-3 group">
                    <div className="flex flex-col text-right hidden sm:flex">
                         <span className="text-[10px] font-black uppercase tracking-tighter">مركز الرياض</span>
                         <span className="text-[9px] text-green-600 font-bold uppercase">Online Now</span>
                    </div>
                    <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-red-600 transition-colors" />
                </Link>
            </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8">
            <div className="max-w-6xl mx-auto space-y-12 pb-20">
                <Outlet />
                
                {/* Dashboard Widgets (Shared Content) */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-200">
                    <Card className="rounded-none border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white group">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-red-600/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-black uppercase text-zinc-400">Monthly Performance</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black italic uppercase tracking-tighter">98% Efficient</h4>
                                <p className="text-xs text-zinc-500 mt-1 font-bold italic">Healthy metrics based on your 911's telemetry data.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white group">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-red-600/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-black uppercase text-zinc-400">Protection Status</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black italic uppercase tracking-tighter">Porsche Approved</h4>
                                <p className="text-xs text-zinc-500 mt-1 font-bold italic">Active warranty until Oct 2026. Coverage fully active.</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white group">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-red-600/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                                    <History className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-black uppercase text-zinc-400">Order History</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black italic uppercase tracking-tighter">1 Pending Order</h4>
                                <p className="text-xs text-zinc-500 mt-1 font-bold italic">Your 911 GT3 RS is currently in production phase (Stage 3).</p>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Promotional Banner */}
                <section className="relative overflow-hidden bg-zinc-900 p-12 text-white">
                    <div className="absolute top-0 right-0 w-1/3 h-full grayscale opacity-20 pointer-events-none">
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 max-w-xl">
                         <div className="flex items-center gap-2 mb-4">
                            <Zap className="w-5 h-5 text-red-600" />
                            <span className="text-xs font-black uppercase tracking-widest text-red-600 italic">Exclusive Member Offer</span>
                         </div>
                         <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 leading-none text-white">Drive the legend <br /> at Silverstone.</h3>
                         <p className="text-zinc-400 text-sm leading-relaxed mb-8 italic">احجز تجربة القيادة الحصرية لملاك بورش بلاتينيوم في حلبة سيلفرستون العريقة. المقاعد محدودة.</p>
                         <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none px-10 py-6 font-black uppercase text-xs tracking-[0.2em] italic">Redeem Experience</Button>
                    </div>
                </section>

                {/* Information Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
                    <div className="space-y-6">
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter border-b-2 border-red-600 w-fit pb-2">عن برنامج Porsche ID</h4>
                        <p className="text-sm text-zinc-500 leading-relaxed italic">برنامج Porsche ID هو بوابتك الرقمية لكل ما يتعلق بتجربة ملكية بورش. تم تصميمه ليوفر لك تحكماً كاملاً في بيانات سيارتك، الوصول إلى الخدمات الرقمية الحصرية، والتواصل المباشر مع خبراء بورش حول العالم.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-zinc-100 italic">
                                <span className="block text-[10px] font-black uppercase text-zinc-400 mb-1 leading-none">Global Network</span>
                                <span className="text-sm font-bold uppercase tracking-tight">850+ Delivery Centers</span>
                            </div>
                            <div className="p-4 bg-zinc-100 italic">
                                <span className="block text-[10px] font-black uppercase text-zinc-400 mb-1 leading-none">Security</span>
                                <span className="text-sm font-bold uppercase tracking-tight">Enterprise Grade Encryption</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter border-b-2 border-red-600 w-fit pb-2">أحدث التحديثات</h4>
                        <div className="space-y-4">
                            {[
                                { date: "15 OCT", title: "تحديث نظام Connect لسيارة 911 Turbo", type: "UPDATE" },
                                { date: "10 OCT", title: "فعالية بورش تركت داي - التسجيل مفتوح", type: "EVENT" },
                                { date: "02 OCT", title: "صدور تقرير الفحص الشهري لسيارتك", type: "SERVICE" }
                            ].map((update, i) => (
                                <div key={i} className="flex items-center gap-6 p-4 border-l-4 border-zinc-200 hover:border-red-600 bg-white transition-all cursor-pointer group">
                                    <div className="text-center font-black italic min-w-[50px]">
                                        <span className="block text-xl leading-none">{update.date.split(' ')[0]}</span>
                                        <span className="text-[10px] text-zinc-400">{update.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-sm font-black uppercase italic group-hover:text-red-600 transition-colors">{update.title}</h5>
                                        <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">{update.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
