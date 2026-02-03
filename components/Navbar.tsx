import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo, BrandWordmark } from './Branding';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Capabilities', path: '/services' },
    { name: 'Philosophy', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-brand-navy border-b border-white/5 shadow-2xl ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 group">
            <Link to="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <BrandLogo className="w-10 h-10 transform group-hover:scale-110 transition-transform duration-500 relative z-10" light />
              </div>
              <BrandWordmark light className="text-2xl" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${
                  location.pathname === link.path ? 'text-brand-green' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand-green transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center group bg-white/5 border border-white/10 text-white hover:bg-brand-green hover:text-white hover:border-brand-green shadow-xl"
            >
              Build With Us
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-xl"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy text-white border-t border-white/5 absolute w-full left-0 h-screen animate-in fade-in slide-in-from-top-5 duration-300 backdrop-blur-3xl">
          <div className="px-8 py-16 space-y-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-4xl font-black tracking-tighter hover:text-brand-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full border border-brand-green text-brand-green px-8 py-6 rounded-3xl text-center font-black text-xl uppercase tracking-widest"
            >
              Start Conversation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;