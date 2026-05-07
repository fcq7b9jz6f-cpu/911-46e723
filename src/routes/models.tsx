import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

export const Route = createFileRoute('/models')({
  head: () => ({
    title: 'موديلات بورش 911 | تشكيلة 2024-2025',
    meta: [
      { name: 'description', content: 'اكتشف كل إصدارات بورش 911: كاريرا، تارجا، كابريوليه، وتيربو. قارن بين المواصفات والأسعار.' },
    ],
  }),
  component: ModelsPage,
});

const modelGroups = [
  {
    title: '911 Carrera',
    models: [
      { name: 'Carrera', hp: '385', price: '450,000' },
      { name: 'Carrera S', hp: '450', price: '520,000' },
      { name: 'Carrera 4S', hp: '450', price: '550,000' },
    ]
  },
  {
    title: '911 Turbo',
    models: [
      { name: 'Turbo', hp: '580', price: '820,000' },
      { name: 'Turbo S', hp: '650', price: '980,000' },
    ]
  },
  {
    title: '911 GT',
    models: [
      { name: 'GT3 S', hp: '510', price: '850,000' },
      { name: 'GT3 RS', hp: '525', price: '1,200,000' },
    ]
  }
];

function ModelsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-black mb-6">عائلة 911</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            من الكاريرا الكلاسيكية إلى التيربو الفائقة، كل طراز مصمم لتقديم روح بورش الأصيلة بلمسة عصرية.
          </p>
        </header>

        <div className="space-y-24">
          {modelGroups.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-4">
                {group.title}
                <div className="h-[2px] flex-grow bg-zinc-100"></div>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {group.models.map((m, mIdx) => (
                  <Card key={mIdx} className="overflow-hidden border-zinc-200 hover:border-primary transition-all group">
                    <CardContent className="p-0 flex flex-col md:flex-row h-full">
                      <div className="md:w-1/2 p-8 flex flex-col justify-between">
                        <div>
                          <Badge variant="outline" className="mb-4">موديل 2025</Badge>
                          <h3 className="text-4xl font-black mb-2 tracking-tighter">{m.name}</h3>
                          <div className="space-y-1 mb-8">
                            <p className="text-muted-foreground flex justify-between">
                              <span>قوة المحرك:</span>
                              <span className="text-foreground font-bold">{m.hp} حصان</span>
                            </p>
                            <p className="text-muted-foreground flex justify-between">
                              <span>السعر الأساسي:</span>
                              <span className="text-primary font-bold">{m.price} ريال</span>
                            </p>
                          </div>
                        </div>
                        <Button className="w-full text-lg h-12 rounded-none">تخصيص الموديل <ChevronRight className="ml-2 w-5 h-5 rotate-180" /></Button>
                      </div>
                      <div className="md:w-1/2 bg-zinc-100 overflow-hidden relative min-h-[250px]">
                        <img 
                          src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400" 
                          alt={m.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
