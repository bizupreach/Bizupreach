import React from 'react';
import { Mail, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Immersive Header */}
      <section className="py-32 immersive-navy-gradient text-white relative overflow-hidden">
        <div className="floating-orb w-[600px] h-[600px] bg-brand-green top-[-200px] left-[-100px] opacity-10"></div>
        <div className="absolute inset-0 grid-bg-subtle opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px] mb-8">Direct Access</p>
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">
            Start a <br /><span className="accent-gradient-text">Conversation.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Reach out directly to our engineering architects to discuss your technical challenges and intelligence infrastructure.
          </p>
        </div>
      </section>

      <section className="py-40 relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-16">
            <div className="group inline-block">
              <a 
                href="mailto:support@bizupreach.com" 
                className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter hover:text-brand-blue transition-all duration-300 block"
              >
                support@bizupreach.com
              </a>
              <div className="h-1.5 w-0 group-hover:w-full bg-brand-green transition-all duration-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
               {[
                 { icon: Mail, title: "Principal Review", desc: "Every inquiry is assessed by a founding architect." },
                 { icon: ShieldCheck, title: "Data Integrity", desc: "Confidentiality guaranteed through secure channels." },
                 { icon: Zap, title: "Accelerated Response", desc: "Strategic feedback within 12 business hours." }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center group">
                    <div className="w-16 h-16 bg-slate-50 rounded-[28px] flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm mb-6 border border-slate-100">
                       <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="font-black text-slate-900 mb-2 tracking-tight text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="pt-20">
              <div className="p-16 bg-slate-50 rounded-[60px] border border-slate-100 relative overflow-hidden shadow-2xl shadow-slate-200/50">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl"></div>
                 <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Enterprise & Government Solutions</h4>
                 <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                   Our team is specialized in architecting systems that operate at the intersection of complex data modeling and high-stakes governance. We are ready to scale with your organization.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;