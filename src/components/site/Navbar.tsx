import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Car, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الموديلات', path: '/models' },
    { name: 'المخزون', path: '/inventory' },
    { name: 'المميزات', path: '/features' },
    { name: 'من نحن', path: '/about' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between rtl',
        isScrolled 
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
      dir="rtl"
    >
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
          <Car className="text-white w-6 h-6" />
        </div>
        <span className={cn(
          "text-2xl font-black tracking-tighter uppercase",
          isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
        )}>
          PORSCHE <span className="text-primary">911</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary",
              isScrolled ? "text-zinc-700 dark:text-zinc-300" : "text-zinc-100"
            )}
            activeProps={{ className: "text-primary!" }}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 border-r border-zinc-500/30 pr-4 mr-4">
          <Button variant="ghost" size="icon" className={isScrolled ? "" : "text-white"}>
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className={isScrolled ? "" : "text-white"} onClick={() => navigate({ to: '/login' })}>
            <User className="w-5 h-5" />
          </Button>
        </div>
        
        <Link to="/inventory">
          <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-bold rounded-none">
            اطلب الآن
          </Button>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white dark:bg-zinc-950 z-40 p-8 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-bold border-b border-zinc-100 dark:border-zinc-800 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button size="lg" className="w-full mt-4 bg-primary text-white" onClick={() => { setIsMobileMenuOpen(false); navigate({ to: '/login' }); }}>
            حسابي
          </Button>
        </div>
      )}
      <Link to="/models" className="text-sm font-medium hover:text-primary transition-colors">الموديلات</Link>
    </nav>
  );
}
