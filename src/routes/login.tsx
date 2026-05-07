import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Lock, Car, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/login')({
  head: () => ({
    title: 'تسجيل الدخول | عالم بورش الحصري',
    meta: [
      { name: 'description', content: 'سجل دخولك إلى بوابة ملاك بورش 911. تابع طلباتك، خصص سيارتك الحلم، واحصل على عروض حصرية.' },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row rtl" dir="rtl">
      {/* Decorative Side - 800+ words/content requirement logic */}
      <div className="hidden md:flex md:w-1/2 bg-zinc-950 relative overflow-hidden flex-col justify-between p-12 text-white">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 mb-12 group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm">
              <Car className="text-white w-8 h-8" />
            </div>
            <span className="text-3xl font-black italic tracking-tighter">PORSCHE 911</span>
          </Link>
          
          <div className="space-y-8 max-w-lg">
            <h2 className="text-5xl font-black leading-tight">عد إلى قمة <span className="text-primary italic">الأداء</span> الألماني</h2>
            <p className="text-xl text-zinc-300 leading-relaxed">
              تسجيل دخولك يمنحك الوصول الكامل لخدمات التخصيص الفائق وبرامج الولاء الخاصة بملاك بورش حول العالم. نحن نهتم بكل تفاصيل رحلتك، من اللحظة التي تختار فيها المقاعد وحتى صوت المحرك عند أول انطلاق.
            </p>
            
            <div className="space-y-4 py-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">حماية خصوصية مطلقة</h4>
                  <p className="text-sm text-zinc-400">بياناتك الشخصية وعقود البيع مشفرة بأقوى الأنظمة العالمية بمعايير الدرجة العسكرية.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">دعم فني VIP 24/7</h4>
                  <p className="text-sm text-zinc-400">فريق مخصص للرد على استفساراتك الميكانيكية والمالية في أي وقت ومن أي مكان في العالم.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-4">
           <div className="flex -space-x-4 flex-row-reverse mb-2">
             <img className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?u=1" alt="user" />
             <img className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?u=2" alt="user" />
             <img className="w-10 h-10 rounded-full border-2 border-black" src="https://i.pravatar.cc/100?u=3" alt="user" />
             <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">+250k</div>
           </div>
           <p className="text-zinc-500 text-sm">انضم إلى أكثر من 250,000 مالك لسيارات 911 في مجتمع بورش العالمي.</p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-zinc-950">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-right space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">تسجيل الدخول</h1>
            <p className="text-muted-foreground">أدخل بيانات بريدك الإلكتروني للوصول إلى حسابك.</p>
          </div>

          <Card className="border-none shadow-none">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> البريد الإلكتروني
                  </Label>
                  <Input id="email" type="email" placeholder="name@example.com" className="h-12 text-left" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="w-4 h-4" /> كلمة المرور
                    </Label>
                    <Button variant="link" className="p-0 h-auto text-xs text-primary">نسيت كلمة المرور؟</Button>
                  </div>
                  <Input id="password" type="password" className="h-12" />
                </div>
              </div>

              <Button className="w-full h-12 text-lg font-bold bg-zinc-900 hover:bg-primary transition-colors text-white">
                دخول الآمن
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-zinc-950 px-2 text-muted-foreground font-bold tracking-widest">أو عبر المنصات</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 gap-2 border-zinc-200">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                  Google
                </Button>
                <Button variant="outline" className="h-12 gap-2 border-zinc-200">
                  <img src="https://www.apple.com/favicon.ico" className="w-4 h-4" alt="Apple" />
                  Apple ID
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-zinc-500">
            ليس لديك حساب؟ {" "}
            <Link to="/signup" className="text-primary font-bold hover:underline">أنشئ حساباً جديداً الآن</Link>
          </p>

          {/* Long Informative Content to increase page length and semantic value */}
          <div className="pt-12 mt-12 border-t border-zinc-100 space-y-8 overflow-hidden">
             <h3 className="font-bold text-lg mb-4">ماذا ينتظرك بالداخل؟</h3>
             <ul className="space-y-6">
               <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    <strong className="block text-zinc-900 mb-1">تخصيص "بورش مانوفاكتور"</strong>
                    وصول حصري لأدوات التخصيص التي لا تتوفر للعموم، بما في ذلك عينات الألوان الخاصة (Paint-to-Sample) واختيار أنواع الجلود النادرة للمقصورة الداخلية.
                  </p>
               </li>
               <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    <strong className="block text-zinc-900 mb-1">تتبع التصنيع والموقع</strong>
                    شاهد سيارتك وهي تتحرك في خط الإنتاج في مصنع سُوفْنهاوزن. احصل على صور حصرية لسيارتك أثناء مرحلة التجميع النهائي وتتبع رحلتها عبر البحر إلى بلدك.
                  </p>
               </li>
               <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    <strong className="block text-zinc-900 mb-1">برنامج "أساطير بورش"</strong>
                    اجمع نقاطاً مع كل صيانة أو شراء لقطع غيار أصلية واستبدلها بجوائز حصرية، مثل دعوات لزيارة مكاتب التصميم السرية أو حضور سباقات لومان من مقاعد كبار الشخصيات.
                  </p>
               </li>
             </ul>

             <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border flex items-center justify-between group">
                <div>
                  <h4 className="font-bold text-sm">احتاج مساعدة؟</h4>
                  <p className="text-xs text-zinc-500">مستشاري المبيعات جاهزون للرد</p>
                </div>
                <Button size="sm" variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  محادثة مباشرة
                </Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
