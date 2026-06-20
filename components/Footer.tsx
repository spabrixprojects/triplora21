import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const onFooterClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-white pt-24 sm:pt-32 pb-8 px-6 sm:px-8 lg:px-12 relative overflow-hidden noise-bg">
      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-10">
                <Image src="/logotr.png" alt="Triplora" width={48} height={48} className="w-12 h-12" />
                <span className="text-3xl font-playfair tracking-wider">Triplora</span>
              </div>
              <h3 className="text-4xl sm:text-5xl xl:text-6xl font-playfair leading-[1.15] text-white/90 mb-8 tracking-tight">
                Journeys that <br/> redefine <span className="italic text-white/40">luxury.</span>
              </h3>
              <p className="text-white/50 font-light text-lg max-w-sm leading-relaxed">
                Step beyond the guidebook. We craft exclusive Indian itineraries for the discerning traveler.
              </p>
            </motion.div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12 sm:gap-16 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/30 text-xs font-semibold tracking-[0.25em] uppercase mb-8">Explore</h4>
              <ul className="space-y-5">
                {['About Us', 'Destinations', 'Curated Packages', 'Contact Studio'].map((item) => {
                  const targetId = item.split(' ')[0].toLowerCase();
                  return (
                  <li key={item}>
                    <a href={`#${targetId}`} onClick={(e) => onFooterClick(e, targetId)} className="group flex items-center gap-4">
                      <span className="w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-4" />
                      <span className="text-lg font-light text-white/70 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/30 text-xs font-semibold tracking-[0.25em] uppercase mb-8">Connect</h4>
              <ul className="space-y-5">
                {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center gap-3 w-fit">
                      <span className="text-lg font-light text-white/70 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/0 group-hover:text-orange-500 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>

        {/* Huge bottom divider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" 
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-sm font-light">
            © {new Date().getFullYear()} Triplora Experiences. All rights reserved.
          </div>
       
        </div>

      </div>
      
      {/* Absolute Background Typography */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[18vw] font-playfair font-bold text-white/[0.015] pointer-events-none whitespace-nowrap z-0 select-none">
        TRIPLORA
      </div>
    </footer>
  );
};

export default Footer;
