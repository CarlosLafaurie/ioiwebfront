import {
  Code2,
  Building2,
  Users,
  MessageSquare,
  BrainCircuit,
  Plug,
  Smartphone,
  ShoppingBag,
  ServerCog,
} from "lucide-react";
import type { Service } from "../types/service";

export const SERVICES: readonly Service[] = [
  {
    id: "web",
    title: "Desarrollo Web",
    description:
      "Aplicaciones web rápidas, accesibles y diseñadas para escalar con tu negocio.",
    icon: Code2,
    features: ["React / Next.js", "Arquitectura modular", "SEO técnico"],
  },
  {
    id: "enterprise",
    title: "Software Empresarial",
    description:
      "Plataformas internas a medida que reemplazan procesos manuales y hojas de cálculo.",
    icon: Building2,
    features: ["Multi-tenant", "Roles y permisos", "Auditoría"],
  },
  {
    id: "crm",
    title: "CRM a Medida",
    description:
      "Sistemas CRM adaptados a tu pipeline, no plantillas genéricas que no encajan.",
    icon: Users,
    features: ["Pipelines flexibles", "Reportería", "Integraciones"],
  },
  {
    id: "whatsapp",
    title: "Automatización WhatsApp",
    description:
      "Bots conversacionales conectados a tu operación para vender y atender 24/7.",
    icon: MessageSquare,
    features: ["WhatsApp Cloud API", "Flujos dinámicos", "Handoff humano"],
  },
  {
    id: "ai",
    title: "Inteligencia Artificial",
    description:
      "Modelos y agentes que automatizan decisiones repetitivas dentro de tu empresa.",
    icon: BrainCircuit,
    features: ["LLMs · OpenAI", "RAG privado", "Agentes autónomos"],
  },
  {
    id: "api",
    title: "Integración de APIs",
    description:
      "Conectamos tus sistemas con servicios externos de pagos, logística o datos.",
    icon: Plug,
    features: ["REST · GraphQL", "Webhooks", "ETL en tiempo real"],
  },
  {
    id: "mobile",
    title: "Aplicaciones Móviles",
    description:
      "Apps iOS y Android nativas o multiplataforma para tus clientes y equipos.",
    icon: Smartphone,
    features: ["React Native", "Push notifications", "Offline-first"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Tiendas online de alto rendimiento con checkout optimizado y métricas reales.",
    icon: ShoppingBag,
    features: ["Pasarelas locales", "Inventario", "Analytics"],
  },
  {
    id: "hosting",
    title: "Hosting y Soporte",
    description:
      "Infraestructura cloud monitoreada y soporte continuo tras el lanzamiento.",
    icon: ServerCog,
    features: ["AWS · Docker", "Monitoreo 24/7", "SLA empresarial"],
  },
] as const;
