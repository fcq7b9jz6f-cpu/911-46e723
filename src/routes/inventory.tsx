import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

export const Route = createFileRoute('/inventory')({
  head: () => ({
    title: 'مخزون السيارات المتاحة فوراً | 911 Heritage',
  }),
  component: InventoryPage,
});

function InventoryPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-12">السيارات المتاحة فوراً</h1>
        <div className="grid gap-8">
          {[1,2,3].map((i) => (
            <Card key={i} className="flex flex-col md:flex-row overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all">
              <div className="md:w-1/3 aspect-video md:aspect-auto">
                <img src={`https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop&idx=${i}`} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black italic">Porsche 911 Carrera (992)</h3>
                    <Badge className="bg-green-500/10 text-green-600 border-green-200">متاح للتسليم</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4" /> <span>معرض الرياض - حي الملقا</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div className="bg-muted rounded-xl p-3"><p className="text-[10px] uppercase font-bold text-muted-foreground">السنة</p><p className="font-black italic">2024</p></div>
                    <div className="bg-muted rounded-xl p-3"><p className="text-[10px] uppercase font-bold text-muted-foreground">الممشى</p><p className="font-black italic">0 KM</p></div>
                    <div className="bg-muted rounded-xl p-3"><p className="text-[10px] uppercase font-bold text-muted-foreground">اللون</p><p className="font-black italic">Chalk</p></div>
                    <div className="bg-muted rounded-xl p-3"><p className="text-[10px] uppercase font-bold text-muted-foreground">التوفر</p><p className="font-black italic">فوري</p></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-8 pt-6 border-t">
                  <p className="text-3xl font-black text-primary">545,000 SAR</p>
                  <Button size="lg" className="rounded-full px-12 group">
                    تفاصيل السيارة <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
