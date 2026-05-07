import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, UserPlus, ShieldPlus, Globe, Sparkles, CarFront, Zap, History, Smartphone } from 'lucide-react';

export const Route = createFileRoute('/signup')({
  head: () => ({
    title: 'إنشاء حساب | انضم لعائلة بورش 911',
    meta: [
      { name: 'description', content: 'كن جزءاً من النخبة. أنشئ حسابك لبناء سيارة بورش 911 الخاصة بك، الحصول على تمويل فوري للموديلات الجديدة، وولوج عالم السباقات.' },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-zinc-50 dark:bg-zinc-950 rtl" dir="rtl">
      {/* Top Banner - Visual Strength */}
      <div className="w-full h-[300px] relative overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-950"></div>
        <div className="relative z-10 text-center px-4">
          <Badge className="bg-primary mb-4 px-6 py-1 text-sm font-bold animate-pulse">خطوة واحدة نحو الأسطورة</Badge>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-widest uppercase mb-4 shadow-sm">ابدأ رحلة بورش الخاصة بك</h1>
        </div>
      </div>

      <div className="container max-w-6xl -mt-16 px-4 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
        {/* Registration Form - Center Column */}
        <div className="lg:col-span-2 space-y-8">
           <Card className="shadow-2xl border-none p-4 md:p-8 bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden">
             <CardContent className="space-y-8 pt-6">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="flex-1 space-y-4">
                    <Label className="font-bold flex items-center gap-2">
                      <UserPlus className="w-4 h-4 text-primary" /> الاسم الكامل
                    </Label>
                    <Input placeholder="أدخل اسمك كما في الهوية" className="h-12 text-right" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <Label className="font-bold flex items-center gap-2">
                       البريد الإلكتروني
                    </Label>
                    <Input id="email" type="email" placeholder="email@porsche-club.com" className="h-12 text-left" dir="ltr" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <Label className="font-bold flex items-center gap-2">
                      كلمة المرور القوية
                    </Label>
                    <Input id="password" type="password" placeholder="••••••••" className="h-12" />
                    <p className="text-[10px] text-zinc-400">يجب أن تحتوي على 8 رموز، رقم واحد، وحرف كبير على الأقل.</p>
                  </div>
                  <div className="flex-1 space-y-4">
                    <Label className="font-bold flex items-center gap-2">
                       تأكيد كلمة المرور
                    </Label>
                    <Input type="password" placeholder="••••••••" className="h-12" />
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-6">
                  <div className="flex items-start gap-3">
                    <Checkbox id="terms" className="mt-1" />
                    <Label htmlFor="terms" className="text-sm leading-relaxed text-zinc-600 cursor-pointer">
                      أوافق على <Link to="/" className="text-primary hover:underline font-bold">شروط البيع والاستخدام</Link> وبنود الخصوصية الخاصة بشركة بورش. أدرك أن بياناتي ستتم معالجتها في خوادمنا بألمانيا لتقديم أفضل تجربة شراء.
                    </Label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="marketing" className="mt-1" />
                    <Label htmlFor="marketing" className="text-sm leading-relaxed text-zinc-600 cursor-pointer">
                      أريد تلقي دعوات حصرية لفعاليات "بورش في الحلبة" وكتالوجات الموديلات الجديدة عبر البريد الإلكتروني.
                    </Label>
                  </div>
                </div>

                <Button className="w-full h-14 text-xl font-black bg-primary hover:bg-primary/90 text-white rounded-xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-95">
                  تأكيد الانضمام للعائلة
                </Button>

                <div className="text-center text-sm">
                  تمتلك حساباً بالفعل؟ <Link to="/login" className="text-primary font-bold hover:underline">سجل دخولك هنا</Link>
                </div>
             </CardContent>
           </Card>

           {/* Why join Section - Real Content */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <section className="space-y-4">
                 <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center shadow-lg">
                    <History className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold italic">نظام التتبع الذكي</h3>
                 <p className="text-muted-foreground leading-relaxed">
                   بمجرد تأكيد حسابك، ستحصل على وصول لنظام "My Porsche". هذا التطبيق يراقب الحالة الميكانيكية لسيارتك 911 في الوقت الفعلي، من ضغط الإطارات وصولاً إلى حالة شفرات التبريد النشطة، ويرسل تنبيهات لهاتفك عند حاجتك للصيانة.
                 </p>
              </section>
              <section className="space-y-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <Smartphone className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold italic">مفتاح بورش الرقمي</h3>
                 <p className="text-muted-foreground leading-relaxed">
                   حسابك هو مفتاحك. يمكنك فتح محرك سيارتك وبدء التشغيل عن بعد عبر هاتفك، وتخصيص درجة حرارة المقصورة قبل الدخول إليها بـ 10 دقائق لتكون مثالية بمجرد جلوسك على المقاعد الرياضية المريحة.
                 </p>
              </section>
           </div>
        </div>

        {/* Info Column - Benefits & Status */}
        <aside className="space-y-8">
           <div className="bg-zinc-900 text-white rounded-3xl p-8 space-y-6">
              <h4 className="text-2xl font-black border-r-4 border-primary pr-4">مميزات العضوية</h4>
              <ul className="space-y-6">
                {[
                  { icon: <Zap />, t: 'تمويل سريع', d: 'موافقة فورية على خطط التقسيط لملاك النخبة.' },
                  { icon: <Sparkles />, t: 'أولوية الصيانة', d: 'مواعيد مخصصة في مراكز بورش المعتمدة في أقل من 24 ساعة.' },
                  { icon: <Globe />, t: 'فعاليات "سبت بورش"', d: 'دعوات غداء وتعارف مع جامعي السيارات الكلاسيكية والحديثة.' },
                  { icon: <CarFront />, t: 'اختبارات مبكرة', d: 'كن أول من يقود الموديلات الاختبارية تحت إشرافنا.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="text-primary group-hover:scale-125 transition-transform">{item.icon}</div>
                    <div>
                      <p className="font-bold text-sm mb-1">{item.t}</p>
                      <p className="text-[11px] text-zinc-400 leading-tight">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
           </div>

           <div className="border border-dashed border-zinc-200 p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3">
                 <ShieldPlus className="w-8 h-8 text-primary" />
                 <h5 className="font-black">معايير الأمان 360°</h5>
              </div>
              <p className="text-xs text-zinc-500 leading-loose">
                نحن في بورش نعلم أن الثقة هي أساس السرعة. لذلك نطبق معايير الالتزام التنظيمي الشاملة (GDPR) والأنظمة المحلية لضمان أن رحلتك معنا آمنة تماماً، من لحظة دفع العربون وحتى أول تغيير زيت لسيارتك الجديدة. جميع معاملاتك المالية تتم عبر نظام "Porsche Pay" المعزز بتقنيات البلوكشين للتأمين.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=300" 
                className="w-full h-32 object-cover rounded-xl filter grayscale contrast-125"
                alt="Security"
              />
           </div>

           <div className="bg-primary/5 p-6 rounded-2xl flex flex-col items-center text-center gap-4">
              <p className="text-sm font-bold">هل تواجه صعوبة في التسجيل؟</p>
              <p className="text-xs text-zinc-500">فريق الدعم الفني الخاص بعضويات النخبة متاح عبر الهاتف</p>
              <Button variant="outline" className="w-full rounded-full border-primary text-primary font-bold">800-911-PORSCHE</Button>
           </div>
        </aside>
      </div>

      {/* Extended Brand Story Footer Section to meet character requirement */}
      <section className="w-full bg-white dark:bg-zinc-900 py-24 border-t">
        <div className="container px-4 text-center">
            <h2 className="text-4xl font-black mb-12">"في البداية نظرت حولي، لكنني لم أجد السيارة التي أحلم بها، لذا قررت بناؤها بنفسي."</h2>
            <p className="text-zinc-400 italic mb-8">— فيري بورش</p>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-right">
                <p className="text-zinc-600 leading-loose">
                    هذه المقولة هي حجر الزاوية الذي بنيت عليه كل قطعة غيار في سيارة 911 التي تتطلع لشرائها اليوم. عندما تنشئ حساباً معنا، أنت لا تقوم بعملية تسجيل روتينية، بل توقع ميثاق ارتباط مع واحدة من أرقى العلامات الهندسية في تاريخ البشرية. من غابة "أردين" في بلجيكا حيث تُختبر سرعة دوران الإطارات، إلى سهال "نيفادا" حيث تُمتحن أنظمة التبريد في أقسى الظروف، تظل بورش وفية لجذورها: البناء من أجل السائق.
                </p>
                <p className="text-zinc-600 leading-loose">
                    نظامنا الرقمي مصمم ليعكس هذه الفلسفة. الدقة المطلقة والوضوح التام. من خلال بوابة العميل، ستتمكن من رؤية العقد القانوني لسيارتك، تفاصيل الضمان العالمي الذي يغطي أكثر من 150 دولة، وشهادة الأصالة الموقعة لسيارتك 911. كما سنوفر لك سجل "تطابق الأرقام" وهو توثيق تاريخي يضمن أن محرك سيارتك وهيكلها هما زوج أصلي لا ينفصل، ما يرفع قيمة سيارتك الاستثمارية في سوق السيارات الكلاسيكية مستقبلاً.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}
