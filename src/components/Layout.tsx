import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, Moon, Sun, Star, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Kundali', path: '/kundali' },
    { name: 'Horoscope', path: '/horoscope' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-royal-black selection:bg-gold-500/30 selection:text-gold-200">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-royal-black/80 backdrop-blur-md border-b border-gold-500/10">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 transition-colors duration-500">
              <Compass className="w-6 h-6 text-gold-400 group-hover:rotate-45 transition-transform duration-700" />
            </div>
            <span className="text-xl font-serif tracking-widest text-gold-100 uppercase">KaalChakra</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors duration-300",
                  location.pathname === link.path ? "text-gold-400" : "text-gray-400 hover:text-gold-200"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/kundali" 
              className="px-6 py-2 bg-gold-600 hover:bg-gold-500 text-royal-black text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 transform hover:scale-105"
            >
              Get Kundali
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gold-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-royal-dark border-b border-gold-500/10 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-lg uppercase tracking-widest",
                  location.pathname === link.path ? "text-gold-400" : "text-gray-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/kundali" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-3 bg-gold-600 text-royal-black text-center font-bold uppercase tracking-widest rounded-sm"
            >
              Get Kundali
            </Link>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-royal-dark border-t border-gold-500/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Compass className="w-8 h-8 text-gold-400" />
              <span className="text-2xl font-serif tracking-widest text-gold-100 uppercase">KaalChakra Jyotish</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Ancient Vedic wisdom for the modern soul. Discover your cosmic blueprint and navigate life's journey with clarity and purpose.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-300 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-300 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400 hover:border-gold-500 hover:text-gold-300 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold-200 font-serif uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/kundali" className="hover:text-gold-400 transition-colors">Generate Kundali</Link></li>
              <li><Link to="/horoscope" className="hover:text-gold-400 transition-colors">Daily Horoscope</Link></li>
              <li><Link to="/pricing" className="hover:text-gold-400 transition-colors">Premium Analysis</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">Our Philosophy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-200 font-serif uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>contact@kaalchakra.com</li>
              <li>+91 98765 43210</li>
              <li>Varanasi, Uttar Pradesh, India</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gold-500/5 text-center text-xs text-gray-500 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} KaalChakra Jyotish. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
