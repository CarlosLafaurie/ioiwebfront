import type { PortfolioProject } from "../types/portfolio";

export const PORTFOLIO: readonly PortfolioProject[] = [
  {
    id: "nexa-crm",
    name: "Nexa CRM",
    category: "Software Empresarial",
    description:
      "Plataforma CRM multi-sucursal con seguimiento comercial, reportería y automatizaciones.",
    technologies: ["Laravel", "React", "MySQL", "Docker"],
    year: "2025",
    metric: { label: "Tiempo operativo reducido", value: "−42%" },
  },
  {
    id: "atlas-erp",
    name: "Atlas ERP",
    category: "Software a medida",
    description:
      "ERP modular para empresas de logística con control de inventario, rutas y facturación electrónica.",
    technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
    year: "2025",
    metric: { label: "Pedidos procesados / día", value: "12.4k" },
  },
  {
    id: "halo-bot",
    name: "Halo Assistant",
    category: "IA · WhatsApp",
    description:
      "Asistente IA conectado a WhatsApp Cloud API para atención y agendamiento automatizado.",
    technologies: ["Python", "OpenAI", "Node.js", "Redis"],
    year: "2024",
    metric: { label: "Conversaciones automatizadas", value: "89%" },
  },
  {
    id: "mercato",
    name: "Mercato Commerce",
    category: "E-commerce",
    description:
      "Tienda headless con catálogo en tiempo real, checkout en un paso e integración con pasarelas locales.",
    technologies: ["Next.js", "Stripe", "PayU", "Tailwind"],
    year: "2024",
    metric: { label: "Conversión", value: "+38%" },
  },
  {
    id: "vault-portal",
    name: "Vault Portal",
    category: "Aplicación Web",
    description:
      "Portal financiero seguro para gestión documental con firma electrónica y trazabilidad completa.",
    technologies: ["React", "Laravel", "AWS S3", "OAuth"],
    year: "2024",
    metric: { label: "Cumplimiento auditoría", value: "100%" },
  },
  {
    id: "fleetiq",
    name: "FleetIQ",
    category: "Automatización",
    description:
      "Sistema de monitoreo de flota con telemetría en vivo, geocercas e informes operativos.",
    technologies: ["Vue", "Python", "MQTT", "PostgreSQL"],
    year: "2023",
    metric: { label: "Vehículos monitoreados", value: "1.8k" },
  },
] as const;
