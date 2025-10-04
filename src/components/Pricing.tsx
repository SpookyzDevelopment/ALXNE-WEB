import { Check } from 'lucide-react';

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
    <section id="pricing" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 border ${plan.popular ? 'border-white' : 'border-gray-800'} p-8 rounded-sm relative ${plan.popular ? 'md:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-medium rounded-sm">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  {plan.price !== 'Custom' && <span className="text-4xl font-bold">${plan.price}</span>}
                  {plan.price === 'Custom' && <span className="text-4xl font-bold">{plan.price}</span>}
                  {plan.price !== 'Custom' && <span className="text-gray-400 ml-2">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="bg-gray-800 rounded-full p-1 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-sm font-medium transition-colors ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'border border-gray-700 text-white hover:bg-gray-900'}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
