
import React from 'react';
import { Target, Search, Workflow, Code, Zap, Shield, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Narrative Header */}
      <section className="py-32 bg-brand-matteBlack text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-brand-green font-bold uppercase tracking-[0.4em] text-[10px] mb-8">The Philosophy</p>
            <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[1]">
              Execution <br />
              <span className="accent-gradient-text">Over Hype.</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed font-light">
              BizUpreach was founded to bridge the gap between technical intuition and enterprise scale. We replace legacy constraints with high-performance digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Block: Strategy */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Engineering-Led Strategy.</h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                We are a multidisciplinary team of builders. Our philosophy is simple: deep technical excellence must be paired with clear domain logic. We don't just write code; we architect solutions that solve real-world friction.
              </p>
              <div className="space-y-4">
                 {[
                   "Systems Architecture Focus",
                   "Rapid Prototyping Capability",
                   "Data Intelligence Engines",
                   "Performance Attribution Modeling"
                 ].map(item => (
                   <div key={item} className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-700">
                      <ArrowRight className="w-4 h-4 text-brand-blue mr-3" />
                      {item}
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-8 rounded-[32px] bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 hover:border-brand-blue/30 transition-all duration-500 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <Workflow className="text-brand-blue w-6 h-6" strokeWidth={2} />
                    <h4 className="font-bold text-slate-900 tracking-tight">Systems Thinking</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Every solution is designed within a larger architectural context.</p>
               </div>
               <div className="p-8 rounded-[32px] bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 hover:border-brand-green/30 transition-all duration-500 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <Code className="text-brand-green w-6 h-6" strokeWidth={2} />
                    <h4 className="font-bold text-slate-900 tracking-tight">Clean Builds</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Prioritizing maintainability and zero technical debt architecture.</p>
               </div>
               <div className="p-8 rounded-[32px] bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 hover:border-brand-blue/30 transition-all duration-500 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <Search className="text-brand-blue w-6 h-6" strokeWidth={2} />
                    <h4 className="font-bold text-slate-900 tracking-tight">Intelligence First</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Integrating deep data modeling into core product workflows.</p>
               </div>
               <div className="p-8 rounded-[32px] bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 hover:border-brand-green/30 transition-all duration-500 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <Target className="text-brand-green w-6 h-6" strokeWidth={2} />
                    <h4 className="font-bold text-slate-900 tracking-tight">Outcome Focused</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">Solutions measured by their real-world operational performance.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-32 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Core Standards.</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">Non-negotiable principles that drive our engineering culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Shield />, 
                title: 'Radical Integrity', 
                desc: 'We are honest about technical limitations and data realities. We provide solutions that last years, not weeks.' 
              },
              { 
                icon: <Zap />, 
                title: 'High-Velocity Iteration', 
                desc: 'We move fast but never break the core. Agile development cycles focused on rapid feedback and continuous scaling.' 
              },
              { 
                icon: <Target />, 
                title: 'Domain Immersion', 
                desc: 'We take the time to understand your business logic before the first line of code is written.' 
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-brand-green/30 transition-all duration-500 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-8 text-brand-green">
                    {React.cloneElement(value.icon as React.ReactElement<any>, { strokeWidth: 2 })}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{value.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
