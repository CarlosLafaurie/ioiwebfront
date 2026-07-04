import type { FAQItem } from "../types/testimonial";

export const FAQ_ITEMS: readonly FAQItem[] = [
  {
    id: "f1",
    question: "¿Cómo inicia un proyecto con IOI?",
    answer:
      "Comenzamos con una sesión de descubrimiento sin costo donde entendemos el problema, los procesos actuales y los objetivos del negocio. A partir de ahí entregamos una propuesta técnica con alcance, tiempos y costo cerrado.",
  },
  {
    id: "f2",
    question: "¿Trabajan con empresas fuera de Colombia?",
    answer:
      "Sí. Aunque estamos basados en Barranquilla, atendemos clientes en toda América Latina, Estados Unidos y España, con procesos asíncronos y entregables documentados en inglés o español.",
  },
  {
    id: "f3",
    question: "¿Cuánto tiempo toma un proyecto típico?",
    answer:
      "Un MVP funcional suele entregarse entre 6 y 10 semanas. Plataformas más complejas se estructuran en fases incrementales para que el cliente vea valor desde el primer mes.",
  },
  {
    id: "f4",
    question: "¿El código nos pertenece al finalizar?",
    answer:
      "Sí. El cliente recibe la propiedad completa del código fuente, la documentación y los accesos a infraestructura desde el primer día.",
  },
  {
    id: "f5",
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí. Tenemos planes de soporte mensual con SLA definidos, monitoreo proactivo y evolución continua del producto según las necesidades del negocio.",
  },
  {
    id: "f6",
    question: "¿Pueden integrar IA en sistemas que ya existen?",
    answer:
      "Absolutamente. Gran parte de nuestros proyectos consisten en agregar capacidades de IA, automatización o agentes conversacionales sobre plataformas existentes sin reescribirlas.",
  },
] as const;
