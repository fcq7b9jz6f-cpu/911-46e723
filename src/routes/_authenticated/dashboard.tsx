import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Clock, Shield, Star } from 'lucide-react';

export const Route = createFileRoute('/_authenticated/dashboard')({
  head: () => ({
    title: 'لوحة التحكم | 911 Heritage',
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter">مرحباً بك مجدداً</h1>
        <p className="text-muted-foreground">أهلاً بك في عالم بورش الحصري. تتبع مسار سيارتك وحجوزاتك هنا.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: "طلبات نشطة", value: "2", icon: <Clock className="h-6 w-6 text-blue-500" /> },
          { label: "سيارات في المرآب", value: "1", icon: <Car className="h-6 w-6 text-primary" /> },
          { label: "نقاط الولاء", value: "1,250", icon: <Star className="h-6 w-6 text-yellow-500" /> },
          { label: "حالة العضوية", value: "بلاتينيوم", icon: <Shield className="h-6 w-6 text-purple-500" /> },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black italic">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-xl overflow-hidden">
        <CardHeader className="bg-primary/5 border-b p-8">
          <CardTitle className="text-2xl font-black italic">طلبك الأخير</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-8 flex items-center gap-8">
            <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format" className="h-24 w-40 object-cover rounded-xl shadow-lg" />
            <div className="flex-1">
              <h4 className="text-xl font-black italic">911 GT3 RS (2024)</h4>
              <p className="text-muted-foreground">الحالة: تحت المراجعة الفنية</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">تاريخ الطلب</p>
              <p className="font-bold">12 أكتوبر 2023</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
