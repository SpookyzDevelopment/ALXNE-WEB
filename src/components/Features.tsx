import { Check } from 'lucide-react';

const features = [
  'End-to-end encryption',
  'Automated backups',
  'Custom domain support',
  'API access',
  'Advanced analytics',
  'Team collaboration',
  'Priority support',
  'SLA guarantees'
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade
              <br />
              <span className="text-gray-400">Features</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Built for professionals who demand the highest standards of security, reliability, and performance. Our platform is trusted by thousands of businesses worldwide.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-sm font-medium hover:bg-gray-200 transition-colors">
              Learn More
            </button>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-white rounded-full p-1 mt-0.5">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
