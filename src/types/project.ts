export interface Project {
  id: number;
  name: string;
  client?: string | null;
  category: string;
  description: string;
  technologies: string[];
  image?: string | null;
  url?: string | null;
  featured?: boolean;
  year?: string | null;
  metric_label?: string | null;
  metric_value?: string | null;
  created_at?: string;
  updated_at?: string;
}