import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Tech Product Launch',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1638961837480-5aee8a8f90cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjYwMDY4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Fashion Brand Campaign',
    category: 'Brand Video',
    image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjAyNzU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Music Video Production',
    category: 'Music Video',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Social Media Content',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    color: 'from-indigo-500 to-blue-500'
  }
];

export function Showcase() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            OUR WORK
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Recent Projects That
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Made an Impact
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore some of our recent work and see how we bring creative visions to life.
          </p>
          
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <div className={`inline-block bg-gradient-to-r ${project.color} px-4 py-1 rounded-full text-white text-sm mb-3`}>
                    {project.category}
                  </div>
                  <h3 className="text-2xl text-white mb-4">
                    {project.title}
                  </h3>
                </motion.div>
                    

                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-2xl`}>
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  
                </motion.div>
                
                
              </div>
              
            </motion.div>
          ))}
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
      </div>
    </section>
  );
}