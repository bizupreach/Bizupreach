
import React from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../constants';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';

const Insights: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Typographic Header */}
      <section className="py-24 bg-brand-matteBlack text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-subtle opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-brand-green font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Strategic Thinking</p>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">Insights.</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Deep-dives into product architecture, data modeling, and governance technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2 space-y-24">
              {INSIGHTS.map((post) => (
                <article key={post.id} className="group border-b border-slate-100 pb-20 last:border-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-green px-3 py-1 bg-slate-50 rounded border border-slate-100">
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <Link to={`/insights/${post.id}`}>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 group-hover:text-brand-blue transition-colors leading-tight tracking-tight cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-2xl font-light">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/insights/${post.id}`}
                    className="text-xs font-bold flex items-center text-slate-900 group-hover:text-brand-green transition-all uppercase tracking-widest"
                  >
                    Read Analysis <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="lg:col-span-1 space-y-12">
              {/* Feature Box: Newsletter */}
              <div className="bg-slate-50 p-10 rounded-[48px] border border-slate-100">
                <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Intelligence Stream</h4>
                <p className="text-slate-500 text-sm mb-8 font-light">Join 5,000+ executives receiving weekly intelligence on product scaling and AI architecture.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Work email" 
                    className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-blue focus:outline-none text-sm"
                  />
                  <button className="w-full bg-brand-matteBlack text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all text-sm uppercase tracking-widest">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Feature Box: Topics */}
              <div className="p-10 border border-slate-100 rounded-[48px]">
                <h4 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Popular Streams</h4>
                <div className="flex flex-wrap gap-2">
                  {['AI Strategy', 'Architecture', 'Infrastructure', 'Visualizations'].map(cat => (
                    <button key={cat} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all uppercase tracking-widest">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;