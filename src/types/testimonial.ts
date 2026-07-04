export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Desarrollo Web"
    | "Inteligencia Artificial"
    | "Automatización"
    | "Software Empresarial";
  readTime: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}