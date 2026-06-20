import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, HeadphonesIcon, Wallet, MapPinned, Star } from 'lucide-react';

const TrustBadges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const badges = [
    { icon: Shield, text: 'Money-Back Guarantee' },
    { icon: Zap, text: 'Instant Confirmation' },
    { icon: HeadphonesIcon, text: '24/7 Concierge' },
    { icon: Wallet, text: 'Best Price Match' },
    { icon: MapPinned, text: 'Local Expert Guides' },
    { icon: Star, text: '4.9★ Verified Reviews' },
  ];

  return (
    <section className="relative bg-[#0f1419] dark:bg-[#0a0d10] py-6 overflow-hidden" ref={ref}>
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors duration-300 cursor-default"
            >
              <badge.icon className="w-4 h-4 text-orange-500/70" />
              <span className="text-xs font-medium tracking-wide whitespace-nowrap">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default TrustBadges;
