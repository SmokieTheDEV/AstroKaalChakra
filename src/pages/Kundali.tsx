import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, User, Lock, ChevronRight, Sparkles, Star, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import Mandala from '../components/Mandala';

const Kundali: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    time: '',
    place: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-24 px-6">
      <Mandala className="absolute -top-40 -right-40 text-gold-500" size={800} opacity={0.03} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-gold-100">
            {step === 1 ? "Generate Your Kundali" : "Your Cosmic Preview"}
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            {step === 1 
              ? "Provide your birth details for a precise Vedic calculation of your planetary positions."
              : "The stars have aligned. Here is a glimpse into your cosmic blueprint."}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-royal-dark border border-gold-500/10 p-8 md:p-12 rounded-sm shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <User size={14} /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Arjun Sharma"
                      className="w-full bg-royal-black border border-gold-500/20 focus:border-gold-500 p-4 text-gold-100 outline-none transition-all rounded-sm placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <Calendar size={14} /> Date of Birth
                    </label>
                    <input
                      required
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full bg-royal-black border border-gold-500/20 focus:border-gold-500 p-4 text-gold-100 outline-none transition-all rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <Clock size={14} /> Time of Birth
                    </label>
                    <input
                      required
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-royal-black border border-gold-500/20 focus:border-gold-500 p-4 text-gold-100 outline-none transition-all rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gold-400 flex items-center gap-2">
                      <MapPin size={14} /> Place of Birth
                    </label>
                    <input
                      required
                      type="text"
                      name="place"
                      value={formData.place}
                      onChange={handleInputChange}
                      placeholder="e.g. Varanasi, India"
                      className="w-full bg-royal-black border border-gold-500/20 focus:border-gold-500 p-4 text-gold-100 outline-none transition-all rounded-sm placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-5 bg-gold-600 hover:bg-gold-500 text-royal-black font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Calculate My Kundali
                  </button>
                  <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest mt-6">
                    By proceeding, you agree to our terms of cosmic analysis.
                  </p>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              {/* Free Preview Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Ascendant", value: "Leo (Simha)", icon: <Compass className="text-gold-500" /> },
                  { label: "Moon Sign", value: "Scorpio (Vrishchika)", icon: <Star className="text-gold-500" /> },
                  { label: "Nakshatra", value: "Anuradha", icon: <Sparkles className="text-gold-500" /> }
                ].map((item, i) => (
                  <div key={i} className="bg-royal-dark p-6 border border-gold-500/10 rounded-sm text-center space-y-3">
                    <div className="flex justify-center">{item.icon}</div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.label}</p>
                    <p className="text-xl font-serif text-gold-100">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="bg-royal-dark border border-gold-500/10 p-8 md:p-12 rounded-sm space-y-8 relative overflow-hidden">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-gold-100">Initial Personality Analysis</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Arjun, your birth chart reveals a soul with a strong sense of leadership and a deep emotional intensity. With Leo as your ascendant, you possess a natural charisma that draws others toward you. However, your Scorpio moon suggests a private, transformative inner world that few truly see...
                  </p>
                </div>

                {/* Paywall Overlay */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-dark via-royal-dark/90 to-transparent z-10"></div>
                  <div className="space-y-4 blur-[2px] opacity-30 select-none">
                    <h3 className="text-2xl font-serif text-gold-100">Career & Wealth Outlook</h3>
                    <p className="text-gray-400 leading-relaxed">
                      The placement of Jupiter in your 10th house indicates a path of significant professional growth. You are destined for a role that requires both strategic thinking and creative expression. The Mahadasha period starting next year will bring...
                    </p>
                    <h3 className="text-2xl font-serif text-gold-100">Relationship Compatibility</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Venus in the 7th house suggests a partner who is intellectually stimulating and shares your spiritual values. Your karmic lessons in relationships involve...
                    </p>
                  </div>

                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pt-20">
                    <div className="w-16 h-16 bg-gold-600/10 rounded-full flex items-center justify-center mb-6 border border-gold-500/20">
                      <Lock className="text-gold-500" size={24} />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif text-gold-100 mb-4">Unlock Your Full Destiny</h4>
                    <p className="text-gray-400 max-w-md mb-8">
                      Get the complete 40+ page KaalChakra analysis covering career, health, relationships, and personalized remedies.
                    </p>
                    <Link
                      to="/pricing"
                      className="px-10 py-4 bg-gold-600 hover:bg-gold-500 text-royal-black font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-3"
                    >
                      Unlock Full Report <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => setStep(1)}
                  className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gold-400 transition-colors"
                >
                  ← Edit Birth Details
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Kundali;
