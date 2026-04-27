import { motion } from 'motion/react';
import { GraduationCap, Trophy, Users } from 'lucide-react';

export default function Training() {
  return (
    <section id="training" className="py-24 bg-brand-black relative">
       {/* Background decorative element */}
       <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif font-bold text-brand-gold">
          L
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Training & <span className="gold-text-gradient italic">Empowerment</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "Professional Lash Training",
              desc: "Master the art of lash architecture, from classic sets to mega volume techniques."
            },
            {
              icon: Trophy,
              title: "Advanced Nail Artistry",
              desc: "Learn modern nail techniques including Gel-X, BIAB, and complex acrylic designs."
            },
            {
              icon: Users,
              title: "Business Mentorship",
              desc: "Building a beauty brand is more than just skill. We teach you the business of beauty."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-charcoal p-10 border border-brand-gold/10 hover:border-brand-gold transition-all duration-300"
            >
              <item.icon size={40} className="text-brand-gold mb-6" />
              <h3 className="text-xl font-serif font-bold mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {item.desc}
              </p>
              <a href="#booking" className="text-brand-gold uppercase text-sm tracking-widest font-bold hover:underline decoration-brand-gold underline-offset-8">
                Enquire Now
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-20 p-12 bg-gradient-to-r from-brand-gold/10 to-transparent border border-brand-gold/20 text-center rounded-sm"
        >
          <h3 className="text-2xl font-serif font-bold mb-4">Start Your Career in Beauty Today</h3>
          <p className="max-w-2xl mx-auto text-gray-300 font-light mb-8">
            Are you ready to become a certified professional? Our training courses are designed for both beginners and experienced technicians looking to upgrade their skills.
          </p>
          <a href="#booking" className="inline-block px-12 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
            Join Our Next Batch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
