import React from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Star, Sparkles, Compass, Heart, Briefcase, Zap } from 'lucide-react';
import Mandala from '../components/Mandala';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-24 px-6">
      <Mandala className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500" size={1000} opacity={0.03} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em]">The Path to Clarity</h3>
          <h1 className="text-4xl md:text-6xl font-serif text-gold-100">Premium Analysis</h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Invest in your self-discovery. A one-time payment for a lifetime of cosmic guidance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-royal-dark border border-gold-500/20 rounded-sm overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left Side: Features */}
            <div className="md:col-span-3 p-8 md:p-12 space-y-10">
              <div className="space-y-2">
                <h2 className="text-2xl font-serif text-gold-100 uppercase tracking-widest">Complete KaalChakra Kundali Analysis</h2>
                <p className="text-gray-500 text-sm">A deep dive into your soul's blueprint.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Compass size={18} />, text: "40+ Page Detailed Report" },
                  { icon: <Briefcase size={18} />, text: "Career & Wealth Roadmap" },
                  { icon: <Heart size={18} />, text: "Relationship Compatibility" },
                  { icon: <Zap size={18} />, text: "Dasha & Transit Periods" },
                  { icon: <ShieldCheck size={18} />, text: "Personalized Remedies" },
                  { icon: <Sparkles size={18} />, text: "Gemstone Recommendations" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="text-gold-500">{item.icon}</div>
                    <span className="text-sm tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gold-500/10">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gold-400">
                  <Star size={14} /> Trusted by 10,000+ Seekers
                </div>
              </div>
            </div>

            {/* Right Side: Pricing Card */}
            <div className="md:col-span-2 bg-gold-600/5 border-l border-gold-500/10 p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-8">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-500">One-Time Payment</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-serif text-gold-100">₹</span>
                  <span className="text-6xl font-serif text-gold-100">399</span>
                </div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Lifetime Access</p>
              </div>

              <button className="w-full py-5 bg-gold-600 hover:bg-gold-500 text-royal-black font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 transform hover:scale-105 shadow-xl shadow-gold-500/20">
                Unlock Full Report
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-gold-500" /> Secure Checkout
                </div>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-relaxed">
                  Instant PDF Download <br /> 100% Satisfaction Guarantee
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Instant Access", desc: "Download your report immediately after payment." },
            { title: "Expert Verified", desc: "Calculations based on authentic Vedic principles." },
            { title: "Private", desc: "Your birth details are never shared with third parties." }
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <h4 className="text-gold-200 font-serif uppercase tracking-widest text-sm">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
