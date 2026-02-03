import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo, BrandWordmark } from './Branding';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-matteBlack text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-8 group">
              <BrandLogo className="w-8 h-8" light />
              <BrandWordmark light className="text-xl" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-light">
              Engineering technology and intelligence systems for real-world impact across global governance and enterprise.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Capabilities</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-brand-green transition-colors">Product Engineering</Link></li>
              <li><Link to="/services" className="hover:text-brand-green transition-colors">BI Dashboards</Link></li>
              <li><Link to="/services" className="hover:text-brand-green transition-colors">Custom AI</Link></li>
              <li><Link to="/services" className="hover:text-brand-green transition-colors">XR Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-brand-green transition-colors">Philosophy</Link></li>
              <li><Link to="/insights" className="hover:text-brand-green transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Connect</h4>
            <div className="space-y-4 text-sm">
              <p className="font-medium text-slate-300">solutions@bizupreach.com</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <p>© {new Date().getFullYear()} BizUpreach. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Architecture • Intelligence • Performance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;