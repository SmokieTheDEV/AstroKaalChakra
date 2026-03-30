import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Compass, Heart, ShieldCheck, Quote, ChevronRight } from 'lucide-react';
import Mandala from '../components/Mandala';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Mandalas */}
      <Mandala className="absolute -top-40 -right-40 text-gold-500" size={800} opacity={0.03} />
      <Mandala className="absolute top-1/2 -left-40 text-gold-500" size={600} opacity={0.02} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 pt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 border border-gold-500/30 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
              Ancient Wisdom • Modern Clarity
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight text-gold-100">
              Your Cosmic <br /> 
              <span className="text-gold-500 italic">Blueprint</span> Awaits
            </h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed font-light">
              Unlock the secrets of your destiny with KaalChakra Jyotish. Our Vedic analysis provides profound insights into your path, purpose, and potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link 
                to="/kundali" 
                className="px-10 py-4 bg-gold-600 hover:bg-gold-500 text-royal-black font-bold uppercase tracking-widest rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-500/10 text-center"
              >
                Generate Your Kundali
              </Link>
              <Link 
                to="/horoscope" 
                className="px-10 py-4 border border-gold-500/30 hover:border-gold-500 text-gold-100 font-bold uppercase tracking-widest rounded-sm transition-all duration-300 text-center"
              >
                View Horoscope
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <Mandala className="absolute inset-0 text-gold-500 animate-spin-slow" size={450} opacity={0.1} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-gold-500/20 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-full border border-gold-500/40 flex items-center justify-center p-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gold-500/20 to-transparent flex items-center justify-center">
                      <Compass className="w-24 h-24 text-gold-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-royal-dark/50 border-y border-gold-500/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Quote className="w-12 h-12 text-gold-500/30 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-serif text-gold-100 italic leading-relaxed">
              "यथा पिण्डे तथा ब्रह्माण्डे"
            </h2>
            <p className="text-xl text-gold-400/80 font-serif tracking-widest uppercase">
              As is the individual, so is the universe.
            </p>
            <div className="w-24 h-px bg-gold-500/30 mx-auto mt-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed italic">
              Vedic astrology is not about predicting the future, but about understanding the cosmic energies that shape our existence. It is a map to navigate the ocean of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em]">Our Offerings</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gold-100">Cosmic Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Detailed Kundali",
                desc: "A comprehensive map of the heavens at the exact moment of your birth.",
                icon: <Compass className="w-8 h-8" />,
                link: "/kundali"
              },
              {
                title: "Life Predictions",
                desc: "Insights into your career, health, and spiritual growth based on planetary transits.",
                icon: <Star className="w-8 h-8" />,
                link: "/kundali"
              },
              {
                title: "Relationship Sync",
                desc: "Understand the cosmic compatibility between souls for lasting harmony.",
                icon: <Heart className="w-8 h-8" />,
                link: "/kundali"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-10 bg-royal-dark border border-gold-500/10 hover:border-gold-500/40 transition-all duration-500 rounded-sm"
              >
                <div className="text-gold-500 mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-serif text-gold-100 mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-8">{item.desc}</p>
                <Link to={item.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-500 hover:text-gold-300 transition-colors">
                  Explore More <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6 bg-royal-dark/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em]">Why KaalChakra</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gold-100">Authentic Vedic Tradition</h2>
            <p className="text-gray-400 leading-relaxed">
              We blend ancient Parashari principles with modern computational accuracy. Our algorithms are verified by traditional scholars to ensure every calculation is precise.
            </p>
            <ul className="space-y-6">
              {[
                "Ancient Parashari Calculations",
                "High-Precision Planetary Data",
                "Personalized Remedies & Mantras",
                "Private & Secure Analysis"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-gold-100/80">
                  <ShieldCheck className="text-gold-500 w-5 h-5" />
                  <span className="tracking-wide">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-sm border border-gold-500/10 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/astrology/800/800" 
                alt="Vedic Astrology" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 bg-gold-600 text-royal-black rounded-sm hidden md:block">
              <p className="text-4xl font-serif font-bold">25+</p>
              <p className="text-xs font-bold uppercase tracking-widest">Years of Wisdom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-gold-100 italic">Voices of the Awakened</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Aarav Sharma", text: "The Kundali analysis was eerily accurate. It gave me clarity during a very confusing career transition." },
              { name: "Priya Patel", text: "KaalChakra is different. It doesn't feel like a commercial site; it feels like talking to a wise elder." },
              { name: "Vikram Singh", text: "The relationship compatibility report helped us understand our communication patterns better. Truly insightful." }
            ].map((t, i) => (
              <div key={i} className="space-y-6 p-8 border-l border-gold-500/20">
                <p className="text-gray-400 italic leading-relaxed">"{t.text}"</p>
                <p className="text-gold-500 font-serif tracking-widest uppercase text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <Mandala className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500" size={1000} opacity={0.03} />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif text-gold-100">Begin Your Journey <br /> Into the <span className="text-gold-500 italic">Infinite</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The stars have a message for you. Are you ready to listen?
          </p>
          <Link 
            to="/kundali" 
            className="inline-block px-12 py-5 bg-gold-600 hover:bg-gold-500 text-royal-black font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 transform hover:scale-105"
          >
            Generate Your Kundali Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
