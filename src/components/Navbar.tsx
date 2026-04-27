import { motion } from 'motion/react';
import { Menu, X, Instagram, Phone, Music } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#training' },
    { name: 'Book Now', href: '#booking' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-black border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest gold-text-gradient uppercase">
              LUSTROUS
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-brand-gold/20 pl-6 ml-2">
              <a href="https://instagram.com/lustrousbyherjorkeh" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@lustrousbyherjorkeh" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-colors">
                <Music size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-gold p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-charcoal border-b border-brand-gold/20 px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium tracking-widest text-gray-300 hover:text-brand-gold py-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
