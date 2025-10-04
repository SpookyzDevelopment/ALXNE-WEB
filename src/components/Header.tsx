import { Shield, Menu, X, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartButton from './CartButton';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 border-b border-gray-800/50 shadow-lg' : 'bg-transparent'} backdrop-blur-md`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ALXNE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-white font-medium' : 'text-gray-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`flex items-center gap-1 transition-colors ${isActive('/products') ? 'text-white font-medium' : 'text-gray-400 hover:text-white'}`}
            >
              <ShoppingBag className="w-4 h-4" />
              Products
            </Link>
            <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <CartButton />
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <CartButton />
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="block text-gray-300 hover:text-white transition-colors flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Products
            </Link>
            <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
