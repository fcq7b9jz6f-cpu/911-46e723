import { createFileRoute } from '@tanstack/react-router';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Headphones } from "lucide-react";

export const Route = createFileRoute('/contact')({
  head: () => ({
    title: 'تواصل مع بورش | استفسارات المبيعات والخدمة',
    meta: [
      { name: 'description', content: 'نحن هنا للإجابة على جميع استفساراتك حول بورش 911. تواصل مع خبراء المبيعات أو احجز موعد صيانة.' },
    ],
  }),
  component: ContactComponent,
});

function ContactComponent() {
  return (
    <div className="pt-24 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">تواصل <br /> مع <span className="text-red-600 italic">الأسطورة</span></h1>
            <p className="text-xl text-zinc-500 mb-12">فريقنا من الخبراء جاهز لمساعدتك في تخصيص سيارتك الحلم أو الرد على أي استفسارات تقنية.</p>
            
            <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="p-4 bg-white dark:bg-zinc-900 shadow-lg rounded-none rotate-3 group hover:rotate-0 transition-transform">
                        <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h4 className="font-black uppercase italic mb-1">المعرض الرئيسي</h4>
                        <p className="text-zinc-500 text-sm">طريق الملك فهد، الرياض، المملكة العربية السعودية</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="p-4 bg-white dark:bg-zinc-900 shadow-lg rounded-none rotate-3 group hover:rotate-0 transition-transform">
                        <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h4 className="font-black uppercase italic mb-1">اتصل بنا</h4>
                        <p className="text-zinc-500 text-sm">800-PORSCHE (767-7243)</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="p-4 bg-white dark:bg-zinc-900 shadow-lg rounded-none rotate-3 group hover:rotate-0 transition-transform">
                        <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h4 className="font-black uppercase italic mb-1">البريد الإلكتروني</h4>
                        <p className="text-zinc-500 text-sm">info@porsche-saudi.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-6">
                    <div className="p-4 bg-white dark:bg-zinc-900 shadow-lg rounded-none rotate-3 group hover:rotate-0 transition-transform">
                        <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h4 className="font-black uppercase italic mb-1">ساعات العمل</h4>
                        <p className="text-zinc-500 text-sm">الأحد - الخميس: 9:00 صباحاً - 9:00 مساءً</p>
                    </div>
                </div>
            </div>

            <div className="mt-16 p-8 border-2 border-dashed border-zinc-200 text-center">
                <Headphones className="w-10 h-10 mx-auto text-zinc-400 mb-4" />
                <h5 className="font-bold uppercase mb-2">خدمة المساعدة على الطريق (24/7)</h5>
                <p className="text-zinc-500 text-sm italic underline">+966 500 000 000</p>
            </div>
          </div>

          <div className="bg-white p-12 shadow-2xl border-t-4 border-red-600">
            <h3 className="text-3xl font-black italic uppercase mb-8">أرسل استفسارك</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">الاسم الأول</Label>
                        <Input id="first-name" placeholder="أحمد" className="rounded-none border-zinc-200" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">اسم العائلة</Label>
                        <Input id="last-name" placeholder="الغامدي" className="rounded-none border-zinc-200" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="example@gmail.com" className="rounded-none border-zinc-200" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="interest">الموديل المهتم به</Label>
                    <select className="w-full bg-transparent border border-zinc-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600">
                        <option>911 Carrera</option>
                        <option>911 Turbo S</option>
                        <option>911 GT3 RS</option>
                        <option>أخرى / استفسار عام</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">رسالتك</Label>
                    <Textarea id="message" placeholder="كيف يمكننا مساعدتك اليوم؟" className="rounded-none border-zinc-200 min-h-[150px]" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase py-8 text-lg rounded-none shadow-xl shadow-red-600/20">إرسال الطلب</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
