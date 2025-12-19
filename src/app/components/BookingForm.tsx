import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Video } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {supabase} from '../../lib/supabase'
export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase
    .from('customer_enquiries')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline
      }
    ]);

  if (error) {
    console.error('Supabase error:', error);
    alert('Something went wrong. Please try again.');
  } else {
    alert("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div id="form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-purple-300">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Let's Create
              <span className="block bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Fill out the form and our team will get back to you within 24 hours to discuss your project.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Project Type & Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-white mb-2">
                    Project Type *
                  </label>
                  <div className="relative">
                    <Video className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-900">Select type</option>
                      <option value="social" className="bg-gray-900">Social Media</option>
                      <option value="commercial" className="bg-gray-900">Commercial</option>
                      <option value="corporate" className="bg-gray-900">Corporate Video</option>
                      <option value="music" className="bg-gray-900">Music Video</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-900">Select budget</option>
                    <option value="starter" className="bg-gray-900">$299 - $500</option>
                    <option value="professional" className="bg-gray-900">$500 - $1000</option>
                    <option value="enterprise" className="bg-gray-900">$1000+</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-white mb-2">
                  Project Timeline *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-gray-900">When do you need it?</option>
                    <option value="urgent" className="bg-gray-900">ASAP (1-3 days)</option>
                    <option value="soon" className="bg-gray-900">Within a week</option>
                    <option value="flexible" className="bg-gray-900">Flexible (1-2 weeks)</option>
                    <option value="planning" className="bg-gray-900">Just planning</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right side - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1564152078766-9d62133c7e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NjExNTg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative studio"
                className="w-full h-auto"
              />
            </div>

            {/* Info cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-gray-500 text-sm mb-1">Average Response</div>
              <div className="text-2xl text-gray-900">Under 24hrs</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-xl"
            >
              <div className="text-purple-100 text-sm mb-1">Client Satisfaction</div>
              <div className="text-2xl text-white">99.5%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
