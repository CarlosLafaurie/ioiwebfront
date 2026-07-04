import type { Founder } from "../types/founder";

export const FOUNDERS: readonly Founder[] = [
  {
    id: "jhonny",
    name: "Jhonny Cala",
    role: "Co-Founder & Software Engineer",
    bio: "Ingeniero de Sistemas enfocado en desarrollo de software empresarial, automatización de procesos y arquitecturas escalables.",
    initials: "JC",
    expertise: ["Backend", "Arquitectura", "Automatización"],
  },
  {
    id: "carlos",
    name: "Carlos Lafaurie",
    role: "Co-Founder & Software Engineer",
    bio: "Especialista en desarrollo web moderno y soluciones tecnológicas para empresas.",
    initials: "CL",
    expertise: ["Frontend", "Producto", "Integraciones"],
  },
] as const;
