"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import Packages from '@/components/Packages';

import Testimonials from '@/components/Testimonials';

import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2s spin
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };


  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          >
            <motion.img
              src="/logotr.png"
              alt="Triplora Logo"
              className="w-24 h-24 sm:w-32 sm:h-32"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

        <div className={`min-h-screen transition-colors duration-300 w-full max-w-full ${isDark ? 'dark' : ''}`}>
          <Navigation isDark={isDark} toggleTheme={toggleTheme} />
          <Hero />
          <TrustBadges />
          <Packages />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </div>
    </>
  );
}
