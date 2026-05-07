import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Zap, Gauge, History, Star, ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/')({
  head: () => ({
    title: '911 Heritage | أفخم متجر لسيارات بورش 911 في الشرق الأوسط',
    meta: [
      { name: 'description', content: 'اكتشف مجموعة حصرية من سيارات بورش 911 الأسطورية. من الكلاسيكيات إلى أحدث إصدارات GT3 RS. تجربة قيادة لا تُنسى تبدأ من هنا.' },
      { property: 'og:title', content: '911 Heritage - عالم بورش الأسطوري' },
      { property: 'og:image', content: 'https://wxphtsgezburjqoqiqqo.supabase.co/storage/v1/object/public/webly-assets/46e723de-b31d-41cf-a26b-db240ac99fa1/hero/porsche-911.png' },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://wxphtsgezburjqoqiqqo.supabase.co/storage/v1/object/public/webly-assets/46e723de-b31d-41cf-a26b-db240ac99fa1/hero/porsche-911.png"
            alt="Porsche 911 GT3 RS"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Badge className="bg-primary/20 text-primary border-primary/50 text-sm px-4 py-1.5 backdrop-blur-sm">
              إصدارات محدودة 2024
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter italic">
              بورش 911 <br />
              <span className="text-primary italic">الإرث الخالد</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              ليس مجرد متجر، بل رحلة عبر الزمن مع الأيقونة التي أعادت تعريف الأداء. بورش 911 بكل تفاصيلها، تاريخها، وقوتها الجامحة متاحة الآن بين يديك.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                ابدأ رحلتك الآن
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white text-white hover:bg-white/10 backdrop-blur-sm">
                استشارة الخبراء
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "تسارع 0-100", value: "2.7s" },
              { label: "قوة حصانية", value: "525hp" },
              { label: "سرعة قصوى", value: "296km/h" },
              { label: "تراث يمتد لـ", value: "60 عام" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-4xl md:text-6xl font-black italic tracking-tighter text-primary">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">المجموعة المختارة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نختار بعناية أرقى الموديلات التي تجمع بين الأصالة والابتكار التكنولوجي الحديث.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "911 Carrera S", 
                price: "$131,000", 
                tag: "كلاسيك حديث",
                img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
              },
              { 
                name: "911 GT3 RS", 
                price: "$241,300", 
                tag: "وحش الحلبات",
                img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop"
              },
              { 
                name: "911 Turbo S", 
                price: "$230,400", 
                tag: "قمة الفخامة",
                img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((car, idx) => (
              <Card key={idx} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 focus-visible:inset-0 shadow-lg">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur text-black font-bold">{car.tag}</Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="text-2xl font-black italic tracking-tighter mb-1">{car.name}</h3>
                      <p className="text-muted-foreground">تبدأ من {car.price}</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all h-12 border border-input">
                    استكشف التفاصيل <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight">لماذا 911 Heritage؟</h2>
              <div className="space-y-10">
                {[
                  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "ضمان المصنع الممتد", desc: "نحن نوفر ضماناً حصرياً يغطي كافة تفاصيل سيارتك لراحة بال تامة." },
                  { icon: <History className="h-8 w-8 text-primary" />, title: "تاريخ موثق بالكامل", desc: "كل سيارة تأتي مع سجل تاريخي شامل يضمن لك الأصالة والجودة العالية." },
                  { icon: <Star className="h-8 w-8 text-primary" />, title: "خدمات كونسيرج 24/7", desc: "خدمة عملاء استثنائية تلبي تطلعات عشاق بورش في أي وقت وفي أي مكان." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="bg-white/5 p-4 rounded-2xl h-fit">{item.icon}</div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold italic">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000&auto=format&fit=crop" 
                alt="Engine view" 
                className="relative rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
