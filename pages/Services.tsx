
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { CheckCircle2, Zap, Target, Layers } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Typographic Header */}
      <section className="py-32 bg-brand-matteBlack text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-green font-bold uppercase tracking-[0.4em] text-xs mb-6">The Capability Suite</p>
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[1]">Architecting <br /> Intelligence.</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            BizUpreach deploys high-precision engineering teams to solve high-friction operational challenges.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div>
                  <div className="inline-flex p-4 bg-slate-50 rounded-2xl text-brand-blue mb-10 border border-slate-100">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">{service.description}</p>
                  
                  <div className="mb-10 p-8 bg-slate-50 border-l-4 border-brand-green rounded-r-3xl">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green mb-3">Target Problem</p>
                    <p className="text-slate-800 font-medium leading-relaxed italic">"{service.problem}"</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.deliverables.map(item => (
                      <div key={item} className="flex items-center text-slate-600 font-bold text-xs uppercase tracking-widest group">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 pt-10 lg:pt-0">
                  <div className="p-10 rounded-[40px] border border-slate-200/60 bg-gradient-to-br from-white to-slate-50 hover:bg-white hover:border-brand-blue/30 transition-all duration-500 group">
                     <h3 className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-8">Strategic Use-Cases</h3>
                     <div className="space-y-4">
                        {service.useCases.map(uc => (
                          <div key={uc} className="p-4 bg-slate-50 rounded-xl text-slate-600 text-xs font-medium border border-transparent group-hover:border-slate-100 transition-colors">
                             {uc}
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="flex flex-wrap gap-2 p-8 bg-slate-50/50 rounded-[32px] border border-slate-100">
                    {service.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-brand-matteBlack text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Block: Standards */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 rounded-[40px] bg-white border border-slate-200/60 hover:border-brand-green/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
                 <div className="flex items-center space-x-4 mb-6">
                    <Zap className="text-brand-green w-6 h-6" strokeWidth={2} />
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Zero Friction</h4>
                 </div>
                 <p className="text-sm text-slate-500 font-light leading-relaxed">Engineered to eliminate bottleneck operations from the ground up.</p>
              </div>
              <div className="p-10 rounded-[40px] bg-white border border-slate-200/60 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
                 <div className="flex items-center space-x-4 mb-6">
                    <Target className="text-brand-blue w-6 h-6" strokeWidth={2} />
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Outcome Based</h4>
                 </div>
                 <p className="text-sm text-slate-500 font-light leading-relaxed">Performance metrics that translate directly into your bottom-line growth.</p>
              </div>
              <div className="p-10 rounded-[40px] bg-white border border-slate-200/60 hover:border-brand-green/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group">
                 <div className="flex items-center space-x-4 mb-6">
                    <Layers className="text-brand-green w-6 h-6" strokeWidth={2} />
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Modular Design</h4>
                 </div>
                 <p className="text-sm text-slate-500 font-light leading-relaxed">Architectures that allow for rapid iteration without breaking core logic.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
