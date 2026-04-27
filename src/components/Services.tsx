import { motion } from 'motion/react';
import { Eye, Scissors, Brush, Sparkles } from 'lucide-react';

const lashServices = [
  'Classic Set', 'Hybrid Set', 'Volume Set', 'Mega Volume Set',
  'Cat Eye Effect', 'Wispy Effect', 'Bottom Lash', 'Anime Set'
];

const nailServices = [
  'Gel Nails', 'Acrylic Nails', 'Toe Nails',
  'Gel X', 'BIAB Nails', 'Nail Art Design', 'Full Set', 'Refills'
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold tracking-[0.4em] uppercase text-sm mb-4 block"
          >
            Signature Collections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Our Exceptional Services
          </motion.h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Lash Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black p-8 sm:p-12 border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 rounded-sm group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center border border-brand-gold text-brand-gold">
                <Eye size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-widest">Lash Extensions</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lashServices.map((service) => (
                <div key={service} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  <span className="text-sm uppercase tracking-wider">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 aspect-video overflow-hidden rounded-sm relative">
              <img
                src="https://images.unsplash.com/photo-1583001838478-224c82aa50f0?auto=format&fit=crop&q=80&w=800"
                alt="Lash Services"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </div>
          </motion.div>

          {/* Nails Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-black p-8 sm:p-12 border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500 rounded-sm group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center border border-brand-gold text-brand-gold">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-widest">Nail Artistry</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nailServices.map((service) => (
                <div key={service} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  <span className="text-sm uppercase tracking-wider">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 aspect-video overflow-hidden rounded-sm relative">
              <img
                src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&q=80&w=800"
                alt="Nail Services"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
