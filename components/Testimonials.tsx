import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: 'Aarav Mehta',
      location: 'Kerala Backwaters',
      text: 'Triplora made our honeymoon to the backwaters of Kerala feel like a dream. The attention to detail and premium service were unmatched.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Sneha Reddy',
      location: 'Himachal Pradesh',
      text: 'Our family trip to Himachal was incredible. Beautiful stays, smooth travel, and amazing local experiences. The kids still talk about it every day.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Rahul Sharma',
      location: 'Jaipur, Rajasthan',
      text: 'I was amazed at how well Triplora curated our Rajasthan tour. The blend of culture, comfort, and adventure was spot on.',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Anjali Nair',
      location: 'Meghalaya',
      text: 'Northeast India like never before. The itinerary was unique, the guides were incredibly knowledgeable, and the hidden gems were breathtaking.',
      image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1200&q=80'
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] noise-bg overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-12 sm:mb-20 flex flex-col items-center text-center">
          <span className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 block">
            Traveler Voices
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-playfair text-white leading-[1.1] tracking-tight">
            Moments that <span className="italic text-white/50">lingered.</span>
          </h2>
        </div>

        {/* Interactive Expanding Cards (Accordion) */}
        <div className="flex flex-col lg:flex-row h-[700px] lg:h-[600px] gap-4 sm:gap-6 w-full">
          {testimonials.map((testimonial, i) => {
            const isActive = active === i;
            
            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                animate={{
                  flex: isActive ? 5 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2rem] cursor-pointer group flex-1"
              >
                {/* Background Image */}
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.location}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Dynamic Gradient Overlays */}
                <div className={`absolute inset-0 transition-colors duration-700 ease-out ${isActive ? 'bg-black/60' : 'bg-black/30 group-hover:bg-black/10'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Vertical Label (Visible only when collapsed on Desktop) */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap -rotate-90 origin-bottom font-medium tracking-[0.25em] uppercase text-white/90 text-sm hidden lg:block"
                >
                  {testimonial.location}
                </motion.div>

                {/* Horizontal Label (Visible only when collapsed on Mobile) */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 left-6 font-medium tracking-[0.2em] uppercase text-white/90 text-xs lg:hidden"
                >
                  {testimonial.location}
                </motion.div>

                {/* Expanded Content Area */}
                <motion.div
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: isActive ? 0.3 : 0 }}
                  className={`absolute inset-0 p-6 sm:p-10 flex flex-col justify-end pointer-events-none ${isActive ? '' : 'hidden lg:flex'}`}
                >
                   {/* Large Accent Quote */}
                   <div className="text-[120px] font-playfair text-white/10 leading-none absolute top-4 left-4 sm:top-8 sm:left-8 select-none">
                     "
                   </div>

                   <div className="relative z-10 w-full lg:w-[600px] max-w-full">
                     <p className="text-xl sm:text-2xl lg:text-3xl font-playfair text-white leading-snug mb-8 lg:mb-12">
                       {testimonial.text}
                     </p>
                     
                     <div className="flex items-center gap-5">
                       <div className="w-12 h-[2px] bg-orange-500" />
                       <div>
                         <div className="text-white font-semibold uppercase tracking-[0.15em] text-xs mb-1">
                           {testimonial.name}
                         </div>
                         <div className="text-white/60 italic font-playfair text-sm lg:text-base">
                           {testimonial.location}
                         </div>
                       </div>
                     </div>
                   </div>
                </motion.div>
                
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
