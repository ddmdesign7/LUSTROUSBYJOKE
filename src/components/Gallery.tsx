import { motion } from 'motion/react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800',
    title: 'Signature Volume Lashes',
    category: 'Lashes'
  },
  {
    url: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&q=80&w=800',
    title: 'Gold Detail Acrylics',
    category: 'Nails'
  },
  {
    url: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800',
    title: 'Mega Volume Set',
    category: 'Lashes'
  },
  {
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    title: 'Minimalist Gel Polish',
    category: 'Nails'
  },
  {
    url: 'https://images.unsplash.com/photo-1583001838478-224c82aa50f0?auto=format&fit=crop&q=80&w=800',
    title: 'Cat Eye Extensions',
    category: 'Lashes'
  },
  {
    url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
    title: 'Marble Nail Art',
    category: 'Nails'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold tracking-[0.4em] uppercase text-sm mb-4 block"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 uppercase"
          >
            Lustrous <span className="gold-text-gradient italic">Showcase</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-brand-gold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <h4 className="text-white text-xl font-serif font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
