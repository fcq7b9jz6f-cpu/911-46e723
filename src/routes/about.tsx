import { createFileRoute } from '@tanstack/react-router';
import { History, Award, Globe, ShieldCheck } from "lucide-react";

export const Route = createFileRoute('/about')({
  head: () => ({
    title: 'تاريخ بورش 911 | أسطورة عمرها 60 عاماً',
    meta: [
      { name: 'description', content: 'تعرف على قصة فيري بورش وتطور موديل 911 منذ ظهوره الأول في معرض فرانكفورت للسيارات عام 1963.' },
    ],
  }),
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="pt-24 bg-white">
      {/* Brand History */}
      <section className="py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-zinc-900 border-none px-4 py-1 text-xs font-bold tracking-widest uppercase">Since 1963</Badge>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-8 leading-tight text-zinc-900">
              أكثر من <span className="text-red-600 italic">مجرد سيارة</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              بدأت القصة بحلم بسيط لفيري بورش: "لم أتمكن من العثور على السيارة الرياضية التي كنت أحلم بها، لذا قررت أن أبنيها بنفسي". ومنذ ذلك الحين، أصبحت 911 هي المعيار الذي تقاس عليه جميع السيارات الرياضية الأخرى.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <History className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-black uppercase">عقود من التطوير</h4>
                <p className="text-sm text-zinc-500">تم تطوير ثمانية أجيال من 911، كل واحد منها يحافظ على البصمة الوراثية الأصلية.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Award className="w-8 h-8 text-red-600 mb-2" />
                <h4 className="font-black uppercase">30,000 انتصار</h4>
                <p className="text-sm text-zinc-500">بورش هي العلامة التجارية الأكثر نجاحاً في رياضة السيارات بآلاف الانتصارات.</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Porsche Heritage" />
            <div className="absolute inset-x-0 bottom-0 bg-black/80 p-6">
                <p className="text-white text-xs font-mono uppercase tracking-widest text-center italic">"The DNA of a legend survives in every design line."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6">فلسفتنا في القيادة</h2>
                <p className="text-lg text-zinc-500 italic">نحن لا نبيع المحركات، نحن نبيع العاطفة والحماس المطلق على الطريق.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <Card className="rounded-none border-none bg-white p-10 shadow-sm hover:shadow-xl transition-all group">
                    <Globe className="w-12 h-12 mb-6 group-hover:text-red-600 transition-colors" />
                    <h3 className="text-2xl font-black italic uppercase mb-4">التزام عالمي</h3>
                    <p className="text-zinc-500 leading-relaxed font-light">نحن نسعى لتقليل بصمتنا الكربونية مع الحفاظ على الأداء الذي يجعل بورش بورش، عبر تقنيات الوقود الإلكتروني والكهرباء.</p>
                </Card>
                <Card className="rounded-none border-none bg-white p-10 shadow-sm hover:shadow-xl transition-all group">
                    <ShieldCheck className="w-12 h-12 mb-6 group-hover:text-red-600 transition-colors" />
                    <h3 className="text-2xl font-black italic uppercase mb-4">الجودة المطلقة</h3>
                    <p className="text-zinc-500 leading-relaxed font-light">أكثر من 70% من جميع سيارات بورش التي تم بناؤها على الإطلاق لا تزال تسير على الطرقات اليوم - شهادة حية على هندستنا.</p>
                </Card>
                <Card className="rounded-none border-none bg-white p-10 shadow-sm hover:shadow-xl transition-all group">
                    <Award className="w-12 h-12 mb-6 group-hover:text-red-600 transition-colors" />
                    <h3 className="text-2xl font-black italic uppercase mb-4">الدقة اليدوية</h3>
                    <p className="text-zinc-500 leading-relaxed font-light">على الرغم من التكنولوجيا، لا تزال اللمسة البشرية في مصنع زوفنهاوسن هي التي تضمن الكمال في التفاصيل النهائية.</p>
                </Card>
            </div>
        </div>
      </section>

      <div className="bg-black py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/50 opacity-20 blur-[100px] rounded-full scale-150" />
        <div className="relative z-10 px-4">
            <h2 className="text-6xl md:text-9xl font-black italic uppercase text-white mb-6">Born in <span className="text-red-600 italic">Stuttgart</span></h2>
            <p className="text-xl text-zinc-400 font-bold uppercase tracking-[0.5em]">Defining sports cars for over 60 years</p>
        </div>
      </div>
    </div>
  );
}

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
        {children}
    </span>
);
