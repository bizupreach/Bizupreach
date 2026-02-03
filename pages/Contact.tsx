
import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight, Zap, Globe, Mail, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center immersive-navy-gradient px-4">
        <div className="max-w-md w-full text-center space-y-10 glass-card p-16 rounded-[50px] animate-in zoom-in duration-700">
          <div className="flex justify-center">
            <div className="w-28 h-28 bg-brand-green/20 rounded-[35px] flex items-center justify-center border border-brand-green/30 shadow-[0_0_50px_rgba(16,177,0,0.2)]">
               <CheckCircle2 className="w-14 h-14 text-brand-green" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Intelligence Received.</h1>
          <p className="text-slate-400 leading-relaxed font-light">
            Our strategic solutions team has received your inquiry. We'll analyze your requirements and reach out within 12 business hours.
          </p>
          <button 
            onClick={() => setFormState('idle')}
            className="w-full bg-brand-green text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-green/80 transition-all shadow-2xl shadow-brand-green/20"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Immersive Header */}
      <section className="py-32 immersive-navy-gradient text-white relative overflow-hidden">
        <div className="floating-orb w-[600px] h-[600px] bg-brand-green top-[-200px] left-[-100px] opacity-10"></div>
        <div className="absolute inset-0 grid-bg-subtle opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px] mb-8">Let's Build</p>
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">
            Start a <br /><span className="accent-gradient-text">Conversation.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our engineering architects to discuss high-stakes systems and intelligence infrastructure.
          </p>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <div className="space-y-20">
                <div className="perspective-1000 group">
                   <div className="rotate-3d space-y-4">
                      <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Channel One</p>
                      <p className="text-3xl text-slate-900 font-black tracking-tighter hover:text-brand-blue transition-colors cursor-pointer">
                        solutions@bizupreach.com
                      </p>
                   </div>
                </div>

                <div className="space-y-8">
                   {[
                     { icon: Mail, title: "Deep Analysis", desc: "Every inquiry is reviewed by a principal architect." },
                     { icon: ShieldCheck, title: "Data Privacy", desc: "Non-disclosure protocols integrated into initial consults." },
                     { icon: Zap, title: "Rapid Response", desc: "Strategic feedback provided within 12 hours." }
                   ].map((item, i) => (
                     <div key={i} className="flex space-x-6 items-start group">
                        <div className="w-12 h-12 flex-shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                           <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                           <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="p-12 glass-card bg-slate-50 rounded-[50px] border border-slate-100 relative overflow-hidden shadow-2xl shadow-slate-200/50">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl"></div>
                   <h4 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Global Operations</h4>
                   <p className="text-slate-500 font-light leading-relaxed">
                     Our multidisciplinary team operates across multiple time zones to ensure continuous delivery for our global partners.
                   </p>
                </div>
              </div>
            </div>

            <div className="perspective-1000">
               <div className="rotate-3d bg-white p-12 md:p-16 rounded-[60px] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
                 <form onSubmit={handleSubmit} className="space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-3">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Identity</label>
                       <input 
                         required
                         type="text" 
                         placeholder="Name" 
                         className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all placeholder:text-slate-300 font-medium"
                       />
                     </div>
                     <div className="space-y-3">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Enterprise</label>
                       <input 
                         required
                         type="text" 
                         placeholder="Organization" 
                         className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all placeholder:text-slate-300 font-medium"
                       />
                     </div>
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Stream</label>
                     <input 
                       required
                       type="email" 
                       placeholder="work@email.com" 
                       className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all placeholder:text-slate-300 font-medium"
                     />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Architectural Focus</label>
                     <select className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all appearance-none cursor-pointer text-slate-700 font-medium">
                       <option>Scalable Platforms</option>
                       <option>Custom AI Logic</option>
                       <option>Intelligence Dashboards</option>
                       <option>Immersive Tech (XR)</option>
                     </select>
                   </div>
                   <div className="space-y-3">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Strategic Brief</label>
                     <textarea 
                       rows={4}
                       placeholder="Describe your technical challenges..." 
                       className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all resize-none placeholder:text-slate-300 font-medium"
                     ></textarea>
                   </div>
                   <button 
                     disabled={formState === 'submitting'}
                     className={`w-full py-6 rounded-3xl font-black text-white transition-all flex items-center justify-center space-x-4 text-xl shadow-2xl ${
                       formState === 'submitting' ? 'bg-brand-blue/50 cursor-not-allowed animate-pulse' : 'bg-brand-matteBlack hover:bg-brand-blue shadow-brand-blue/10 group'
                     }`}
                   >
                     {formState === 'submitting' ? (
                       <span>Processing Intel...</span>
                     ) : (
                       <>
                         <span className="uppercase tracking-widest text-sm">Initialize Partnership</span>
                         <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                       </>
                     )}
                   </button>
                 </form>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
