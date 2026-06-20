import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = "f6b38ddc-cae8-4d66-bdfc-6c274373d645";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      ...formData
    };
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0A0A] text-white overflow-hidden relative noise-bg" ref={ref}>
      
      {/* Background gradients for depth */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none rounded-full" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6 block">
              Connect
            </span>
            <h2 className="text-5xl sm:text-7xl font-playfair leading-[1.1] mb-8 tracking-tight">
              Begin your <br />
              <span className="italic text-white/50">journey.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-md font-light leading-relaxed mb-16">
              Connect with our travel artisans. We design tailored itineraries that match your exact pace and preferences.
            </p>
            
            <div className="space-y-10">
              <div className="group">
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-3">Direct Line</p>
                <a href="tel:+918129780845" className="text-2xl font-light hover:text-orange-400 transition-colors">
                  +91 8129780845
                </a>
              </div>
              <div className="group">
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-3">Email Studio</p>
                <a href="mailto:info@Triplora.com" className="text-2xl font-light hover:text-orange-400 transition-colors">
                  info@Triplora.com
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-3">Location</p>
                <p className="text-xl font-light text-white/80">
                  Malappuram, Kerala, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] backdrop-blur-2xl p-8 sm:p-12 lg:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative border-b border-white/20 pb-2 group">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none px-0 text-lg placeholder-white/40 text-white font-light transition-all group-focus-within:placeholder-white/20" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-500 group-focus-within:w-full" />
                </div>
                <div className="relative border-b border-white/20 pb-2 group">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-none focus:ring-0 focus:outline-none px-0 text-lg placeholder-white/40 text-white font-light transition-all group-focus-within:placeholder-white/20" 
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-500 group-focus-within:w-full" />
                </div>
              </div>

              <div className="relative border-b border-white/20 pb-2 group">
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number" 
                  className="w-full bg-transparent border-none focus:ring-0 focus:outline-none px-0 text-lg placeholder-white/40 text-white font-light transition-all group-focus-within:placeholder-white/20" 
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="relative border-b border-white/20 pb-2 group">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  rows={3} 
                  placeholder="Tell us about your ideal trip..." 
                  className="w-full bg-transparent border-none focus:ring-0 focus:outline-none px-0 text-lg placeholder-white/40 text-white font-light resize-none transition-all group-focus-within:placeholder-white/20" 
                />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-500 group-focus-within:w-full" />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'} 
                className="w-full bg-white text-black py-5 rounded-full font-medium text-lg hover:bg-orange-500 hover:text-white transition-all duration-500 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group mt-4"
              >
                {status === 'loading' ? 'Sending Request...' : 'Request Itinerary'} 
                <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
                  className="text-green-400 mt-4 flex items-center justify-center gap-2 text-sm font-light"
                >
                  <CheckCircle className="w-5 h-5"/> Request beautifully sent. We&apos;ll be in touch soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
                  className="text-red-400 mt-4 text-center text-sm font-light"
                >
                  Something went wrong. Please email us directly.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
