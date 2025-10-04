import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1 bg-gray-900 border border-gray-800 rounded-sm text-sm text-gray-300">
            Premium Account Services
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Secure Account
            <br />
            <span className="text-gray-400">Management</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Professional account and service provider delivering secure, reliable solutions for your digital needs. Enterprise-grade security with 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 group">
              <span>View Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-700 text-white px-8 py-4 rounded-sm font-medium hover:bg-gray-900 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
