import { createFileRoute } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute('/models')({
  head: () => ({
    title: 'موديلات بورش 911 | اكتشف التنوع',
    meta: [
      { name: 'description', content: 'قائمة كاملة بجميع فئات بورش 911 المتوفرة للبيع؛ كاريرا، تارجا، توربو، وجي تي 3.' },
    ],
  }),
  component: ModelsComponent,
});

function ModelsComponent() {
  const categories = [
    { title: "Carrera", desc: "الأداء اليومي النقي", count: "8 موديلات" },
    { title: "Targa", desc: "التصميم الكلاسيكي المتجدد", count: "3 موديلات" },
    { title: "Turbo", desc: "القوة المطلقة بدون تنازلات", count: "2 موديلات" },
    { title: "GT Series", desc: "للسباقات، ولكن مرخصة للطريق", count: "3 موديلات" }
  ];

  const allModels = [
    { name: "911 Carrera", base: "450k", hp: "385", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600" },
    { name: "911 Carrera S", base: "520k", hp: "450", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=600" },
    { name: "911 Carrera GTS", base: "580k", hp: "480", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600" },
    { name: "911 Turbo S", base: "890k", hp: "650", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600" },
    { name: "911 GT3 RS", base: "1.2M", hp: "525", img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=600" },
    { name: "911 Sport Classic", base: "1.5M", hp: "550", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=600" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">التشكيلة <span className="text-red-600">الكاملة</span></h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">اختر الشخصية التي تناسبك. كل سيارة 911 لها بريقها الخاص وهدفها المحدد.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {categories.map((c, i) => (
                <div key={i} className="bg-zinc-100 p-8 text-center hover:bg-red-600 hover:text-white transition-all cursor-pointer group">
                    <h3 className="text-xl font-black uppercase italic mb-1">{c.title}</h3>
                    <p className="text-xs text-zinc-500 group-hover:text-red-100 mb-4">{c.desc}</p>
                    <span className="text-[10px] font-bold border px-2 py-1 uppercase">{c.count}</span>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allModels.map((m, i) => (
                <div key={i} className="group cursor-pointer">
                    <div className="aspect-video bg-zinc-200 overflow-hidden mb-6 relative">
                         <img src={m.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={m.name} />
                         <div className="absolute top-4 left-4">
                            <Badge className="bg-black text-white rounded-none">{m.hp} HP</Badge>
                         </div>
                    </div>
                    <div className="flex justify-between items-end border-b-2 border-zinc-100 pb-4 group-hover:border-red-600 transition-all">
                        <div>
                            <h3 className="text-2xl font-black uppercase italic">{m.name}</h3>
                            <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1 italic">تبدأ من {m.base} ريال</p>
                        </div>
                        <Button variant="ghost" className="rounded-none font-bold uppercase text-xs p-0 h-auto hover:bg-transparent hover:text-red-600">طلب عرض سعر</Button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
