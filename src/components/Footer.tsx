import { Instagram, Phone, MapPin, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold gold-text-gradient uppercase tracking-widest mb-6">LUSTROUS</h2>
            <p className="text-gray-400 font-light max-w-md leading-relaxed mb-8">
              A premium beauty sanctuary where we specialize in lashes and nails. Passionate about enhancing your natural beauty with precision and luxury.
            </p>
            <div className="flex space-x-4">
              <a href="https://tiktok.com/@lustrousbyherjorkeh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
                <Music size={18} />
              </a>
              <a href="https://instagram.com/lustrousbyherjorkeh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-brand-gold mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Training', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-gold text-sm uppercase tracking-wider transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-brand-gold mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-gold shrink-0 mt-1" />
                <span>08162837752</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-1" />
                <span>Powerline, Light and Life Junction, Ijoka Road, Akure, Ondo State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-gold/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-light">
            © {new Date().getFullYear()} LUSTROUS BY HERJORKEH. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest font-light">
            DESIGNED WITH ELEGANCE.
          </p>
        </div>
      </div>
    </footer>
  );
}
