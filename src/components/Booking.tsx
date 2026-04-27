import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Lash Extensions',
    date: '',
    time: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (formData.name.length < 3) newErrors.name = 'Name must be at least 3 characters';
    
    // Nigeria phone number validation
    const phoneRegex = /^(0|(\+234))[789][01]\d{8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Nigeria phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) newErrors.time = 'Time is required';

    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for booking with Lustrous Studio! We will contact you at ' + formData.phone + ' shortly to confirm.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        service: 'Lash Extensions',
        date: '',
        time: '',
        notes: ''
      });
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-8">Reserve Your <br /><span className="gold-text-gradient italic">Moment of Luxury</span></h2>
            <p className="text-gray-400 font-light mb-12 text-lg">
              Book your appointment today and let our experts transform your look. Please fill out the form, and our team will get back to you within 2-4 hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: 'Call Us', content: '08162837752' },
                { icon: MapPin, title: 'Studio Address', content: 'Powerline, Light and Life Junction, Ijoka Road, Akure, Ondo State' },
                { icon: Clock, title: 'Open Hours', content: 'Mon - Sat: 9:00 AM - 7:00 PM' }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-full text-brand-gold shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-brand-gold mb-1">{item.title}</h4>
                    <p className="text-gray-200">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-black p-8 sm:p-12 border border-brand-gold/20 rounded-sm shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input
                    type="text"
                    className={`w-full bg-brand-charcoal border ${errors.name ? 'border-red-500' : 'border-brand-gold/10'} p-4 text-white focus:border-brand-gold outline-none transition-all`}
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input
                    type="tel"
                    className={`w-full bg-brand-charcoal border ${errors.phone ? 'border-red-500' : 'border-brand-gold/10'} p-4 text-white focus:border-brand-gold outline-none transition-all`}
                    placeholder="0816 283 7752"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Service</label>
                <select
                  className="w-full bg-brand-charcoal border border-brand-gold/10 p-4 text-white focus:border-brand-gold outline-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Lash Extensions</option>
                  <option>Nail Services</option>
                  <option>Training Program</option>
                  <option>Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Date</label>
                  <input
                    type="date"
                    className={`w-full bg-brand-charcoal border ${errors.date ? 'border-red-500' : 'border-brand-gold/10'} p-4 text-white focus:border-brand-gold outline-none transition-all`}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                  {errors.date && <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Time</label>
                  <input
                    type="time"
                    className={`w-full bg-brand-charcoal border ${errors.time ? 'border-red-500' : 'border-brand-gold/10'} p-4 text-white focus:border-brand-gold outline-none transition-all`}
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                  {errors.time && <p className="text-red-500 text-[10px] uppercase tracking-widest mt-1">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Special Requests / Notes</label>
                <textarea
                  rows={4}
                  className="w-full bg-brand-charcoal border border-brand-gold/10 p-4 text-white focus:border-brand-gold outline-none transition-all resize-none"
                  placeholder="Any specific effects or preferences? (e.g. Wispy effect, length preferences, etc.)"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-gold hover:bg-white text-brand-black disabled:opacity-50 disabled:cursor-not-allowed font-bold uppercase tracking-widest transition-all duration-300"
              >
                {isSubmitting ? 'Processing...' : 'Book Appointment'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
