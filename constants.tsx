
import React from 'react';
import { 
  Code2, 
  BarChart3, 
  Cpu, 
  Layers, 
  Target,
  Globe, 
  Building2, 
  Zap,
  TrendingUp,
  Activity,
  ShieldCheck,
  Stethoscope,
  Cloud,
  ShoppingCart,
  Truck,
  Megaphone
} from 'lucide-react';
import { Service, Insight, Industry } from './types';

export const SERVICES: Service[] = [
  {
    id: 'product-development',
    title: 'Product Development',
    description: 'Engineering scalable web platforms and high-performance applications designed for enterprise-grade security.',
    icon: 'Code2',
    problem: 'Off-the-shelf platforms lack the architectural flexibility required for unique business workflows and rapid user scaling.',
    deliverables: ['Custom SaaS Platforms', 'Enterprise Web Apps', 'B2B/B2C Marketplaces', 'API-First Architecture'],
    tech: ['Next.js', 'Go', 'PostgreSQL', 'Cloud Native (AWS/GCP)'],
    useCases: ['High-traffic fintech portals', 'Supply chain management systems', 'Multi-tenant enterprise platforms']
  },
  {
    id: 'bi-dashboards',
    title: 'Business Intelligence',
    description: 'Transforming siloed data into real-time visual intelligence for executive decision-making and operational clarity.',
    icon: 'BarChart3',
    problem: 'Decision-makers are often blind to real-time performance due to fragmented data ecosystems and static reporting.',
    deliverables: ['Real-time KPI Monitoring', 'Predictive Trend Analysis', 'Custom Data Visualization', 'Automated Executive Reports'],
    tech: ['Custom D3.js', 'Power BI', 'Snowflake', 'Looker'],
    useCases: ['Operational efficiency tracking', 'Revenue attribution modeling', 'Customer lifecycle analytics']
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Solutions',
    description: 'Integrating advanced machine learning and LLMs to automate complex processes and optimize performance.',
    icon: 'Cpu',
    problem: 'Generic AI tools often fail to address domain-specific business logic, leading to inefficient automation and low ROI.',
    deliverables: ['Proprietary LLM Integration', 'Automation Workflows', 'Pattern Recognition Engines', 'Intelligent Document Processing'],
    tech: ['PyTorch', 'Vector Databases', 'Transformers', 'MLOps'],
    useCases: ['Automated customer support routing', 'Demand forecasting models', 'Risk assessment automation']
  },
  {
    id: 'extended-reality',
    title: 'Extended Reality (XR)',
    description: 'Leveraging immersive AR/VR technologies for high-impact product demonstrations and industrial training.',
    icon: 'Layers',
    problem: 'Traditional media fails to convey the scale and complexity of high-value physical products or complex training environments.',
    deliverables: ['AR Product Visualizers', 'VR Workforce Training', 'Interactive Digital Twins', 'Spatial UI/UX Design'],
    tech: ['Unity', 'OpenXR', 'WebXR', 'Spatial Computing'],
    useCases: ['Industrial equipment simulations', 'Interactive real estate walkthroughs', 'Immersive brand experiences']
  },
  {
    id: 'marketing-advertising',
    title: 'Growth & Analytics',
    description: 'Data-led digital strategies focused on performance, conversion optimization, and measurable revenue impact.',
    icon: 'Target',
    problem: 'Marketing budgets are often wasted on vanity metrics that do not translate to bottom-line growth.',
    deliverables: ['Performance Campaigns', 'Growth Funnel Optimization', 'Advanced Attribution Modeling', 'Customer Acquisition Systems'],
    tech: ['Measurement Protocols', 'Programmatic Tech', 'CRM Integration'],
    useCases: ['Product launch acceleration', 'LTV-focused acquisition', 'Churn prediction & retention']
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'zero-latency-enterprise',
    title: 'Architecting for Zero-Latency Enterprise Systems',
    category: 'Architecture',
    date: 'Oct 12, 2024',
    author: 'Engineering Team',
    excerpt: 'How we leverage Go and cloud-native infrastructure to build high-performance backends for fintech applications.',
    content: `
      <h2>The Challenge of Real-Time Enterprise Workloads</h2>
      <p>In the modern digital economy, latency is the silent killer of enterprise value. Whether it is a high-frequency trading platform or a real-time logistics dashboard, the speed at which data travels from the database to the executive's screen determines the agility of the entire organization.</p>
      
      <h3>Why Traditional Architectures Fail</h3>
      <p>Legacy monolithic systems often struggle with "tail latency"—the rare but impactful slow responses that occur under load. BizUpreach addresses this by implementing a cloud-native microservices architecture using the Go programming language, known for its superior concurrency models and low memory overhead.</p>
      
      <h3>Our Technical Approach</h3>
      <ul>
        <li><strong>Go-powered Backends:</strong> Utilizing goroutines for efficient parallel processing.</li>
        <li><strong>Event-Driven Design:</strong> Implementing Kafka for asynchronous, non-blocking data streams.</li>
        <li><strong>Edge Caching:</strong> Strategic deployment of Redis layers to serve frequent requests in sub-millisecond timeframes.</li>
      </ul>
      
      <h3>Real-World Impact</h3>
      <p>For a recent fintech partner, this transition reduced peak latency from 450ms to under 15ms, enabling real-time fraud detection systems that were previously impossible.</p>
    `
  },
  {
    id: 'decision-intelligence-governance',
    title: 'The Future of Decision Intelligence in Governance',
    category: 'AI Strategy',
    date: 'Nov 04, 2024',
    author: 'Strategy Lead',
    excerpt: 'Bridging the gap between raw data and executive action through custom-trained machine learning models.',
    content: `
      <h2>Data is Abundant, Intelligence is Rare</h2>
      <p>Public policy and governance institutions often sit on mountains of data—survey results, media monitoring logs, and census statistics—yet struggle to make timely, evidence-based decisions. Decision Intelligence (DI) is the discipline of turning that data into a coherent roadmap for action.</p>
      
      <h3>Sentiment Analysis at Scale</h3>
      <p>BizUpreach specializes in custom LLM (Large Language Model) integrations that go beyond generic sentiment. We train models on domain-specific policy language to detect subtle shifts in public perception across diverse media landscapes.</p>
      
      <h3>Predictive Policy Modeling</h3>
      <p>By applying regression analysis to historical governance data, we help leaders simulate the outcomes of policy changes before they are implemented, reducing political and economic risk.</p>
      
      <h3>Conclusion</h3>
      <p>The next decade of governance will be defined by those who can process intelligence faster than their environment changes. BizUpreach is building the tools to make that possible.</p>
    `
  },
  {
    id: 'd3-vs-powerbi',
    title: 'Visualizing Complexity: Custom D3.js vs PowerBI',
    category: 'Visualizations',
    date: 'Dec 15, 2024',
    author: 'Data Visualization Specialist',
    excerpt: 'When to choose custom SVG-based visualizations over commercial BI tools for enterprise dashboards.',
    content: `
      <h2>The BI Tool Dilemma</h2>
      <p>Choosing between a commercial tool like PowerBI and a custom-built solution using D3.js is a fundamental decision for any data-driven enterprise. Both have their merits, but the choice depends entirely on the complexity of the narrative you need to tell.</p>
      
      <h3>The Case for PowerBI</h3>
      <p>Commercial BI tools are excellent for standard KPIs, financial reporting, and rapid prototyping. They offer a "good enough" experience for 80% of business use cases with minimal development time.</p>
      
      <h3>The Case for D3.js (The BizUpreach Preference)</h3>
      <p>When you are dealing with multi-dimensional relationships, hierarchical data, or non-standard visualizations (like custom Sankey diagrams or geographic heatmaps with proprietary layers), PowerBI hits a wall. D3.js allows for pixel-perfect control and unique interactive experiences that can be embedded directly into custom applications.</p>
      
      <h3>Decision Matrix</h3>
      <ul>
        <li><strong>Use PowerBI if:</strong> You need internal reporting and standard bar/line charts.</li>
        <li><strong>Use D3.js if:</strong> You need customer-facing dashboards that differentiate your product or require high-performance rendering of thousands of data points.</li>
      </ul>
    `
  }
];

export const INDUSTRIES: Industry[] = [
  { name: 'FinTech', icon: 'ShieldCheck', description: 'Secure, high-performance financial systems and transaction intelligence.' },
  { name: 'HealthTech', icon: 'Stethoscope', description: 'Data-driven patient management and intelligent diagnostic support.' },
  { name: 'SaaS & Enterprise', icon: 'Cloud', description: 'Robust cloud architectures for the next generation of digital products.' },
  { name: 'Retail & E-commerce', icon: 'ShoppingCart', description: 'Scalable marketplaces and personalized customer intelligence.' },
  { name: 'Logistics', icon: 'Truck', description: 'Intelligent supply chain monitoring and route optimization.' },
  { name: 'Advertising & Marketing', icon: 'Megaphone', description: 'Performance-driven analytics and intelligent customer acquisition systems.' }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Code2': return <Code2 className="w-6 h-6" />;
    case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
    case 'Cpu': return <Cpu className="w-6 h-6" />;
    case 'Layers': return <Layers className="w-6 h-6" />;
    case 'Target': return <Target className="w-6 h-6" />;
    case 'Globe': return <Globe className="w-6 h-6" />;
    case 'Building2': return <Building2 className="w-6 h-6" />;
    case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
    case 'Activity': return <Activity className="w-6 h-6" />;
    case 'Zap': return <Zap className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
    case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
    case 'Cloud': return <Cloud className="w-5 h-5" />;
    case 'ShoppingCart': return <ShoppingCart className="w-5 h-5" />;
    case 'Truck': return <Truck className="w-5 h-5" />;
    case 'Megaphone': return <Megaphone className="w-5 h-5" />;
    default: return <Code2 className="w-6 h-6" />;
  }
};