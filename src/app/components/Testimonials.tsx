import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'VisionCut transformed my YouTube channel! Their editing style is exactly what I needed to stand out. My engagement has tripled!',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    role: 'Marketing Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'Professional, fast, and incredibly creative. They understood our brand vision perfectly and delivered beyond expectations.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Music Artist',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'My music video got 1M views in the first week! The visual effects and storytelling were absolutely stunning.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent" />

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
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-purple-200">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
        >
          <div className="text-center">
            <div className="text-3xl text-gray-900 mb-1">500+</div>
            <div className="text-sm">Videos Delivered</div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl text-gray-900 mb-1">98%</div>
            <div className="text-sm">Client Retention</div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl text-gray-900 mb-1">4.9/5</div>
            <div className="text-sm">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div className="text-center">
            <div className="text-3xl text-gray-900 mb-1">24h</div>
            <div className="text-sm">Response Time</div>
          </div>
        </motion.div>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
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