import { createFileRoute } from '@tanstack/react-router';
import { Gauge, Zap, Wind, Shield, Settings, Gem } from 'lucide-react';

export const Route = createFileRoute('/features')({
  head: () => ({
    title: 'تكنولوجيا الأداء | مميزات بورش 911',
    meta: [
      { name: 'description', content: 'اكتشف التقنيات الثورية في محركات بوكسر، نظام التعليق النشط، والديناميكا الهوائية المتقدمة.' },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  const features = [
    { title: "محرك بوكسر الأسطوري", desc: "تمركز خلفي فريد يوفر توازناً مثالياً وتسارعاً لا يضاهى.", icon: <Zap /> },
    { title: "ناقل الحركة PDK", desc: "أسرع استجابة في العالم مع تعشيق مزدوج يضمن عدم فقدان القوة.", icon: <Gauge /> },
    { title: "الديناميكا النشطة", desc: "اجنحة ومداخل هواء تتكيف مع السرعة لزيادة الارتكازية.", icon: <Wind /> },
    { title: "فخامة Porsche Exclusive", desc: "تخصيص يدوي لكل تفاصيل المقصورة بأفخر أنواع الجلود.", icon: <Gem /> },
    { title: "فرامل السيراميك (PCCB)", desc: "قوة إيقاف هائلة مع مقاومة تامة للتآكل والحرارة العالية.", icon: <Shield /> },
    { title: "نظام التعليق PASM", desc: "تحكم إلكتروني نشط يتكيف مع حالة الطريق في أجزاء من الثانية.", icon: <Settings /> },
  ];

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-20 space-y-4">
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">هندسة <br /><span className="text-primary italic">بلا تنازلات</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">كل ميزة في بورش 911 صُممت لخدمة غرض واحد: "متعة القيادة المطلقة". اكتشف أسرار الأداء الذي أبهر العالم لستين عاماً.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-muted/50 hover:bg-primary transition-all duration-500 hover:-translate-y-2">
              <div className="bg-primary text-primary-foreground group-hover:bg-white group-hover:text-primary p-4 rounded-2xl w-fit mb-6 transition-colors shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black italic tracking-tighter mb-4 group-hover:text-white transition-colors">{f.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
