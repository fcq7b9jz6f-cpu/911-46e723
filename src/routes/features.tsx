import { createFileRoute } from '@tanstack/react-router';
import { Gauge, Cpu, Wind, Zap } from "lucide-react";

export const Route = createFileRoute('/features')({
  head: () => ({
    title: 'تقنيات بورش 911 | الابتكار خلف الأداء',
    meta: [
      { name: 'description', content: 'تعرف على التكنولوجيا المتطورة في محركات البوكسر، ناقل PDK، ونظام PASM للتحكم النشط.' },
    ],
  }),
  component: FeaturesComponent,
});

function FeaturesComponent() {
  const techs = [
    {
      icon: <Cpu className="w-12 h-12 text-red-600" />,
      title: "محرك البوكسر (Boxer Engine)",
      desc: "التصميم المسطح للمحرك يسمح بمركز ثقل منخفض، مما يعني ثباتاً استثنائياً في المنعطفات واستجابة لحظية."
    },
    {
      icon: <Wind className="w-12 h-12 text-red-600" />,
      title: "الديناميكا الهوائية النشطة (PAA)",
      desc: "جناح خلفي يتكيف تلقائياً وفتحات هواء ذكية لتقليل السحب أو زيادة القوة الضاغطة حسب الحاجة."
    },
    {
      icon: <Gauge className="w-12 h-12 text-red-600" />,
      title: "ناقل الحركة PDK",
      desc: "ناقل حركة مزدوج القابض مع 8 سرعات يجمع بين راحة ناقل الحركة الأوتوماتيكي وديناميكية النقل اليدوي."
    },
    {
        icon: <Zap className="w-12 h-12 text-red-600" />,
        title: "نظام توجيه المحور الخلفي",
        desc: "يحسن المناورة في السرعات المنخفضة ويزيد الثبات بشكل كبير في السرعات العالية."
    }
  ];

  return (
    <div className="pt-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <span className="text-[400px] font-black italic tracking-tighter block rotate-90 translate-x-1/2 translate-y-1/2">TECH</span>
        </div>

        <div className="relative z-10 max-w-3xl mb-24">
            <h1 className="text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">هندسة <br /> <span className="text-red-600">المستقبل</span></h1>
            <p className="text-2xl text-zinc-500 font-light leading-relaxed">في بورش، التكنولوجيا ليست غاية، بل وسيلة لتعميق الرابط بين السائق والآلة. كل نظام مصمم بدقة لرفع مستوى الأدرينالين.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
            {techs.map((t, i) => (
                <div key={i} className="group">
                    <div className="mb-8 p-6 bg-zinc-50 dark:bg-zinc-900 w-fit inline-block border-l-2 border-red-600">
                        {t.icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase italic mb-6 group-hover:text-red-600 transition-colors">{t.title}</h3>
                    <p className="text-xl text-zinc-500 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-6">{t.desc}</p>
                </div>
            ))}
        </div>

        <div className="mt-40 bg-black p-12 md:p-24 text-white text-center">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8">هل أنت مستعد لمواجهة الأرقام؟</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 uppercase font-black">
                <div className="flex flex-col gap-2">
                    <span className="text-6xl md:text-8xl text-red-600">2.7s</span>
                    <span className="text-zinc-500 tracking-widest text-sm">0 - 100 KM/H</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-6xl md:text-8xl text-red-600">330</span>
                    <span className="text-zinc-500 tracking-widest text-sm">TOP SPEED (KM/H)</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-6xl md:text-8xl text-red-600">650</span>
                    <span className="text-zinc-500 tracking-widest text-sm">MAX HORSEPOWER</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
