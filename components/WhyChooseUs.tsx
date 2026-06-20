
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Heart, Globe, Award, Users, Phone, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with comprehensive insurance and 24/7 support'
    },
    {
      icon: Heart,
      title: 'Passionate Guides',
      description: 'Local experts who love sharing the stories and secrets of their homeland'
    },
    {
      icon: Globe,
      title: 'Authentic Experiences',
      description: 'Real cultural immersion beyond typical tourist attractions'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in sustainable and responsible tourism'
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Intimate group sizes for personalized attention and flexibility'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for peace of mind during your journey'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why <span className="text-orange-600">Triplora</span> Over Anyone Else?
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We don&apos;t just plan trips, we craft extraordinary journeys that create 
            lasting memories and meaningful connections
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conversion CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Start Your Dream Vacation?
              </h3>
              <p className="text-lg md:text-xl mb-4 opacity-90 max-w-2xl mx-auto">
                Join 50,000+ happy travelers who discovered the magic of India with Triplora
              </p>
              <p className="text-sm text-white/70 mb-8">
                ⏰ Summer sale prices end soon — lock in your savings today!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2 shadow-lg"
                >
                  Get My Free Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <span className="text-sm text-white/60">No commitment required</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
