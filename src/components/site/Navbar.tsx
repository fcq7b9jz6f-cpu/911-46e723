import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Car, ShieldCheck, Zap, Gauge, MapPin, Phone, Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Car className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">911 Heritage</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">الرئيسية</Link>
          <Link to="/models" className="text-sm font-medium hover:text-primary transition-colors">الموديلات</Link>
          <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">المميزات</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">عن التميز</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">تواصل معنا</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link to="/login">تسجيل الدخول</Link>
          </Button>
          <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:scale-105 transition-transform">
            <Link to="/inventory">تصفح المخزون</Link>
          </Button>
        </div>
      </div>
      <Link to="models" className="text-sm font-medium hover:text-primary transition-colors">الموديلات</Link>
      <Link to="contact" className="text-sm font-medium hover:text-primary transition-colors">تواصل معنا</Link>
      <Link to="about" className="text-sm font-medium hover:text-primary transition-colors">عن التميز</Link>
      <Link to="features" className="text-sm font-medium hover:text-primary transition-colors">المميزات</Link>
      <Link to="inventory" className="text-sm font-medium hover:text-primary transition-colors">المخزون</Link>
    </nav>
  );
}
