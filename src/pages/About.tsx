import React from 'react';
import { motion } from 'motion/react';
import { Quote, Compass, Star, ShieldCheck, Sparkles } from 'lucide-react';
import Mandala from '../components/Mandala';

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-24 px-6">
      <Mandala className="absolute -top-40 -right-40 text-gold-500" size={800} opacity={0.03} />
      <Mandala className="absolute bottom-0 -left-40 text-gold-500" size={600} opacity={0.02} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-32 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em]">Our Story</h3>
            <h1 className="text-5xl md:text-7xl font-serif text-gold-100">Ancient Wisdom <br /> <span className="text-gold-500 italic">Modern Clarity</span></h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed italic"
          >
            "Jyotish is the eye of the Vedas, providing light to the path of the soul."
          </motion.p>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-gold-100">The Vedic Philosophy</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              KaalChakra Jyotish was born from a deep reverence for the ancient Vedic traditions. We believe that the universe is not a collection of random events, but a beautifully orchestrated symphony of cosmic energies.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Our mission is to translate this ancient language into practical, actionable insights for the modern seeker. We don't just provide predictions; we provide a framework for self-understanding and spiritual growth.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h4 className="text-gold-500 font-serif text-xl">Authenticity</h4>
                <p className="text-gray-500 text-sm">Strict adherence to Parashari principles.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold-500 font-serif text-xl">Precision</h4>
                <p className="text-gray-500 text-sm">High-accuracy planetary calculations.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm border border-gold-500/10 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/temple/800/1000" 
                alt="Vedic Inspiration" 
                className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 p-8 bg-royal-dark border border-gold-500/20 rounded-sm hidden md:block">
              <Quote className="text-gold-500 mb-4" size={32} />
              <p className="text-gold-100 font-serif italic text-lg max-w-[200px]">The stars do not compel, they only impel.</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-royal-dark border border-gold-500/10 p-12 md:p-24 rounded-sm text-center space-y-12 mb-32 relative overflow-hidden">
          <Mandala className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500" size={600} opacity={0.03} />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-gold-100">Our Mission</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              To empower individuals with the wisdom of the stars, fostering a world where every soul understands its unique purpose and navigates life with clarity, compassion, and cosmic alignment.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-8">
              {[
                { icon: <Compass />, label: "Guidance" },
                { icon: <Star />, label: "Clarity" },
                { icon: <ShieldCheck />, label: "Trust" },
                { icon: <Sparkles />, label: "Wisdom" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="text-gold-500 w-10 h-10 flex items-center justify-center border border-gold-500/20 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-serif text-gold-100 italic">Ready to see through the Eye of the Vedas?</h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="/kundali" 
              className="inline-block px-12 py-5 bg-gold-600 hover:bg-gold-500 text-royal-black font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300"
            >
              Begin Your Analysis
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
