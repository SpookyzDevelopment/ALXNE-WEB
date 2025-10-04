import { Shield, Zap, CreditCard, Settings, Download, Eye, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const features = [
  {
    icon: Download,
    title: 'Instant Delivery',
    description: 'All products are immediately available for download after purchase.',
    stats: [
      { label: 'Delivery Speed', value: '< 1 second' },
      { label: 'Success Rate', value: '99.9%' },
      { label: 'Downloads/Day', value: '1,000+' }
    ]
  },
  {
    icon: Shield,
    title: 'Safe & Undetected',
    description: 'We provide the most secure and undetected products on the market.',
    stats: [
      { label: 'Detection Rate', value: '0.0%' },
      { label: 'Last Update', value: '2 hours ago' },
      { label: 'Active Users', value: '50,000+' }
    ]
  },
  {
    icon: Settings,
    title: 'Save & Share Configs',
    description: 'Easily save your configs and share them, or use community setups.',
    stats: [
      { label: 'Config Storage', value: 'Unlimited' },
      { label: 'Community Configs', value: '10,000+' },
      { label: 'Auto-Sync', value: 'Enabled' }
    ]
  },
  {
    icon: CreditCard,
    title: 'Secure Payment Methods',
    description: 'All transactions are processed through trusted payment gateways to ensure maximum safety and reliability.',
    stats: [
      { label: 'Payment Options', value: '10+' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Transactions', value: '100K+' }
    ]
  },
  {
    icon: Eye,
    title: 'Easy Setup',
    description: 'Our products are built for a smooth, user-friendly experience, any user can set up and use our cheats with ease.',
    stats: [
      { label: 'Setup Time', value: '< 2 minutes' },
      { label: 'User Rating', value: '4.9/5.0' },
      { label: 'Support Available', value: '24/7' }
    ]
  }
];

export default function Pricing() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience unmatched service quality. Our dedicated team is here around the clock to support you and simplify every step of the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90 border border-gray-800 p-8 rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in ${
                activeCardIndex === index ? 'border-gray-600 shadow-2xl shadow-gray-500/20' : 'hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-500/10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-gray-600/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Animated border shimmer */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${activeCardIndex === index ? 'opacity-100' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent translate-x-[-200%] animate-shimmer" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-500 opacity-10 absolute inset-0 blur-xl group-hover:opacity-20 transition-opacity" />
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-500 p-4 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Animated stats slideshow */}
                <div className="space-y-2 min-h-[80px]">
                  {feature.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className={`flex items-center justify-between py-2 px-3 bg-gray-800/50 rounded-lg border border-gray-800 transition-all duration-500 ${
                        activeCardIndex === index
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-50'
                      }`}
                      style={{
                        transitionDelay: activeCardIndex === index ? `${statIndex * 100}ms` : '0ms'
                      }}
                    >
                      <span className="text-sm text-gray-500">{stat.label}</span>
                      <span className="text-sm font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div
              key={index + 3}
              className={`group relative bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90 border border-gray-800 p-8 rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in ${
                activeCardIndex === (index + 3) ? 'border-gray-600 shadow-2xl shadow-gray-500/20' : 'hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-500/10'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border shimmer */}
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${activeCardIndex === (index + 3) ? 'opacity-100' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent translate-x-[-200%] animate-shimmer" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-500 opacity-10 absolute inset-0 blur-xl group-hover:opacity-20 transition-opacity" />
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-500 p-4 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Animated stats slideshow */}
                <div className="space-y-2 min-h-[80px]">
                  {feature.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className={`flex items-center justify-between py-2 px-3 bg-gray-800/50 rounded-lg border border-gray-800 transition-all duration-500 ${
                        activeCardIndex === (index + 3)
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-50'
                      }`}
                      style={{
                        transitionDelay: activeCardIndex === (index + 3) ? `${statIndex * 100}ms` : '0ms'
                      }}
                    >
                      <span className="text-sm text-gray-500">{stat.label}</span>
                      <span className="text-sm font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCardIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCardIndex === index
                  ? 'w-8 bg-gradient-to-r from-gray-600 to-gray-500'
                  : 'w-2 bg-gray-800 hover:bg-gray-700'
              }`}
              aria-label={`View feature ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-full backdrop-blur-sm group hover:border-gray-600 transition-all cursor-pointer">
            <Zap className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">All features included in every product</span>
            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
