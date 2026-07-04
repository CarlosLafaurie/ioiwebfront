import type { Testimonial, BlogPost } from "../types/testimonial";

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "t1",
    quote:
      "Reemplazaron tres herramientas con una sola plataforma que finalmente entiende nuestro proceso. El equipo de IOI piensa como producto, no solo como código.",
    author: "Daniela Restrepo",
    role: "COO",
    company: "Grupo Veridex",
  },
  {
    id: "t2",
    quote:
      "La automatización de WhatsApp absorbió el 80% de las consultas repetitivas y liberó al equipo comercial para cerrar negocios. ROI en menos de un trimestre.",
    author: "Andrés Mendoza",
    role: "Director Comercial",
    company: "Distribuciones Caribe",
  },
  {
    id: "t3",
    quote:
      "Trabajan con la disciplina de una empresa internacional. Documentación clara, entregas predecibles y arquitectura que aguanta crecimiento real.",
    author: "Laura Beltrán",
    role: "CTO",
    company: "Finova Capital",
  },
  {
    id: "t4",
    quote:
      "Lo que entregaron supera a soluciones de proveedores tres veces más caros. Cada decisión técnica está justificada en negocio.",
    author: "Mauricio Ortiz",
    role: "Gerente de Tecnología",
    company: "LogiAndes",
  },
] as const;

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    id: "b1",
    title: "Por qué tu empresa necesita software a medida en 2026",
    excerpt:
      "El SaaS genérico llega a un techo. Analizamos cuándo conviene construir y cómo medir el retorno frente a herramientas estándar.",
    category: "Software Empresarial",
    readTime: "6 min",
    date: "Mar 12, 2026",
  },
  {
    id: "b2",
    title: "Agentes IA en operaciones: del piloto al impacto medible",
    excerpt:
      "Una guía pragmática para llevar agentes LLM desde prototipos vistosos hasta procesos productivos con KPIs reales.",
    category: "Inteligencia Artificial",
    readTime: "8 min",
    date: "Feb 28, 2026",
  },
  {
    id: "b3",
    title: "Arquitecturas modernas para apps web rápidas y mantenibles",
    excerpt:
      "Cómo pensamos el frontend en IOI: límites claros, contratos de tipos y rendimiento medido desde el primer commit.",
    category: "Desarrollo Web",
    readTime: "5 min",
    date: "Feb 14, 2026",
  },
  {
    id: "b4",
    title: "Automatización de WhatsApp sin fricción para tu equipo",
    excerpt:
      "Lecciones reales tras desplegar flujos conversacionales en empresas con miles de conversaciones diarias.",
    category: "Automatización",
    readTime: "4 min",
    date: "Ene 30, 2026",
  },
] as const;
