import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import Mandala from '../components/Mandala';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden py-24 px-6">
      <Mandala className="absolute top-0 right-0 text-gold-500" size={600} opacity={0.03} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em]">Connect With Us</h3>
          <h1 className="text-4xl md:text-6xl font-serif text-gold-100">Reach Out to the Stars</h1>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Have questions about your analysis or our services? Our cosmic guides are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-gold-100">Get in Touch</h2>
              <p className="text-gray-400 leading-relaxed">
                Whether you're seeking guidance on a specific report or want to learn more about Vedic astrology, we're always happy to connect.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-gold-600/5 border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-royal-black transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-400">Email Us</p>
                  <p className="text-gold-100 text-lg">contact@kaalchakra.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-gold-600/5 border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-royal-black transition-all duration-500">
                  <MessageSquare size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-400">WhatsApp</p>
                  <p className="text-gold-100 text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-sm bg-gold-600/5 border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-royal-black transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-400">Our Sanctuary</p>
                  <p className="text-gold-100 text-lg">Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gold-500/10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Follow the Journey</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-300 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-300 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-300 transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-royal-dark border border-gold-500/10 p-8 md:p-12 rounded-sm shadow-2xl"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gold-400">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Arjun Sharma"
                  className="w-full bg-royal-black border border-gold-500/20 focus:border-gold-500 p-4 text-gold-100 outline-none transition-all rounded-sm placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gold-400">Email Address</label>
                <input
                  type="email"
                  placeholder="arjun@example.com"
                  className="w-full bg-royal-black border border-gold-500/20 focus:border-gold-500 p-4 text-gold-100 outline-none transition-all rounded-sm placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gold-400">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we assist you on your journey?"
                  className="w-full bg-royal-black border border-gold-500/20 focus:border-gold-500 p-4 text-gold-100 outline-none transition-all rounded-sm placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-5 bg-gold-600 hover:bg-gold-500 text-royal-black font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
