import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long do lash extensions last?",
    answer: "Typically, lash extensions last between 3 to 4 weeks depending on your natural lash cycle and aftercare. We recommend infills every 2-3 weeks to maintain a full look."
  },
  {
    question: "Is the application process painful?",
    answer: "Not at all. Most clients find the process so relaxing that they fall asleep. It is a painless, non-invasive procedure."
  },
  {
    question: "What is Gel-X nail extension?",
    answer: "Gel-X is a 'soft extension' made from soak-off gel. It covers the entire nail bed from cuticle to free edge, providing a natural-looking, durable extension without the odor or damage often associated with acrylic."
  },
  {
    question: "How do I sign up for training?",
    answer: "You can book your slot via our booking form under the 'Training Program' service option, or contact us directly on WhatsApp for the current curriculum and next available dates."
  },
  {
    question: "Do you offer home services?",
    answer: "We primarily operate from our premium studio in Akure to ensure the highest standards of hygiene and equipment availability. However, group bookings for special events can be discussed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-white mb-6 uppercase tracking-widest"
          >
            Common <span className="gold-text-gradient italic font-normal">Questions</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-brand-gold/10 rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-brand-black/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-serif font-bold text-white tracking-wide">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-gold" size={20} />
                ) : (
                  <ChevronDown className="text-brand-gold" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 font-light leading-relaxed border-t border-brand-gold/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
