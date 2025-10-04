import { Shield, Lock, Users, Headphones } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Account Management',
    description: 'Comprehensive account lifecycle management with advanced security protocols and automated workflows.'
  },
  {
    icon: Lock,
    title: 'Security Solutions',
    description: 'Enterprise-grade encryption, two-factor authentication, and continuous monitoring for maximum protection.'
  },
  {
    icon: Users,
    title: 'Multi-User Support',
    description: 'Scalable solutions for teams and organizations with role-based access control and permissions.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and dedicated account managers for enterprise clients.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering professional solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm hover:border-gray-700 transition-all hover:bg-gray-900/80 group"
              >
                <div className="mb-4 inline-block p-3 bg-gray-800 rounded-sm group-hover:bg-gray-750 transition-colors">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
