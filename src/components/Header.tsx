import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />
            <span className="text-2xl font-bold tracking-wider">ALXNE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-white text-black px-6 py-2 rounded-sm font-medium hover:bg-gray-200 transition-colors">
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
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
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
