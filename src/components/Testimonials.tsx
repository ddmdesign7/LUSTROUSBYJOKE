import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sola A.",
    text: "The best lash studio in Akure! My mega volume set lasted for weeks and looked absolutely stunning. The environment is so luxurious.",
    initials: "SA"
  },
  {
    name: "Opeyemi M.",
    text: "Herjorkeh is a perfectionist. My acrylic nails are always flawless and the gold designs are sheer elegance. Highly recommend!",
    initials: "OM"
  },
  {
    name: "Titi B.",
    text: "Professional service at its peak. I took the lash training course and it changed my career. She's a patient and brilliant teacher.",
    initials: "TB"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Client <span className="gold-text-gradient italic">Reflections</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-black p-10 relative group border border-brand-gold/5 hover:border-brand-gold/30 transition-all duration-500 rounded-sm"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors" size={40} />
              
              <div className="w-14 h-14 bg-brand-charcoal border border-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold font-serif font-bold text-xl mb-6">
                {item.initials}
              </div>
              
              <p className="text-gray-300 font-light italic leading-relaxed mb-8 relative z-10 text-lg">
                "{item.text}"
              </p>
              
              <h5 className="text-white font-serif font-bold uppercase tracking-widest text-sm">
                - {item.name}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
