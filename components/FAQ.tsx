import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Why should I choose Triplora for my trip?",
      answer: "At Triplora, we craft personalized travel experiences with expert planning, verified stays, local guides, and 24/7 support — ensuring your journey is smooth, safe, and unforgettable."
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Absolutely. We specialize in bespoke travel planning. Whether you're looking for a romantic escape, cultural tour, or adventure trip, our team tailors every detail to your exact preferences and pace."
    },
    {
      question: "What destinations does Triplora cover?",
      answer: "We offer curated travel packages across India's most spectacular landscapes — from Kerala's tranquil backwaters and Goa’s pristine beaches to Rajasthan's majestic forts and the Himalayas’ serene peaks."
    },
    {
      question: "Is Triplora suitable for family or group travel?",
      answer: "Yes, we curate experiences for all demographics. Families, honeymooners, solo travelers, and groups can all enjoy guided tours, safe accommodations, and activities designed perfectly for their specific needs."
    },
    {
      question: "What exactly is included in the packages?",
      answer: "Our signature packages typically include premium accommodation, private transportation, expert local guides, daily breakfast, and 24/7 concierge support. We maintain complete transparency with no hidden fees."
    },
    {
      question: "How do I secure my booking?",
      answer: "Booking is a seamless process. Contact our studio via the form below or WhatsApp. Our travel artisans will craft a preliminary itinerary and guide you through secure payment options once you're perfectly satisfied."
    },
    {
      question: "What are your safety protocols?",
      answer: "Your safety is our absolute priority. We partner exclusively with vetted local vendors, utilize highly-rated secure transportation, and provide direct emergency support lines to ensure complete peace of mind."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF9F6] dark:bg-[#0A0A0A] noise-bg relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Context */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-orange-600 dark:text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 block">
                Clarity & Details
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-playfair text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                Your questions, <br />
                <span className="italic text-gray-400 dark:text-gray-500">answered.</span>
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-12 max-w-sm">
                Everything you need to know about our curation process, secure booking, and the unparalleled experiences we offer.
              </p>

              <button
                onClick={scrollToContact}
                className="group flex items-center gap-4 text-gray-900 dark:text-white w-fit"
              >
                <div className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Ask a specific question</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-gray-200 dark:border-gray-800">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-gray-200 dark:border-gray-800"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-8 flex items-start justify-between text-left group"
                    >
                      <h3 
                        className={`text-2xl sm:text-3xl font-playfair pr-8 transition-colors duration-500 ${
                          isOpen 
                            ? 'text-orange-600 dark:text-orange-500' 
                            : 'text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500'
                        }`}
                      >
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 mt-2">
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                            isOpen 
                              ? 'border-orange-500 text-orange-500' 
                              : 'border-gray-300 dark:border-gray-700 text-gray-400 group-hover:border-orange-500 group-hover:text-orange-500'
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pr-12 sm:pr-20">
                            <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;
