import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Speedometer, Fuel, ShieldCheck, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // Fallback logic handled by head() in TanStack but using semantic for structure

export const Route = createFileRoute('/')({
  head: () => ({
    title: 'بورش 911 | المتجر الرسمي المعتمد',
    meta: [
      { name: 'description', content: 'استكشف واشتري أحدث موديلات بورش 911. بورش كاريرا، تيربو إس، وجي تي 3. تجربة قيادة لا مثيل لها وتقنيات بورش الأسطورية.' },
      { property: 'og:title', content: 'متجر بورش 911 - قمة الأداء الألماني' },
      { property: 'og:image', content: '/hero/porsche-911-hero.png' },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  const models = [
    {
      name: '911 Carrera',
      price: '450,000 ريال',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      specs: { power: '385 حصان', speed: '293 كم/س', acceleration: '4.2 ث' },
      badge: 'الأساسية'
    },
    {
      name: '911 Turbo S',
      price: '980,000 ريال',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
      specs: { power: '650 حصان', speed: '330 كم/س', acceleration: '2.7 ث' },
      badge: 'الأكثر مبيعاً'
    },
    {
      name: '911 GT3 RS',
      price: '1,200,000 ريال',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
      specs: { power: '525 حصان', speed: '296 كم/س', acceleration: '3.2 ث' },
      badge: 'للمضمار'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen rtl prose-none" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src="/hero/porsche-911-hero.png" 
          alt="Porsche 911 Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-primary text-white hover:bg-primary/90 px-4 py-1 text-sm font-bold tracking-widest uppercase">
            مستقبل القيادة اليوم
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            بورش <span className="text-primary italic">911</span>: أيقونة لا تشيخ
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            اجتمع التصميم الأسطوري مع الأداء الفائق والتحكم الدقيق. اكتشف معنا الهندسة الألمانية في أبهى صورها وتملك سيارة أحلامك الآن.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 rounded-none transition-all">
              اكتشف الموديلات
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none transition-all">
              احجز تجربة قيادة
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="text-white w-8 h-8 rotate-90" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تختار بورش 911؟</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Zap className="w-10 h-10 text-primary" />}
              title="أداء استثنائي"
              desc="محرك خلفي مسطح يوفر تسارعاً يخطف الأنفاس وتوازناً مثالياً في المنعطفات."
            />
            <FeatureCard 
              icon={<Speedometer className="w-10 h-10 text-primary" />}
              title="تكنولوجيا سباقات"
              desc="أنظمة إدارة التعليق النشط (PASM) وتقنيات مستوحاة مباشرة من حلبات الفورمولا."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-10 h-10 text-primary" />}
              title="أمان فائق"
              desc="نظام مكابح بورش السيراميكي (PCCB) ومساعدات القيادة الذكية لسلامتك."
            />
            <FeatureCard 
              icon={<Fuel className="w-10 h-10 text-primary" />}
              title="كفاءة ذكية"
              desc="استهلاك وقود مدروس مع أوضاع قيادة متعددة تناسب المدينة والطرق السريعة."
            />
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">الموديلات المتوفرة</h2>
              <p className="text-muted-foreground max-w-md">اختر الشخصية التي تناسبك من عائلة 911 العريقة، كل نسخة لها روحها الخاصة.</p>
            </div>
            <Link to="/inventory">
              <Button variant="link" className="text-primary font-bold text-lg group">
                عرض كامل المخزون <ArrowRight className="mr-2 group-hover:translate-x-[-4px] transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((car, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 right-4 bg-primary">{car.badge}</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-2xl font-bold">{car.name}</CardTitle>
                    <span className="text-primary font-bold">{car.price}</span>
                  </div>
                  <CardDescription>هندسة ألمانية تتجاوز الحدود المألوفة.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-center text-sm border-y py-4">
                    <div>
                      <p className="text-muted-foreground mb-1">القوة</p>
                      <p className="font-bold">{car.specs.power}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">السرعة</p>
                      <p className="font-bold">{car.specs.speed}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">0-100</p>
                      <p className="font-bold">{car.specs.acceleration}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zinc-900 dark:bg-white dark:text-black hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                    بناء وتخصيص سيارتك
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">إرث يمتد منذ 1963</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              منذ اللحظة التي خرجت فيها أول سيارة 911 من مصنع شتوتغارت، غيرت بورش مفهوم السيارات الرياضية للأبد. الحفاظ على المبادئ التقليدية مع تطور تكنولوجي لا يتوقف هو ما جعلها الخيار الأول لعشاق القيادة حول العالم.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>أكثر من 30,000 انتصار في سباقات لومان وغيرها.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>تصميم خالد يحافظ على قيمته الاستثمارية.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>تخصيص كامل بأكثر من 100,000 خيار لوني وتجهيزي.</span>
              </li>
            </ul>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-bold">
              اقرأ قصة الأسطورة
            </Button>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" 
               alt="Porsche Heritage" 
               className="rounded-2xl shadow-2xl relative z-10"
             />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">هل أنت جاهز لتجربة بورش الحقيقية؟</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">تواصل مع أحد مستشاري مبيعاتنا اليوم أو ابدأ العملية عبر الإنترنت بضغطة زر واحدة.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <Button size="xl" className="px-12 py-8 text-xl font-bold rounded-full shadow-lg">احجز الآن</Button>
             <Button size="xl" variant="outline" className="px-12 py-8 text-xl font-bold rounded-full border-2 transition-all hover:scale-105">اتصل بنا</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border border-zinc-100 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
