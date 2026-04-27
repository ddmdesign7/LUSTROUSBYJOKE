import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
          alt="Lustrous Beauty Salon"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-brand-gold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 font-medium">
            Redefining Elegance
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight uppercase tracking-widest sm:tracking-tight">
            LUSTROUS <br /> 
            <span className="gold-text-gradient italic font-normal">Studio</span> <br />
            <span className="text-lg sm:text-2xl tracking-[0.2em] font-light opacity-80 lowercase block mt-2">by Herjorkeh</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Bespoke beauty services tailored to your unique features. <br className="hidden sm:block" />
            Experience the gold standard in premium lash and nail couture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#booking"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-white text-brand-black font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              BOOK APPOINTMENT
            </a>
            <a
              href="tel:08162837752"
              className="w-full sm:w-auto px-8 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl"
            >
              Call Us
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 border border-white text-white hover:bg-white hover:text-brand-black font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold opacity-50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
