
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  problem: string;
  deliverables: string[];
  tech: string[];
  useCases: string[];
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content?: string; // Full blog content supporting basic text/markdown structure
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}