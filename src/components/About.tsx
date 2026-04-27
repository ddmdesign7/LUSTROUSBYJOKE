import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://drive.google.com/uc?export=view&id=150ePbPcCQPdZi9Jh80mydCg4af2Cq5m7"
                alt="CEO of Lustrous by Herjorkeh"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative gold frame offset */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-gold -z-10" />
            <div className="absolute bottom-8 -right-8 w-48 h-48 bg-brand-gold/10 backdrop-blur-3xl -z-10 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
              Crafting Beauty with <br />
              <span className="gold-text-gradient">Professional Excellence</span>
            </h2>
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
              <p>
                At <span className="text-brand-gold font-medium">Lustrous by Herjorkeh</span>, we believe that true beauty is built on a foundation of confidence and elegance. Our boutique studio is dedicated to providing world-class lash and nail services that accentuate your natural allure.
              </p>
              <p>
                Founded on the principles of precision and artistry, we specialize in advanced lash extension techniques and custom nail design. Every set we create is a masterpiece, uniquely tailored to your individual style and personality.
              </p>
              <p>
                We pride ourselves on our professionalism, using only premium quality products and maintaining the highest standards of hygiene and customer satisfaction. Your comfort and beauty are our top priorities.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 py-8 border-t border-brand-charcoal">
              <div>
                <span className="block text-3xl font-serif text-brand-gold mb-2">5+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-brand-gold mb-2">1k+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
