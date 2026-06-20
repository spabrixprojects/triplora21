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

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };


  return (
    <>

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
