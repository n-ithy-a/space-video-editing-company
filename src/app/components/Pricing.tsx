import { motion } from 'motion/react';
import { Check, Sparkles, Zap, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    price: '299',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 minutes video',
      'Basic color grading',
      'Standard transitions',
      'Background music',
      '2 revision rounds',
      '1080p export',
      '7-day delivery'
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false
  },
  {
    name: 'Professional',
    icon: Zap,
    price: '599',
    description: 'Best for businesses and content creators',
    features: [
      'Up to 15 minutes video',
      'Advanced color grading',
      'Custom transitions & effects',
      'Licensed music library',
      '5 revision rounds',
      '4K export',
      '5-day delivery',
      'Motion graphics',
      'Priority support'
    ],
    color: 'from-pink-500 to-rose-500',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Star,
    price: '1499',
    description: 'For agencies and large-scale productions',
    features: [
      'Unlimited video length',
      'Cinema-grade color grading',
      'Custom VFX & animations',
      'Original soundtrack',
      'Unlimited revisions',
      '8K export',
      '3-day delivery',
      'Dedicated editor',
      '24/7 priority support',
      'Source files included',
      'Social media cuts'
    ],
    color: 'from-violet-500 to-purple-500',
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            PRICING PLANS
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Package
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include professional editing and dedicated support.
          </p>
          
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all ${
                plan.popular ? 'ring-4 ring-purple-500 scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              {/* Plan name */}
              <h3 className="text-2xl text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/project</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-6 h-6 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                onClick={() => {
                  document.getElementById('form')?.scrollIntoView({
                    behavior: 'smooth', // Smooth scroll animation
                  });
                }}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>Need a custom package? <a href="#booking" className="text-purple-600 hover:text-purple-700 underline">Contact us</a> for a personalized quote.</p>
        </motion.div>
      </div>
    </section>
  );
}