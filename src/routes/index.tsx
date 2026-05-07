import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Gauge, Settings } from "lucide-react";

export const Route = createFileRoute('/')({
  head: () => ({
    title: 'متجر بورش 911 الرسمي | Porsche 911 Store',
    meta: [
      { name: 'description', content: 'استكشف واشترِ أحدث موديلات بورش 911. من كاريرا إلى جي تي 3 آر إس، الأسطورة تبدأ من هنا.' },
      { property: 'og:title', content: 'بورش 911 - قمة الهندسة الألمانية' },
      { property: 'og:image', content: 'https://wxphtsgezburjqoqiqqo.supabase.co/storage/v1/object/public/webly-assets/46e723de-b31d-41cf-a26b-db240ac99fa1/cars/hero-porsche.png' },
    ],
  }),
  component: HomeComponent,
});

function HomeComponent() {
  const models = [
    { name: "911 Carrera", price: "450,000", speed: "293 km/h", power: "385 hp", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop" },
    { name: "911 Turbo S", price: "890,000", speed: "330 km/h", power: "650 hp", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop" },
    { name: "911 GT3 RS", price: "1,200,000", speed: "296 km/h", power: "525 hp", image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://wxphtsgezburjqoqiqqo.supabase.co/storage/v1/object/public/webly-assets/46e723de-b31d-41cf-a26b-db240ac99fa1/cars/hero-porsche.png" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Porsche 911 GT3 RS"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl animate-in fade-in zoom-in duration-1000">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white border-none px-4 py-1 text-sm font-bold tracking-widest uppercase">the soul of a sports car</Badge>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase mb-6 leading-none">
            Porsche <span className="text-red-600">911</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            ليست مجرد سيارة، بل هي حلم يتحقق. هندسة معقدة تجتمع مع أداء استثنائي لتعريف معنى القيادة الحقيقي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-none px-12 py-8 text-lg font-bold uppercase tracking-widest group">
              ابدأ التخصيص
              <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-none border-white text-white hover:bg-white hover:text-black px-12 py-8 text-lg font-bold uppercase tracking-widest transition-all">
              اكتشف الموديلات
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-16 px-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
            <div className="flex flex-col items-center gap-2">
                <Gauge className="w-5 h-5 text-red-600" />
                <span>0-100 in 2.7s</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Zap className="w-5 h-5 text-red-600" />
                <span>650 Horsepower</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                <span>Precision Control</span>
            </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">اختيار الأساطير</h2>
              <p className="text-lg text-zinc-500">من حلبات السباق إلى الطرق السريعة، تظل بورش 911 المعيار الذهبي للسيارات الرياضية حول العالم منذ عام 1963.</p>
            </div>
            <Link to="/models" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              شاهد كل الموديلات <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <Card key={idx} className="group overflow-hidden border-none rounded-none bg-white dark:bg-zinc-900 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black italic uppercase">{model.name}</h3>
                    <Badge variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 font-mono">NEW</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-xs font-bold uppercase tracking-wider text-zinc-400">
                    <div className="flex flex-col gap-1 border-r pr-4">
                      <span>السرعة القصوى</span>
                      <span className="text-black dark:text-white text-lg font-black">{model.speed}</span>
                    </div>
                    <div className="flex flex-col gap-1 pl-4">
                      <span>القوة</span>
                      <span className="text-black dark:text-white text-lg font-black">{model.power}</span>
                    </div>
                  </div>
                  <div className="mt-auto flex justify-between items-center border-t pt-8">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-400 uppercase font-black">تبدأ من</span>
                        <span className="text-xl font-black italic">{model.price} ريال</span>
                    </div>
                    <Button variant="outline" className="rounded-none border-black dark:border-white uppercase font-bold text-xs">عرض التفاصيل</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  الهندسة <br /> بلا حدود
                </h2>
                <div className="space-y-6 text-zinc-400">
                    <p className="text-xl leading-relaxed">في بورش، نحن لا نبني سيارات، نحن نبني شغفاً. كل برغي، كل منحنى، وكل صوت يحكي قصة المئات من مهندسينا الذين يسعون للكمال.</p>
                    <div className="grid grid-cols-2 gap-8 pt-8 pb-4">
                        <div className="flex flex-col gap-2">
                            <Settings className="w-10 h-10 text-red-600 mb-2" />
                            <h4 className="text-white font-bold uppercase">ناقل PDK الأسطوري</h4>
                            <p className="text-sm">تبديل غيارات بأسرع من رمشة العين لتحقيق أقصى استجابة.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Shield className="w-10 h-10 text-red-600 mb-2" />
                            <h4 className="text-white font-bold uppercase">ثبات فائق</h4>
                            <p className="text-sm">نظام تعليق ذكي يتكيف مع الطريق للحفاظ على توازن مثالي.</p>
                        </div>
                    </div>
                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-10 py-6 font-black uppercase tracking-widest mt-8">اقرأ عن التقنيات</Button>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-4 border border-red-600/30 -z-1" />
                <img 
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop" 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Engine Detail" 
                />
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative text-center bg-white dark:bg-black overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">جاهز للقيادة؟</h2>
            <p className="text-2xl text-zinc-500 mb-12">اترك العالم خلفك في مرآة الرؤية الخلفية. ابدأ رحلتك مع 911 اليوم.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-none px-12 py-8 text-xl font-black uppercase">احجز تجربة قيادة</Button>
                <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-none px-12 py-8 text-xl font-black uppercase">تواصل مع وكيل</Button>
            </div>
        </div>
      </section>
    </div>
  );
}
