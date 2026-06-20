import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Star, ArrowRight, Compass, TrendingUp, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const destinations = [
    {
      name: 'Munnar',
      region: 'Kerala',
      image: 'https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-762.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
      description: 'Lush tea gardens, misty hills, and cool mountain breezes',
      rating: 4.9,
      price: '₹5,000',
      travelers: '2.4K',
      tag: 'Nature Escape',
      featured: true,
    },
    {
      name: 'Jaipur',
      region: 'Rajasthan',
      image: 'https://img.freepik.com/free-photo/hawa-mahal-palace-jaipur-india_53876-31311.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
      description: 'Royal palaces, vibrant bazaars, and pink city charm',
      rating: 4.8,
      price: '₹10,000',
      travelers: '1.8K',
      tag: 'Heritage',
      featured: false,
    },
    {
      name: 'Manali',
      region: 'Himachal Pradesh',
      image: 'https://img.freepik.com/free-photo/beautiful-village-snow-covered-mountain_181624-4248.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
      description: 'Snow-capped peaks and thrilling adventure sports',
      rating: 4.9,
      price: '₹9,000',
      travelers: '1.5K',
      tag: 'Adventure',
      featured: false,
    },
    {
      name: 'Goa',
      region: 'West India',
      image: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
      description: 'Sun-kissed beaches, nightlife, and coastal cuisine',
      rating: 4.7,
      price: '₹8,000',
      travelers: '3.1K',
      tag: 'Beach & Party',
      featured: true,
    },
    {
      name: 'Mysuru',
      region: 'Karnataka',
      image: 'https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=',
      description: 'Majestic palaces, rich heritage, and vibrant festivals',
      rating: 4.7,
      price: '₹7,500',
      travelers: '980',
      tag: 'Culture',
      featured: false,
    },
    {
      name: 'Taj Mahal',
      region: 'Agra, UP',
      image: 'https://img.freepik.com/premium-photo/taj-mahal-unesco-world-heritage-site-most-famous-monument-india-agra-city-uttar-pradesh-state_261932-6841.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
      description: 'Iconic wonder of the world — a must-see masterpiece',
      rating: 4.8,
      price: '₹11,000',
      travelers: '2.8K',
      tag: 'Iconic',
      featured: false,
    },
  ];

  const tagColors: Record<string, string> = {
    'Nature Escape': 'from-emerald-500 to-teal-600',
    'Heritage': 'from-amber-500 to-orange-600',
    'Adventure': 'from-blue-500 to-indigo-600',
    'Beach & Party': 'from-cyan-500 to-blue-500',
    'Culture': 'from-purple-500 to-pink-600',
    'Iconic': 'from-rose-500 to-red-600',
  };

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 backdrop-blur-sm border border-orange-200/50 dark:border-orange-500/20 text-orange-700 dark:text-orange-300 px-5 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Compass className="w-4 h-4" />
            Handpicked by Our Travel Experts
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-5 tracking-tight">
            Trending{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Where thousands are heading this season — will you be next?
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 auto-rows-[280px] sm:auto-rows-[320px]">
          {destinations.map((destination, index) => {
            const isFeatured = destination.featured;
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={scrollToContact}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${
                  isFeatured ? 'md:row-span-2 md:auto-rows-auto' : ''
                }`}
                style={isFeatured ? { gridRow: 'span 2' } : {}}
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: isHovered ? 1.08 : 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-900/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                  {/* Tag Badge */}
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${tagColors[destination.tag] || 'from-gray-600 to-gray-700'} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {destination.tag}
                  </motion.span>

                  {/* Traveler Count */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    {destination.travelers} this month
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(destination.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-yellow-400/30 text-yellow-400/30'
                        }`}
                      />
                    ))}
                    <span className="text-white/80 text-xs font-medium ml-1">
                      {destination.rating}
                    </span>
                  </div>

                  {/* Name & Region */}
                  <div className="mb-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      <span className="text-white/70 text-sm font-medium">{destination.region}</span>
                    </div>
                  </div>

                  {/* Description - shows on hover or always on featured */}
                  <AnimatePresence>
                    {(isHovered || isFeatured) && (
                      <motion.p
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/70 text-sm leading-relaxed mb-3"
                      >
                        {destination.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white/50 text-xs font-medium">Starting from</span>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {destination.price}
                        <span className="text-sm font-normal text-white/50 ml-1">/person</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={scrollToContact}
                      className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group/btn"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 flex items-center gap-2 shadow-xl shadow-orange-500/20"
            >
              <Users className="w-5 h-5" />
              Can&apos;t Decide? Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              Our experts will help you choose
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;
