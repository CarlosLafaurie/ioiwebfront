export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  image?: string;

  year: string;

  metric?: {
    label: string;
    value: string;
  };
}