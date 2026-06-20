import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Compass } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden bg-black">
      
      {/* Premium Full-Screen Background */}
      <motion.div 
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        {/* Taj Mahal through an archway - extremely premium and cinematic */}
        <Image
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2560&q=80"
          alt="Premium India Landscape"
          fill
          priority
          className="object-cover origin-center"
        />
        {/* Complex Gradient Overlays for Premium Cinematic Feel & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/50 to-[#050505]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
      </motion.div>

      {/* Decorative Vertical Side Text (Editorial touch) */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block z-20 mix-blend-overlay">
         <span className="text-white/60 text-[10px] font-semibold tracking-[0.4em] uppercase whitespace-nowrap">
           Curated Experiences — Est. 2024
         </span>
      </div>
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden xl:block z-20 mix-blend-overlay">
         <span className="text-white/60 text-[10px] font-semibold tracking-[0.4em] uppercase whitespace-nowrap">
           India&apos;s Premium Travel Studio
         </span>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-16 h-screen flex flex-col justify-center pt-20">
        <motion.div 
           style={{ y: yContent }}
           className="grid lg:grid-cols-12 gap-8 items-center"
        >
           {/* Offset Glassmorphism Content Block */}
           <div className="lg:col-span-8 xl:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-orange-500" />
                  <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase">
                    Beyond Ordinary
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[6rem] font-playfair font-bold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
                  Discover the <br />
                  <span className="italic font-light text-white/90">soul of India.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-lg mb-12">
                  Immersive itineraries crafted for the discerning traveler. Uncover hidden palaces, untouched backwaters, and timeless heritage.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Creative Fill Button */}
                  <button onClick={scrollToPackages} className="group relative px-8 py-4 bg-white text-black overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-orange-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                    <span className="relative flex items-center gap-3 font-semibold text-sm tracking-wider uppercase group-hover:text-white transition-colors duration-500">
                      Explore Journeys <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </button>
                  
                  {/* Minimalist Icon Button */}
                  <button onClick={scrollToContact} className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 transition-colors duration-500 bg-white/5 backdrop-blur-sm">
                       <Compass className="w-5 h-5 text-white/70 group-hover:text-orange-500 transition-colors duration-500" />
                    </div>
                    <span className="text-sm font-semibold tracking-widest uppercase">Plan a trip</span>
                  </button>
                </div>
              </motion.div>

              {/* Decorative Glass Box behind the text for depth */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -inset-10 md:-inset-20 bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl rounded-[3rem] -z-10 hidden md:block"
              />
           </div>

           {/* Right Side Stats / Image inset */}
           <div className="hidden lg:block lg:col-span-4 xl:col-span-5 relative h-[500px]">
              <motion.div 
                 initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                 animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                 transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                 className="absolute right-0 bottom-0 w-64 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl"
              >
                 <div className="mb-8">
                    <div className="text-5xl font-playfair text-white mb-2 leading-none">4.9<span className="text-2xl text-white/50">/5</span></div>
                    <div className="text-[10px] text-orange-500 uppercase tracking-[0.3em] font-semibold">Guest Rating</div>
                 </div>
                 <div className="w-full h-px bg-white/10 mb-8" />
                 <div>
                    <div className="text-3xl font-playfair text-white mb-2 leading-tight">Exclusive</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-semibold">Bespoke Itineraries</div>
                 </div>
              </motion.div>
           </div>
        </motion.div>
      </div>
      
      {/* Gradient fade to match packages section background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAF9F6] dark:from-[#050505] to-transparent z-20" />
    </section>
  );
};

export default Hero;
