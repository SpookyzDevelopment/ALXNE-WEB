import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 accounts',
      'Basic security features',
      'Email support',
      '99.9% uptime SLA',
      'API access'
    ]
  },
  {
    name: 'Professional',
    price: '149',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 50 accounts',
      'Advanced security features',
      'Priority support',
      '99.95% uptime SLA',
      'API access',
      'Custom integrations',
      'Team collaboration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations',
    features: [
      'Unlimited accounts',
      'Enterprise security suite',
      '24/7 dedicated support',
      '99.99% uptime SLA',
      'API access',
      'Custom integrations',
      'Team collaboration',
      'Dedicated account manager'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full">
            <Zap className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-300 font-medium">Flexible Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-900/80 to-gray-900/40 border ${
                plan.popular
                  ? 'border-gray-500/50 shadow-xl shadow-gray-500/10'
                  : 'border-gray-800'
              } p-8 rounded-lg relative ${plan.popular ? 'md:scale-105' : ''} transition-all hover:border-gray-700`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-600 to-gray-500 text-white px-4 py-1 text-sm font-medium rounded-full shadow-lg shadow-gray-500/25">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  {plan.price !== 'Custom' && (
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                  )}
                  {plan.price === 'Custom' && (
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  )}
                  {plan.price !== 'Custom' && <span className="text-gray-400 ml-2">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="bg-gradient-to-br from-gray-600/20 to-gray-500/20 rounded-full p-1 mt-0.5">
                      <Check className="w-3 h-3 text-gray-300" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-gray-600 to-gray-500 text-white hover:from-gray-500 hover:to-gray-400 shadow-lg shadow-gray-500/25'
                    : 'border border-gray-700 text-white hover:bg-gray-800'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
