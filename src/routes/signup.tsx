import { useState } from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Shield, Lock, ArrowLeft, User, Mail, CheckCircle2, Trophy, Zap, Globe, Gauge, CreditCard, ShieldCheck } from "lucide-react";

export const Route = createFileRoute('/signup')({
  head: () => ({
    title: 'انضم إلى نادي بورش | إنشاء حساب جديد',
    meta: [
      { name: 'description', content: 'أنشئ حسابك في بورش السعودية واحصل على وصول حصري لإعدادات التخصيص، نظام الحجز المسبق، والفعاليات الخاصة بملاك 911.' },
    ],
  }),
  component: SignupComponent,
});

function SignupComponent() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم إنشاء الحساب بنجاح. مرحباً بك في عائلة بورش.");
      navigate({ to: '/' });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-x-hidden">
      {/* القسم الأيسر: محتوى تسويقي وبصري مكثف */}
      <div className="lg:w-1/2 bg-black text-white relative flex flex-col overflow-hidden">
        {/* خلفية بصرية */}
        <div className="absolute inset-0 opacity-40">
            <img 
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000" 
                className="w-full h-full object-cover" 
                alt="Porsche Carrera Interior"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>

        {/* محتوى القسم الأيسر */}
        <div className="relative z-10 p-8 md:p-16 flex flex-col h-full justify-between">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group mb-8">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-black uppercase italic tracking-tighter text-sm font-sans">Back to Showroom</span>
            </Link>
            
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
                ابدأ رحلة <br /> <span className="text-red-600">الامتياز</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-lg font-light leading-relaxed">
              انضمامك إلينا ليس مجرد عملية تسجيل، بل هو دخول إلى عالم من الأداء الفائق والخدمات الحصرية التي تليق بنمط حياتك.
            </p>
          </div>

          <div className="mt-20 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 p-6 border-l border-red-600 bg-white/5 backdrop-blur-sm">
                <Gauge className="w-8 h-8 text-red-600" />
                <h4 className="font-black uppercase italic">تتبع الأداء</h4>
                <p className="text-sm text-zinc-400">احصل على تقارير تفصيلية عن سيارتك، مواعيد الصيانة، وتاريخ الأداء في حلبات السباق.</p>
              </div>
              <div className="space-y-3 p-6 border-l border-red-600 bg-white/5 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-red-600" />
                <h4 className="font-black uppercase italic">التخصيص الحصري</h4>
                <p className="text-sm text-zinc-400">احفظ إعدادات بورش 911 الخاصة بك في "Custom Garage" وشاركها مع وكلائنا في أي وقت.</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">
                <div className="flex items-center gap-2"><Trophy className="w-4 h-4 text-orange-500" /> Motorsport Heritage</div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-500" /> Secure Data</div>
                <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-green-500" /> Worldwide Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* القسم الأيمن: نموذج التسجيل */}
      <div className="flex-1 flex flex-col justify-center items-center py-20 px-6 md:px-20 bg-zinc-50">
        <div className="w-full max-w-[500px] bg-white p-8 md:p-12 shadow-2xl border-t-8 border-red-600">
          <div className="mb-10 text-center md:text-right">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">إنشاء حساب جديد</h1>
            <p className="text-zinc-500 uppercase text-xs font-black tracking-widest italic">كن جزءاً من الأسطورة اليوم</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest">الاسم الأول</label>
                    <Input placeholder="أحمد" className="rounded-none border-zinc-200 h-12 bg-zinc-50" required />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest">اسم العائلة</label>
                    <Input placeholder="الغامدي" className="rounded-none border-zinc-200 h-12 bg-zinc-50" required />
                </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                 البريد الإلكتروني <Mail className="w-3 h-3 text-red-600" />
              </label>
              <Input type="email" placeholder="email@porsche-saudi.com" className="rounded-none border-zinc-200 h-12 bg-zinc-50" required />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                 كلمة المرور <Lock className="w-3 h-3 text-red-600" />
              </label>
              <Input type="password" placeholder="••••••••" className="rounded-none border-zinc-200 h-12 bg-zinc-50" required />
            </div>

            <div className="flex items-center space-x-2 space-x-reverse py-2">
                <input type="checkbox" id="terms" className="w-4 h-4 accent-red-600" required />
                <label htmlFor="terms" className="text-[10px] font-bold text-zinc-500 uppercase italic">
                    أوافق على <span className="underline cursor-pointer">شروط الاستخدام</span> و <span className="underline cursor-pointer">سياسة الخصوصية</span>
                </label>
            </div>

            <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black hover:bg-zinc-800 text-white font-black uppercase py-8 text-xl rounded-none shadow-xl tracking-[0.2em] italic h-18 transition-all"
            >
              {loading ? "جاري المعالجة..." : "تسجيل العضوية"}
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-between text-xs font-bold uppercase tracking-widest">
            <div className="h-px flex-1 bg-zinc-100" />
            <span className="px-4 text-zinc-400 italic">أو انضم عبر</span>
            <div className="h-px flex-1 bg-zinc-100" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="rounded-none h-12 border-zinc-200 font-black text-[10px] uppercase gap-2 hover:bg-zinc-50 italic">
                  Google Account
              </Button>
              <Button variant="outline" className="rounded-none h-12 border-zinc-200 font-black text-[10px] uppercase gap-2 hover:bg-zinc-50 italic">
                  Porsche ID
              </Button>
          </div>

          <p className="mt-10 text-center text-xs text-zinc-500 font-bold uppercase italic">
            لديك حساب بالفعل؟ <Link to="/login" className="text-red-600 font-black hover:underline mr-1 tracking-widest">سجل الدخول</Link>
          </p>
        </div>

        {/* أقسام إضافية لتعزيز المحتوى */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 mx-auto text-green-500" />
                <h5 className="font-black uppercase italic text-sm">أولوية الحجز</h5>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-bold">بمجرد التسجيل، تحصل على أولوية في قائمة الانتظار للموديلات الحصرية المحدودة مثل GT3 RS.</p>
            </div>
            <div className="text-center space-y-3">
                <CreditCard className="w-8 h-8 mx-auto text-blue-500" />
                <h5 className="font-black uppercase italic text-sm">تمويل مرن</h5>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-bold">وصول مباشر لبرامج تمويل بورش ليفينج وبرامج التأجير المنتهية بالتمليك بأسعار تنافسية.</p>
            </div>
            <div className="text-center space-y-3">
                <Globe className="w-8 h-8 mx-auto text-red-600" />
                <h5 className="font-black uppercase italic text-sm">عالم بورش</h5>
                <p className="text-[10px] text-zinc-400 leading-relaxed font-bold">دعوات خاصة لفعاليات Porsche Experience في حلبات مثل ريم ودبي أوتودروم.</p>
            </div>
        </div>

        <section className="mt-32 w-full max-w-5xl py-20 border-t border-zinc-200">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-black italic uppercase leading-tight">لماذا بورش 911؟ <br /> <span className="text-red-600 font-sans tracking-tight">The DNA of Excellence</span></h3>
                    <div className="space-y-4 text-zinc-500 text-sm leading-relaxed">
                        <p>منذ عام 1963، ظلت بورش 911 السيارة الرياضية التي لا تضاهى. التصميم المبدع، المحرك المتموضع في الخلف، والقدرة على الجمع بين الأناقة والوحشية على المضمار.</p>
                        <ul className="grid grid-cols-2 gap-4 uppercase font-black text-[9px] tracking-widest">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-600" /> Performance</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-600" /> Heritage</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-600" /> Design</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-600" /> Precision</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600" className="w-full h-32 object-cover grayscale opacity-50" />
                    <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=600" className="w-full h-32 object-cover" />
                    <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=600" className="w-full h-32 object-cover" />
                    <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600" className="w-full h-32 object-cover grayscale opacity-50" />
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
