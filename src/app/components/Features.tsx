import { motion } from 'motion/react';
import { Film, Zap, Sparkles, Layers, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Film,
    title: 'Professional Editing',
    description: 'State-of-the-art editing techniques with industry-standard software and creative expertise.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Quick turnaround times without compromising on quality. Get your content ready when you need it.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Sparkles,
    title: 'Creative Effects',
    description: 'Eye-catching visual effects, transitions, and animations that make your content stand out.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Layers,
    title: 'Multi-Format',
    description: 'From social media clips to full-length features, we handle all formats and platforms.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock support for revisions and urgent requests. We\'re here when you need us.',
    color: 'from-fuchsia-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized for excellence in video production with multiple industry awards and accolades.',
    color: 'from-purple-500 to-indigo-500'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stunning Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with creative storytelling to deliver videos that captivate and convert.
          </p>
          
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <motion.div
                  className="mt-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Learn more →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>
      <div className='mt-6 flex justify-center'>
        <button className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        onClick={() => {
          document.getElementById('form')?.scrollIntoView({
            behavior: 'smooth', // Smooth scroll animation
          });
        }}>
          Book Now
        </button>
      </div>
    </section>
  );
}