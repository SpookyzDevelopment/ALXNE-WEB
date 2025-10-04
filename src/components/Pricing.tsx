import { Shield, Zap, CreditCard, Settings, Download, Eye } from 'lucide-react';

const features = [
  {
    icon: Download,
    title: 'Instant Delivery',
    description: 'All products are immediately available for download after purchase.',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    icon: Shield,
    title: 'Safe & Undetected',
    description: 'We provide the most secure and undetected products on the market.',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    icon: Settings,
    title: 'Save & Share Configs',
    description: 'Easily save your configs and share them, or use community setups.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: CreditCard,
    title: 'Secure Payment Methods',
    description: 'All transactions are processed through trusted payment gateways to ensure maximum safety and reliability.',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    icon: Eye,
    title: 'Easy Setup',
    description: 'Our products are built for a smooth, user-friendly experience, any user can set up and use our cheats with ease, no technical knowledge required.',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience unmatched service quality. Our dedicated team is here around the clock to support you and simplify every step of the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90 border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 relative">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10 absolute inset-0 blur-xl group-hover:opacity-20 transition-opacity`} />
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 relative flex items-center justify-center`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
          {features.slice(3).map((feature, index) => (
            <div
              key={index + 3}
              className="group bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-900/90 border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="mb-6 relative">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10 absolute inset-0 blur-xl group-hover:opacity-20 transition-opacity`} />
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 relative flex items-center justify-center`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full">
            <Zap className="w-5 h-5 text-pink-400" />
            <span className="text-gray-300 font-medium">All features included in every product</span>
          </div>
        </div>
      </div>
    </section>
  );
}
