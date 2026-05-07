import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Route = createFileRoute('/contact')({
  head: () => ({
    title: 'تواصل معنا | 911 Heritage',
    meta: [
      { name: 'description', content: 'فريق خبراء بورش جاهز لمساعدتك. تواصل معنا للاستفسار عن الموديلات المتاحة أو طلب تجربة قيادة.' },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Visual Header */}
      <div className="h-[40vh] bg-zinc-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000')] bg-cover bg-center" />
        <div className="relative text-center space-y-4">
          <h1 className="text-5xl md:text-8xl font-black italic text-white uppercase tracking-tighter">تحدّث إلينا</h1>
          <p className="text-gray-400 max-w-md mx-auto">نحن هنا لنقل شغفك بالسيارات الرياضية إلى أرض الواقع.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 -mt-20 relative z-20 pb-32">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-none shadow-2xl bg-zinc-900 text-white p-8">
              <CardContent className="p-0 space-y-12">
                <div className="space-y-6 text-right">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter">معلومات المعرض</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-xl"><MapPin className="text-primary h-6 w-6" /></div>
                      <div>
                        <p className="font-bold text-lg italic">الموقع</p>
                        <p className="text-gray-400">حي الملقا، طريق الأمير محمد بن سعد، الرياض، السعودية</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-xl"><Phone className="text-primary h-6 w-6" /></div>
                      <div>
                        <p className="font-bold text-lg italic">الهاتف</p>
                        <p className="text-gray-400">+966 500 000 000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-xl"><Mail className="text-primary h-6 w-6" /></div>
                      <div>
                        <p className="font-bold text-lg italic">البريد الإلكتروني</p>
                        <p className="text-gray-400">info@911heritage.sa</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4 text-gray-400">
                    <Clock className="h-5 w-5" />
                    <p>المعرض مفتوح يومياً من الساعة 9 صباحاً حتى 10 مساءً</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-2xl p-10">
              <CardContent className="p-0">
                <form className="space-y-8" dir="rtl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 text-right">
                      <label className="text-sm font-black uppercase tracking-widest italic opacity-60">الاسم الكامل</label>
                      <Input placeholder="أدخل اسمك هنا..." className="h-14 rounded-xl text-lg px-6 bg-muted/50 focus:bg-background border-none ring-1 ring-input focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="space-y-2 text-right">
                      <label className="text-sm font-black uppercase tracking-widest italic opacity-60">البريد الإلكتروني</label>
                      <Input type="email" placeholder="example@911.com" className="h-14 rounded-xl text-lg px-6 bg-muted/50 focus:bg-background border-none ring-1 ring-input focus:ring-2 focus:ring-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-right">
                    <label className="text-sm font-black uppercase tracking-widest italic opacity-60">الموديل المهتم به</label>
                    <select className="flex h-14 w-full rounded-xl border-none ring-1 ring-input focus:ring-2 focus:ring-primary bg-muted/50 px-6 py-2 text-lg appearance-none">
                      <option>911 Carrera S</option>
                      <option>911 GT3 RS</option>
                      <option>911 Turbo S</option>
                      <option>911 Dakar</option>
                      <option>أخرى</option>
                    </select>
                  </div>

                  <div className="space-y-2 text-right">
                    <label className="text-sm font-black uppercase tracking-widest italic opacity-60">رسالتك</label>
                    <Textarea placeholder="كيف يمكننا مساعدتك اليوم؟" className="min-h-[200px] rounded-xl text-lg p-6 bg-muted/50 focus:bg-background border-none ring-1 ring-input focus:ring-2 focus:ring-primary" />
                  </div>

                  <Button className="w-full h-16 text-xl font-black uppercase italic rounded-xl gap-3 shadow-xl shadow-primary/30">
                    إرسال الطلب <Send className="h-6 w-6" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
