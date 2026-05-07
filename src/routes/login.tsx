import { useState } from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Shield, Lock, ArrowLeft, Car, Chrome, Globe, Key, UserCheck } from "lucide-react";

export const Route = createFileRoute('/login')({
  head: () => ({
    title: 'تسجيل الدخول | بورش السعودية',
    meta: [{ name: 'description', content: 'سجل دخولك إلى حساب بورش للوصول إلى ميزات التخصيص الحصرية ومتابعة طلباتك.' }],
  }),
  component: LoginComponent,
});

function LoginComponent() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم تسجيل الدخول بنجاح");
      navigate({ to: '/' });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white relative overflow-hidden">
      {/* Visual Side */}
      <div className="hidden md:flex md:w-1/2 bg-black relative p-12 flex-col justify-between">
        <div className="absolute inset-0 opacity-40">
            <img 
                src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2000" 
                className="w-full h-full object-cover" 
                alt="Porsche Dashboard"
            />
        </div>
        <div className="relative z-10">
            <Link to="/" className="text-white flex items-center gap-2 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-black uppercase italic tracking-tighter">العودة للرئيسية</span>
            </Link>
        </div>
        <div className="relative z-10 max-w-lg">
            <h2 className="text-6xl font-black italic uppercase text-white mb-6 leading-none tracking-tighter">
                مرحباً بك <br /> <span className="text-red-600">من جديد</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              سجل دخولك لتجربة عالم بورش المخصص. من هنا تبدأ رحلتك نحو امتلاك الأسطورة.
            </p>
        </div>
        <div className="relative z-10 flex gap-8">
            <div className="flex flex-col gap-1">
                <span className="text-white font-black text-2xl italic tracking-tighter">30k+</span>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">فوز في السباقات</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-white font-black text-2xl italic tracking-tighter">1963</span>
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">تاريخ الانطلاق</span>
            </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-20">
        <div className="w-full max-w-[440px]">
          <div className="mb-12 text-center md:text-right">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">تسجيل الدخول</h1>
            <p className="text-zinc-500 uppercase text-xs font-black tracking-widest italic">ادخل بيانات حسابك للمتابعة</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                 البريد الإلكتروني <Mail className="w-3 h-3 text-red-600" />
              </label>
              <Input 
                type="email" 
                placeholder="name@example.com" 
                className="rounded-none border-zinc-200 h-14 bg-zinc-50 focus:bg-white transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black uppercase tracking-widest flex items-center gap-2">
                   كلمة المرور <Lock className="w-3 h-3 text-red-600" />
                </label>
                <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:underline">نسيت كلمة المرور؟</Link>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="rounded-none border-zinc-200 h-14 bg-zinc-50 focus:bg-white transition-all"
                required
              />
            </div>

            <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black hover:bg-zinc-800 text-white font-black uppercase py-8 text-lg rounded-none shadow-xl tracking-widest italic h-16"
            >
              {loading ? "جاري التحميل..." : "تسجيل الدخول"}
            </Button>

            <div className="relative py-4 flex items-center justify-center">
                <div className="absolute inset-x-0 h-px bg-zinc-100" />
                <span className="relative z-10 px-4 bg-white text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">أو استخدم</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="rounded-none h-14 uppercase font-black text-xs gap-2 border-zinc-200">
                    <Globe className="w-4 h-4" /> Google
                </Button>
                <Button variant="outline" className="rounded-none h-14 uppercase font-black text-xs gap-2 border-zinc-200">
                    <Chrome className="w-4 h-4" /> Apple ID
                </Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-zinc-100 text-center">
             <p className="text-sm text-zinc-500 italic">
                ليس لديك حساب؟ <Link to="/signup" className="text-red-600 font-black uppercase tracking-widest hover:underline ml-1">إنشاء حساب جديد</Link>
             </p>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-4 opacity-50">
             <div className="flex flex-col items-center gap-2 text-center">
                <Shield className="w-5 h-5" />
                <span className="text-[8px] font-black uppercase tracking-tighter">أمان تام</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-center">
                <UserCheck className="w-5 h-5" />
                <span className="text-[8px] font-black uppercase tracking-tighter">دخول محمي</span>
             </div>
             <div className="flex flex-col items-center gap-2 text-center">
                <Key className="w-5 h-5" />
                <span className="text-[8px] font-black uppercase tracking-tighter">تشفير عالي</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Mail = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
