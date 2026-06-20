import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#packages', label: 'Packages' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
      >
        <nav 
          className={`pointer-events-auto transition-all duration-700 ease-[0.22,1,0.36,1] flex items-center justify-between w-full ${
            isScrolled 
              ? 'bg-white/90 dark:bg-[#0A0A0A]/80 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 max-w-5xl rounded-full px-6 py-3 sm:py-4 shadow-2xl'
              : 'bg-transparent border-transparent max-w-7xl rounded-none px-2 sm:px-4 py-6'
          }`}
        >
          {/* Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group"
            onClick={(e) => onNavClick(e, '#home')}
          >
             <Image 
               src="/logotr.png" 
               alt="Triplora" 
               width={40}
               height={40}
               className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110" 
             />
             <span className={`text-xl sm:text-2xl font-playfair font-bold tracking-wider transition-colors duration-300 ${
               isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
             }`}>
               Triplora
             </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
             {navItems.map((item) => (
               <a 
                 key={item.href} 
                 href={item.href} 
                 onClick={(e) => onNavClick(e, item.href)}
                 className={`text-[11px] font-semibold uppercase tracking-[0.2em] relative group transition-colors duration-300 ${
                   isScrolled ? 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' : 'text-white/70 hover:text-white'
                 }`}
               >
                 {item.label}
                 <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-orange-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
               </a>
             ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
             {toggleTheme && (
               <button 
                 onClick={toggleTheme} 
                 className={`p-2 rounded-full transition-colors duration-300 ${
                   isScrolled ? 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white/70 hover:text-white hover:bg-white/10'
                 }`}
                 aria-label="Toggle theme"
               >
                 {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
               </button>
             )}
             
             <div className={`w-px h-4 ${isScrolled ? 'bg-gray-300 dark:bg-gray-700' : 'bg-white/30'}`} />
             
             <button 
               onClick={scrollToContact} 
               className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-orange-600 hover:bg-orange-500 px-6 py-3 rounded-full transition-all duration-300 shadow-xl shadow-orange-600/20"
             >
               Start Planning
               <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
             {toggleTheme && (
               <button 
                 onClick={toggleTheme} 
                 className={`p-2 rounded-full transition-colors duration-300 ${
                   isScrolled ? 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/10'
                 }`}
                 aria-label="Toggle theme"
               >
                 {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
               </button>
             )}
             <button 
               onClick={() => setIsMobileMenuOpen(true)}
               className={`p-2 transition-colors duration-300 ${
                 isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
               }`}
             >
               <Menu className="w-6 h-6" />
             </button>
          </div>
        </nav>
      </motion.div>

      {/* Cinematic Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#050505] noise-bg flex flex-col justify-center px-8"
          >
            {/* Mobile Header */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
              <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="flex items-center gap-3">
                 <Image src="/logotr.png" alt="Triplora" width={32} height={32} className="w-8 h-8" />
                 <span className="text-xl font-playfair font-bold tracking-wider text-white">Triplora</span>
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Huge Menu Links */}
            <nav className="flex flex-col gap-6 mt-12">
              <span className="text-orange-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">Navigation</span>
              {navItems.map((item, idx) => (
                <div key={item.href} className="overflow-hidden">
                   <motion.a
                     href={item.href}
                     onClick={(e) => onNavClick(e, item.href)}
                     initial={{ y: "100%" }}
                     animate={{ y: 0 }}
                     exit={{ y: "100%" }}
                     transition={{ duration: 0.5, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                     className="block text-5xl font-playfair font-bold text-white hover:text-orange-500 transition-colors"
                   >
                     {item.label}
                   </motion.a>
                </div>
              ))}
            </nav>

            {/* Mobile Footer CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-12 left-8 right-8"
            >
              <button 
                onClick={scrollToContact}
                className="w-full flex justify-between items-center py-4 border-b border-white/20 text-white hover:border-orange-500 hover:text-orange-500 transition-colors group"
              >
                 <span className="text-sm tracking-[0.2em] uppercase font-semibold">Start Planning</span>
                 <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </motion.div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
