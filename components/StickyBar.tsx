import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      const scrolled = window.scrollY;
      // Show after scrolling past the hero section (~80vh)
      setIsVisible(scrolled > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-3 text-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span className="text-sm font-medium">
                🎉 <strong>Summer Sale:</strong> Save up to 40% on all packages — Limited spots remaining!
              </span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="bg-white text-orange-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-50 transition-colors duration-200 flex items-center gap-1.5 shadow-md"
              >
                Book Now
                <ArrowRight size={14} />
              </motion.button>
              <button
                onClick={() => setIsDismissed(true)}
                className="text-white/70 hover:text-white p-1 transition-colors"
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;
