"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      name: 'Golden Triangle',
      tagline: 'Perfect first trip',
      duration: '7 Days',
      groupSize: '2–15',
      rating: 4.9,
      reviews: 847,
      price: '35,000',
      originalPrice: '45,000',
      savings: '10,000',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Delhi – Agra – Jaipur circuit', 'Taj Mahal sunrise experience', 'Heritage palace stay'],
      popular: false,
    },
    {
      name: 'Kerala Paradise',
      tagline: 'Our best seller',
      duration: '10 Days',
      groupSize: '2–12',
      rating: 4.9,
      reviews: 1234,
      price: '55,000',
      originalPrice: '70,000',
      savings: '15,000',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Backwater houseboat cruise', 'Munnar tea country trek', 'Ayurveda wellness retreat'],
      popular: true,
    },
    {
      name: 'Himalayan Explorer',
      tagline: 'For the adventurous',
      duration: '14 Days',
      groupSize: '4–8',
      rating: 4.8,
      reviews: 612,
      price: '75,000',
      originalPrice: '95,000',
      savings: '20,000',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Manali – Leh highway drive', 'Pangong Lake luxury camping', 'Ancient monastery visits'],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-[#FAF9F6] dark:bg-[#050505] overflow-hidden noise-bg">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-orange-600 dark:text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 block">
              Curated Journeys
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-playfair text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Exclusive escapes, <br />
              <span className="italic text-gray-400 dark:text-gray-500">beautifully crafted.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-sm leading-relaxed border-l-2 border-orange-500/30 pl-6">
              Step away from the ordinary. Our signature collections blend authentic local experiences with refined luxury.
            </p>
          </motion.div>
        </div>

        {/* Premium Tall Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              role="button"
              tabIndex={0}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[500px] sm:h-[650px] rounded-[2rem] overflow-hidden cursor-pointer w-full text-left"
              onClick={scrollToContact}
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-110"
                />
              </div>

              {/* Sophisticated Gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90 transition-opacity duration-700 ease-[0.22,1,0.36,1]" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[0.22,1,0.36,1]" />

              {/* Top Badges */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                {pkg.popular ? (
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                    Signature Choice
                  </div>
                ) : (
                  <div />
                )}
                <div className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  Save ₹{pkg.savings}
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-4">
                  
                  {/* Rating & Base Info */}
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                    <span className="text-white text-sm font-medium">{pkg.rating}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-playfair text-white mb-3 tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className="text-orange-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6 opacity-90">
                    {pkg.duration} • {pkg.groupSize} Guests
                  </p>

                  {/* Hidden Details (Revealed on Hover) */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[0.22,1,0.36,1]">
                    <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                      
                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 text-white/80 text-sm font-light">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Pricing & CTA */}
                      <div className="flex items-end justify-between pt-5 border-t border-white/20">
                        <div>
                          <p className="text-white/50 line-through text-xs tracking-wider mb-1">₹{pkg.originalPrice}</p>
                          <p className="text-2xl text-white font-light tracking-wide">₹{pkg.price}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;