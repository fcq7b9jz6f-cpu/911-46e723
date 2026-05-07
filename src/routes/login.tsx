import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/card'; // Fix incorrect import if needed, but normally use @/components/ui/button
import { Button as ShButton } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, ShieldCheck, Trophy, Gauge, Lock, Mail, UserPlus, Info, CheckCircle2 } from 'lucide-react';

export const Route = createFileRoute('/login')({
  head: () => ({
    title: 'تسجيل الدخول | انضم إلى نادي 911 Heritage',
    meta: [
      { name: 'description', content: 'سجل دخولك للوصول إلى العروض الحصرية، تتبع حجوزاتك، والحصول على دعوات لفعاليات بورش الخاصة.' },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col bg-zinc-950 p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Porsche Interior" />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <Link to="/" className="flex items-center gap-2 group mb-20">
            <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Car className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="text-4xl font-black tracking-tighter uppercase italic">911 Heritage</span>
          </Link>
          
          <div className="mt-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">أهلاً بك في <br /><span className="text-primary italic">عالم النخبة</span></h2>
              <p className="text-xl text-gray-400 max-w-md leading-relaxed">بصفتك عضواً في Heritage، ستحصل على وصول مبكر لأندر إصدارات بورش 911 وخدمات صيانة مخصصة تناسب نمط حياتك.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
              <div className="flex gap-4">
                <div className="bg-primary/20 p-3 rounded-xl h-fit"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                <div><h4 className="font-bold italic">أمان تام</h4><p className="text-sm text-gray-500">حماية كاملة لبياناتك الشخصية ومعلومات ملكيتك.</p></div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/20 p-3 rounded-xl h-fit"><Trophy className="h-6 w-6 text-primary" /></div>
                <div><h4 className="font-bold italic">نادي الملاك</h4><p className="text-sm text-gray-500">دخول حصري لتجمعات وعروض القيادة الدولية.</p></div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-12 w-12 rounded-full border-4 border-zinc-950 bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 font-medium">انضم إلى أكثر من <span className="text-white font-bold tracking-tight">+500 مالك</span> في منطقتك.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 lg:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center lg:text-right">
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">مرحباً بك مجدداً</h1>
            <p className="text-muted-foreground">أدخل بياناتك للمتابعة إلى حسابك الخاص.</p>
          </div>

          <Tabs defaultValue="login" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-muted rounded-xl mb-8">
              <TabsTrigger value="login" className="rounded-lg font-bold italic data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">تسجيل الدخول</TabsTrigger>
              <TabsTrigger value="register" className="rounded-lg font-bold italic data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">عضوية جديدة</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-6">
              <div className="space-y-2 text-right">
                <Label className="font-bold italic uppercase tracking-wider opacity-60">البريد الإلكتروني</Label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="email" placeholder="name@example.com" className="h-14 pr-12 rounded-xl border-none ring-1 ring-input focus:ring-2 focus:ring-primary bg-muted/30" />
                </div>
              </div>
              <div className="space-y-2 text-right">
                 <div className="flex justify-between">
                  <Link to="/" className="text-sm text-primary hover:underline font-bold italic">نسيت كلمة المرور؟</Link>
                  <Label className="font-bold italic uppercase tracking-wider opacity-60">كلمة المرور</Label>
                </div>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input type="password" placeholder="••••••••" className="h-14 pr-12 rounded-xl border-none ring-1 ring-input focus:ring-2 focus:ring-primary bg-muted/30" />
                </div>
              </div>
              <ShButton className="w-full h-14 text-xl font-black italic rounded-xl shadow-xl shadow-primary/20">دخول الأعضاء</ShButton>
            </TabsContent>

            <TabsContent value="register" className="space-y-6 text-right">
               <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-bold italic opacity-60">الاسم الأول</Label>
                  <Input placeholder="أحمد" className="h-14 rounded-xl border-none ring-1 ring-input bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold italic opacity-60">اسم العائلة</Label>
                  <Input placeholder="المنصور" className="h-14 rounded-xl border-none ring-1 ring-input bg-muted/30" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-bold italic opacity-60">البريد الإلكتروني</Label>
                <Input type="email" placeholder="example@911.com" className="h-14 rounded-xl border-none ring-1 ring-input bg-muted/30" />
              </div>
              <div className="space-y-2">
                <Label className="font-bold italic opacity-60">كلمة المرور</Label>
                <Input type="password" placeholder="••••••••" className="h-14 rounded-xl border-none ring-1 ring-input bg-muted/30" />
              </div>
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-xs font-medium text-muted-foreground leading-relaxed italic">بإنشاء حساب، أنت توافق على شروط عضوية Heritage وسياستنا في التعامل مع البيانات الحصرية.</p>
              </div>
              <ShButton className="w-full h-14 text-xl font-black italic rounded-xl bg-primary text-primary-foreground">تقديم طلب العضوية</ShButton>
            </TabsContent>
          </Tabs>

          <section className="pt-8 border-t space-y-4">
             <h4 className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">مزايا العضوية</h4>
             <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: <Gauge className="h-4 w-4" />, label: "تتبع الحجز" },
                  { icon: <Car className="h-4 w-4" />, label: "خدمة VIP" },
                  { icon: <Info className="h-4 w-4" />, label: "نشرات تقنية" }
                ].map((m, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/20 border border-border/50">
                    <span className="text-primary">{m.icon}</span>
                    <span className="text-[10px] font-bold italic">{m.label}</span>
                  </div>
                ))}
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
