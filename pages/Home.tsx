import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Zap, 
  Shield, 
  Maximize,
  Workflow,
  Activity,
  BarChart3,
  Globe
} from 'lucide-react';
import { INDUSTRIES, getIcon } from '../constants';

const FeatureCard = ({ icon: Icon, title, paragraph, colorClass }: { icon: any, title: string, paragraph: string, colorClass: string }) => (
  <div className="perspective-1000 group">
    <div className="rotate-3d p-10 rounded-[40px] border border-slate-200/60 bg-white hover:border-brand-blue/30 hover:shadow-[0_30px_60px_-15px_rgba(0,123,213,0.15)] transition-all duration-500">
      <div className="flex flex-col items-center text-center">
        <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 ${colorClass} group-hover:scale-110 transition-transform duration-500 shadow-sm mb-8`}>
          <Icon strokeWidth={2.5} className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-black text-slate-900 tracking-tight mb-4">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed font-light">{paragraph}</p>
        <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="h-1 w-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Immersive Centrally Weighted Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center immersive-navy-gradient text-white pt-20">
        {/* Animated Background Elements */}
        <div className="floating-orb w-[600px] h-[600px] bg-brand-blue top-[-100px] left-1/2 -translate-x-1/2 opacity-20"></div>
        <div className="floating-orb w-[400px] h-[400px] bg-brand-green bottom-[-50px] right-[-100px] opacity-10"></div>
        <div className="absolute inset-0 grid-bg-subtle opacity-10"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 text-center">
          <div className="animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center space-x-2 bg-white/5 text-brand-green px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 border border-white/10 shadow-xl backdrop-blur-md">
              <Zap className="w-4 h-4 animate-pulse" />
              <span>Next-Generation Intelligence Systems</span>
            </div>
            
            <h1 className="text-6xl md:text-[6.5rem] font-black leading-[0.9] mb-12 tracking-tighter">
              Engineering <br />
              <span className="accent-gradient-text">Absolute</span> Performance.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
              BizUpreach architects high-integrity digital infrastructure. We replace legacy friction with scalable intelligence for global enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Link
                to="/contact"
                className="gradient-border-btn px-14 py-7 rounded-full font-black text-xl flex items-center justify-center transition-all min-w-[300px]"
              >
                Start Building
                <ArrowRight className="ml-3 w-6 h-6 text-brand-green" />
              </Link>
              <Link
                to="/services"
                className="secondary-outline-btn px-14 py-7 rounded-full font-black text-xl flex items-center justify-center transition-all text-white min-w-[300px]"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
            <div className="w-0.5 h-16 bg-gradient-to-b from-brand-green to-transparent mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Strategic Framework with Symmetric Cards */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32 max-w-3xl mx-auto">
            <p className="text-brand-blue font-black uppercase tracking-[0.4em] text-[10px] mb-6">Execution Standard</p>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8">Strategic Depth.</h2>
            <p className="text-slate-500 font-light text-xl leading-relaxed">We move beyond generic solutions to deliver domain-specific technical architecture tailored for high-stakes environments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Maximize} 
              title="Intelligent Architecture" 
              colorClass="text-brand-blue"
              paragraph="Deeply engineered backends that prioritize zero-latency and absolute vertical scalability for enterprise loads." 
            />
            <FeatureCard 
              icon={BarChart3} 
              title="Decision Engines" 
              colorClass="text-brand-green"
              paragraph="Proprietary models that transform raw noise into proactive executive instruments for real-time action." 
            />
            <FeatureCard 
              icon={Shield} 
              title="Reliability Protocols" 
              colorClass="text-brand-blue"
              paragraph="Security-first methodologies integrated into the core logic to ensure total integrity of high-stakes systems." 
            />
          </div>
        </div>
      </section>

      {/* Symmetric Performance Dark Section */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent"></div>
        <div className="absolute inset-0 grid-bg-subtle opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24 max-w-4xl mx-auto">Scale Without <span className="text-brand-green">Friction.</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
            {[
              { icon: Workflow, title: "Autonomous Workflows", desc: "Removing human bottlenecks with persistent intelligence layers that operate around the clock." },
              { icon: Cpu, title: "Custom LLM Logic", desc: "Training private models on your unique business intelligence to deliver context-aware automation." },
              { icon: Activity, title: "Precision Analytics", desc: "Real-time visibility into every critical system node, providing an unprecedented level of operational control." }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[30px] flex items-center justify-center text-brand-blue group-hover:text-brand-green transition-colors duration-500 mb-8 shadow-2xl">
                  <item.icon strokeWidth={1.5} className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-5 tracking-tight">{item.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed text-base max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectoring - Centered Grid */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
             <p className="text-brand-blue font-black uppercase tracking-[0.4em] text-[10px] mb-6">Global Footprint</p>
             <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Industries Transformed.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {INDUSTRIES.map((industry) => (
              <div key={industry.name} className="relative p-12 rounded-[50px] bg-white border border-slate-200 hover:border-brand-blue/30 hover:shadow-2xl transition-all duration-700 group">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 flex items-center justify-center rounded-[24px] bg-slate-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm mb-10">
                    {getIcon(industry.icon)}
                  </div>
                  <h4 className="font-bold text-slate-900 text-2xl tracking-tight mb-6">{industry.name}</h4>
                  <p className="text-base text-slate-500 leading-relaxed font-light flex-grow">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Final CTA */}
      <section className="py-48 bg-brand-matteBlack text-white relative overflow-hidden">
        <div className="floating-orb w-[800px] h-[800px] bg-brand-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-6xl md:text-[7rem] font-black mb-16 tracking-tighter leading-tight">
            Ready for <br />
            <span className="accent-gradient-text">Peak Intelligence?</span>
          </h2>
          <Link
            to="/contact"
            className="gradient-border-btn px-20 py-10 rounded-full font-black text-3xl inline-flex items-center group transition-all hover:scale-110 shadow-2xl shadow-brand-green/20"
          >
            Talk to a Specialist
            <ArrowRight className="ml-5 w-10 h-10 text-brand-green group-hover:translate-x-4 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;