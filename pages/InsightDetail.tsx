
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { INSIGHTS } from '../constants';
import { ChevronLeft, Clock, User, Share2, ArrowRight } from 'lucide-react';

const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = INSIGHTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-6">Analysis Not Found</h1>
          <p className="text-slate-500 mb-8 font-light">The intelligence report you are looking for has been moved or archived.</p>
          <Link to="/insights" className="text-brand-blue font-bold flex items-center justify-center hover:underline">
            <ChevronLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="py-24 bg-brand-matteBlack text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-subtle opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/insights" 
            className="inline-flex items-center text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-10 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          <div className="flex items-center space-x-6 mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue px-4 py-1 bg-white/5 border border-white/10 rounded">
              {post.category}
            </span>
            <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5 mr-2 text-brand-green" />
              {post.date}
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-green">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white">{post.author}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">BizUpreach Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-slate prose-lg max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
              prose-p:text-slate-600 prose-p:font-light prose-p:leading-relaxed
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-ul:list-disc prose-li:text-slate-600 prose-li:font-light
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          <div className="mt-24 pt-12 border-t border-slate-100 flex justify-between items-center">
            <button className="flex items-center text-xs font-black uppercase tracking-widest text-slate-400 hover:text-brand-blue transition-colors">
              <Share2 className="w-4 h-4 mr-3" />
              Share Analysis
            </button>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-all flex items-center"
            >
              Consult with our Team
              <ArrowRight className="ml-3 w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Recommended Reading */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-12 tracking-tight">Further Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.filter(p => p.id !== post.id).slice(0, 3).map((related) => (
              <Link 
                key={related.id} 
                to={`/insights/${related.id}`}
                className="p-10 rounded-[40px] bg-white border border-slate-200/60 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
              >
                <div className="flex items-center space-x-3 mb-6">
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{related.category}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-brand-blue transition-colors">
                  {related.title}
                </h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-2">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightDetail;