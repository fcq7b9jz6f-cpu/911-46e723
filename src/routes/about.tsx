import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { History, Trophy, Award, ShieldCheck } from 'lucide-react';

export const Route = createFileRoute('/about')({
  head: () => ({
    title: 'قصتنا | 911 Heritage Luxury Motors',
    meta: [
      { name: 'description', content: 'تعرف على رؤيتنا في 911 Heritage وكيف بنينا أرقى وجهة لعشاق بورش 911 في المنطقة.' },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <section className="relative h-[60vh] flex items-center justify-center bg-zinc-950 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="Vintage Porsche"
        />
        <div className="relative text-center space-y-4 px-4">
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white">إرث يمتد</h1>
          <p className="text-primary text-xl md:text-2xl font-bold tracking-widest uppercase italic">60 عاماً من الهندسة الكاملة</p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 -mt-20 relative z-10">
        <div className="bg-background border shadow-2xl p-8 md:p-16 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black italic tracking-tighter uppercase">شغف يتوارثه الأجيال</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                في 911 Heritage، نحن لا نبيع سيارات فحسب؛ نحن نحافظ على تراث رياضي بدأ منذ عام 1963. كل محرك بورش 911 يحكي قصة صمود، ابتكار، وبحث لا ينتهي عن الكمال.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                تأسست شركتنا على يد رواد جمعهم حب السرعة والدقة الألمانية. اليوم، نفخر بكوننا الوجهة الأولى لهواة جمع موديلات بورش النادرة في الشرق الأوسط، حيث نوفر لهم قطعاً نادرة وحالة مصنعية لا تشوبها شائبة.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-muted border-none p-6">
                <Trophy className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2 italic">150+</h4>
                <p className="text-sm text-muted-foreground">سيارة تم تسليمها بنجاح</p>
              </Card>
              <Card className="bg-muted border-none p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2 italic">المركز الأول</h4>
                <p className="text-sm text-muted-foreground">أفضل خدمة ما بعد البيع</p>
              </Card>
              <Card className="bg-muted border-none p-6">
                <History className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2 italic">25 سنة</h4>
                <p className="text-sm text-muted-foreground">خبرة فنية متراكمة</p>
              </Card>
              <Card className="bg-muted border-none p-6">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h4 className="font-bold text-xl mb-2 italic">100%</h4>
                <p className="text-sm text-muted-foreground">سجلات موثقة بالمصنع</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
