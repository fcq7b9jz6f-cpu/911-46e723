import { createFileRoute } from '@tanstack/react-router';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute('/inventory')({
  head: () => ({
    title: 'مخزون حقيقي بورش 911 | سيارات جاهزة للتسليم',
    meta: [
      { name: 'description', content: 'تصفح قائمة السيارات المتوفرة حالياً في معارضنا. سيارات بورش 911 مستعملة ومعتمدة وجديدة كلياً.' },
    ],
  }),
  component: InventoryComponent,
});

function InventoryComponent() {
  const cars = [
    { id: 1, title: "2024 Porsche 911 GT3 RS", color: "Python Green", price: "1,250,000", km: "0 km", status: "New", img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800" },
    { id: 2, title: "2023 Porsche 911 Turbo S", color: "Guards Red", price: "980,000", km: "2,400 km", status: "Certified Pre-Owned", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800" },
    { id: 3, title: "2024 Porsche 911 Carrera 4S", color: "GT Silver", price: "612,000", km: "0 km", status: "New", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800" },
    { id: 4, title: "2022 Porsche 911 Targa 4 GTS", color: "Shark Blue", price: "720,000", km: "11,500 km", status: "Used", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
                <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">المخزون <span className="text-red-600">المتوفر</span></h1>
                <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest italic">جميع السيارات تخضع لفحص بورش من 111 نقطة</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input className="bg-white border rounded-none py-2 pl-10 pr-4 w-full md:w-64 text-sm focus:outline-none focus:ring-1 focus:ring-red-600" placeholder="عن ماذا تبحث؟" />
                </div>
                <Button variant="outline" className="rounded-none gap-2 font-bold uppercase text-xs h-10">
                    <SlidersHorizontal className="w-4 h-4" /> تصفية
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map((car) => (
                <Card key={car.id} className="rounded-none border-none shadow-lg overflow-hidden group bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={car.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={car.title} />
                        <div className="absolute top-3 right-3">
                            <Badge className={`${car.status === 'New' ? 'bg-red-600' : 'bg-black'} text-white border-none rounded-none text-[10px] uppercase font-black`}>
                                {car.status}
                            </Badge>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-black italic uppercase mb-4 line-clamp-1">{car.title}</h3>
                        <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-6 pb-6 border-b">
                            <div className="flex flex-col gap-1 italic">
                                <span>اللون</span>
                                <span className="text-black">{car.color}</span>
                            </div>
                            <div className="flex flex-col gap-1 italic">
                                <span>المسافة</span>
                                <span className="text-black">{car.km}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="text-[9px] text-zinc-400 uppercase font-black">السعر</span>
                                <span className="text-lg font-black italic text-red-600">{car.price} ريال</span>
                            </div>
                            <Button size="sm" className="bg-black text-white hover:bg-zinc-800 rounded-none h-10">التفاصيل</Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>

        <div className="mt-20 p-12 bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-right">
                <h3 className="text-3xl font-black italic uppercase mb-2">لم تجد ما تبحث عنه؟</h3>
                <p className="text-zinc-400 italic">يمكننا مساعدتك في تأمين أي موديل بورش 911 من شبكتنا العالمية.</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none px-12 py-7 font-black uppercase text-lg italic shadow-xl shadow-red-600/20">اتصل بخبير المبيعات</Button>
        </div>
      </div>
    </div>
  );
}
