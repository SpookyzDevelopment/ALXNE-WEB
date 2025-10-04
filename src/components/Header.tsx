import { Shield, Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span className="text-2xl font-bold tracking-wider">ALXNE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`flex items-center gap-1 transition-colors ${isActive('/products') ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <ShoppingBag className="w-4 h-4" />
              Products
            </Link>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <button className="bg-white text-black px-6 py-2 rounded-sm font-medium hover:bg-gray-200 transition-all hover:scale-105">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="block text-gray-300 hover:text-white transition-colors flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Products
            </Link>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="w-full bg-white text-black px-6 py-2 rounded-sm font-medium hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
