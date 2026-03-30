import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Star, Compass, Sparkles, ChevronRight, X, Heart } from 'lucide-react';
import Mandala from '../components/Mandala';

const zodiacs = [
  { name: "Aries", symbol: "♈", element: "Fire", dates: "Mar 21 - Apr 19" },
  { name: "Taurus", symbol: "♉", element: "Earth", dates: "Apr 20 - May 20" },
  { name: "Gemini", symbol: "♊", element: "Air", dates: "May 21 - Jun 20" },
  { name: "Cancer", symbol: "♋", element: "Water", dates: "Jun 21 - Jul 22" },
  { name: "Leo", symbol: "♌", element: "Fire", dates: "Jul 23 - Aug 22" },
  { name: "Virgo", symbol: "♍", element: "Earth", dates: "Aug 23 - Sep 22" },
  { name: "Libra", symbol: "♎", element: "Air", dates: "Sep 23 - Oct 22" },
  { name: "Scorpio", symbol: "♏", element: "Water", dates: "Oct 23 - Nov 21" },
  { name: "Sagittarius", symbol: "♐", element: "Fire", dates: "Nov 22 - Dec 21" },
  { name: "Capricorn", symbol: "♑", element: "Earth", dates: "Dec 22 - Jan 19" },
  { name: "Aquarius", symbol: "♒", element: "Air", dates: "Jan 20 - Feb 18" },
  { name: "Pisces", symbol: "♓", element: "Water", dates: "Feb 19 - Mar 20" }
];

const Horoscope: React.FC = () => {
  const [selectedZodiac, setSelectedZodiac] = useState<typeof zodiacs[0] | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden py-24 px-6">
      <Mandala className="absolute -top-40 -left-40 text-gold-500" size={800} opacity={0.03} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em]">Celestial Guidance</h3>
          <h1 className="text-4xl md:text-6xl font-serif text-gold-100">Daily Horoscopes</h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Align your day with the cosmic flow. Select your zodiac sign for personalized daily insights.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {zodiacs.map((zodiac, i) => (
            <motion.button
              key={zodiac.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedZodiac(zodiac)}
              className="group bg-royal-dark border border-gold-500/10 hover:border-gold-500/40 p-8 rounded-sm transition-all duration-500 text-center space-y-4"
            >
              <span className="text-4xl text-gold-500 group-hover:scale-125 transition-transform duration-500 block">
                {zodiac.symbol}
              </span>
              <h4 className="text-xl font-serif text-gold-100">{zodiac.name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{zodiac.dates}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal / Overlay for Zodiac Insights */}
      <AnimatePresence>
        {selectedZodiac && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedZodiac(null)}
              className="absolute inset-0 bg-royal-black/95 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-royal-dark border border-gold-500/20 p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden"
            >
              <Mandala className="absolute -top-20 -right-20 text-gold-500" size={300} opacity={0.05} />
              
              <button 
                onClick={() => setSelectedZodiac(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gold-400 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-10 relative z-10">
                <div className="flex items-center gap-6">
                  <span className="text-6xl text-gold-500">{selectedZodiac.symbol}</span>
                  <div>
                    <h2 className="text-3xl font-serif text-gold-100">{selectedZodiac.name}</h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-500">{selectedZodiac.dates} • {selectedZodiac.element} Sign</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <Sun size={14} /> General Outlook
                    </h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Today brings a surge of creative energy. The planetary alignment suggests it's a perfect time to initiate new projects or express your feelings to someone special. Trust your intuition.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <Sparkles size={14} /> Lucky Elements
                    </h5>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-400"><span className="text-gold-200">Color:</span> Golden Yellow</p>
                      <p className="text-gray-400"><span className="text-gold-200">Number:</span> 7, 14, 21</p>
                      <p className="text-gray-400"><span className="text-gold-200">Stone:</span> Citrine</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row gap-6 items-center justify-between">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 mb-1">
                        <Heart size={16} />
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">Love: 85%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 mb-1">
                        <Compass size={16} />
                      </div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">Career: 70%</span>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-royal-black text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300">
                    Get Full Analysis
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Horoscope;
