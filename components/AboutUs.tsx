import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Counter from './Counter';
import Image from 'next/image';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="about" className="py-12 px-2 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Triplora
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
             Your Trusted Travel Companion
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
             At Triplora, we believe that travel is more than just reaching a destination—it's about
              experiencing the journey. Founded with a passion for exploration and a commitment to
              exceptional service, Triplora offers tailor-made travel experiences across India and beyond.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Whether you're seeking serene escapes, adventurous trails, or cultural immersions, 
              our expert team crafts personalized itineraries to suit every traveler's dream. With trusted partners, 
              seamless planning, and 24/7 support, 
              we turn your travel aspirations into unforgettable memories.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { number: 10, label: 'Years Experience', suffix: '+' },
                { number: 50, label: 'Happy Travelers', suffix: 'k+' },
                { number: 200, label: 'Destinations', suffix: '+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">
                    <Counter to={stat.number} inView={isInView} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-56 sm:h-80 md:h-96">
              <Image
                src='/aboutpics.jpg'
               
                alt="Indian Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="text-orange-600 hidden sm:block dark:text-orange-400 text-2xl font-bold mb-2">
                Our Mission
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
              To inspire and empower every traveler with seamless, personalized, and unforgettable journeys.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
