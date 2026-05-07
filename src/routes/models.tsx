import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, Info } from 'lucide-react';

export const Route = createFileRoute('/models')({
  head: () => ({
    title: 'موديلات بورش 911 | تسوق مجموعتنا الحصرية',
    meta: [
      { name: 'description', content: 'استعرض جميع فئات بورش 911: كاريرا، تاركا، تيربو، و GT3. مواصفات تفصيلية وأسعار حصرية.' },
    ],
  }),
  component: ModelsPage,
});

const MODELS = [
  { id: 1, name: "911 Carrera", year: 2024, price: "$114,400", power: "379 hp", category: "Standard", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format" },
  { id: 2, name: "911 Targa 4", year: 2024, price: "$134,500", power: "379 hp", category: "Open Top", img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format" },
  { id: 3, name: "911 Turbo S", year: 2024, price: "$230,400", power: "640 hp", category: "Performance", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format" },
  { id: 4, name: "911 GT3 RS", year: 2024, price: "$241,300", power: "518 hp", category: "GT Models", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format" },
  { id: 5, name: "911 Dakar", year: 2024, price: "$222,000", power: "473 hp", category: "Special", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format" },
  { id: 6, name: "911 Sport Classic", year: 2023, price: "$272,300", power: "543 hp", category: "Special", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format" },
];

function ModelsPage() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase">الأسطول المتاح</h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              تصفح التشكيلة الأوسع من سيارات بورش 911 الجديدة والمستعملة المعتمدة. كل موديل هو تحفة فنية هندسية.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full gap-2">
              <Filter className="h-4 w-4" /> تصفية
            </Button>
            <div className="relative group">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="ابحث عن موديل..." 
                className="pr-10 h-10 rounded-full border border-input bg-background px-4 focus:ring-2 focus:ring-primary outline-none transition-all w-64"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODELS.map((car) => (
            <Card key={car.id} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/95 text-primary-foreground font-bold shadow-lg italic">
                    {car.year}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase">{car.name}</h3>
                    <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest mt-1 opacity-70">
                      {car.category}
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="text-primary font-bold text-xl">{car.price}</p>
                    <p className="text-[10px] uppercase text-muted-foreground">قيمة بدئية</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted p-3 rounded-xl">
                    <p className="text-[10px] uppercase text-muted-foreground mb-1">القوة</p>
                    <p className="font-bold flex items-center gap-2"><Info className="h-3 w-3 text-primary" /> {car.power}</p>
                  </div>
                  <div className="bg-muted p-3 rounded-xl">
                    <p className="text-[10px] uppercase text-muted-foreground mb-1">الناقل</p>
                    <p className="font-bold uppercase">PDK / Manual</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 h-12 rounded-xl text-lg font-bold italic group-hover:bg-primary transition-colors">
                    احجز الآن
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl">
                    <Info className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
