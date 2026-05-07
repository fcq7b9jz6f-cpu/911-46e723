import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Car, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/models", label: "الموديلات" },
    { to: "/inventory", label: "المخزون" },
    { to: "/features", label: "التقنيات" },
    { to: "/about", label: "عن بورش" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter uppercase italic">Porsche <span className="text-red-600">911</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link 
              key={l.to} 
              to={l.to} 
              className="text-sm font-medium hover:text-red-600 transition-colors uppercase tracking-wider"
              activeProps={{ className: "text-red-600" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <ShoppingBag className="w-5 h-5" />
          </Button>
          <Link to="/login" className="hidden sm:flex">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all uppercase text-xs font-bold">
              <User className="w-4 h-4 ml-2" />
              حسابي
            </Button>
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <Link to="/models" className="text-sm font-medium hover:text-primary transition-colors">الموديلات</Link>
      <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">التقنيات</Link>
      <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">عن بورش</Link>
      <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">اتصل بنا</Link>
      <Link to="/inventory" className="text-sm font-medium hover:text-primary transition-colors">المخزون</Link>
    </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-b px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {links.map(l => (
            <Link 
              key={l.to} 
              to={l.to} 
              onClick={() => setOpen(false)}
              className="block text-lg font-bold uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="block pt-4 border-t">
            <Button className="w-full bg-red-600 hover:bg-red-700">تجسيل الدخول</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
