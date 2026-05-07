import { Link } from "@tanstack/react-router";
import { Car, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-20 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <Car className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="text-4xl font-black tracking-tighter uppercase italic">911 Heritage</span>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed text-lg">
              وجهتكم الأولى والوحيدة لكل ما يخص عالم بورش 911. نحن نؤمن أن القيادة فن، وبورش هي الريشة. نسعى لتقديم تجربة تملك لا تضاهى تمزج بين الفخامة والأداء.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-black italic uppercase text-primary">الروابط السريعة</h4>
            <ul className="space-y-4">
              <li><Link to="/models" className="text-gray-400 hover:text-white transition-colors">موديلات 911</Link></li>
              <li><Link to="/inventory" className="text-gray-400 hover:text-white transition-colors">المخزون الحالي</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">قصتنا</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-black italic uppercase text-primary">ساعات العمل</h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex justify-between"><span>الأحد - الخميس</span> <span>9:00 - 22:00</span></p>
              <p className="flex justify-between"><span>الجمعة</span> <span>16:00 - 22:00</span></p>
              <p className="flex justify-between"><span>السبت</span> <span>10:00 - 20:00</span></p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2024 جميع الحقوق محفوظة لـ 911 Heritage Luxury Motors.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
