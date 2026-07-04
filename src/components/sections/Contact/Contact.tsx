import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SectionTitle } from "../../ui/SectionTitle";
import { Card } from "../../ui/Card";
import { Reveal } from "../../animations/Reveal";
import { Button } from "../../ui/Button";
import { ContactForm } from "./ContactForm";
import { buildWhatsAppLink } from "../../../utils/helpers";

const WHATSAPP_PHONE = "+573236293543";
const WHATSAPP_MESSAGE =
  "Hola IOI, me interesa conversar sobre un proyecto de software.";

const INFO = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barranquilla, Colombia",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "gerencia@ioidev.solutions",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Respuesta directa",
  },
];

export function Contact() {
  const whatsappLink = buildWhatsAppLink(WHATSAPP_PHONE, WHATSAPP_MESSAGE);

  return (
    <section
      id="contact"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Conversemos"
          title={
            <>
              Cuéntanos qué quieres
              <br className="hidden md:block" /> construir.
            </>
          }
          description="Una propuesta inicial sin costo. Sin compromisos, sin discursos de venta. Solo una conversación honesta sobre tu proyecto."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <Card className="p-8 md:p-10">
              <ContactForm />
            </Card>
          </Reveal>

          {/* Side info */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-5">
              <Card className="flex flex-col gap-6 p-8">
                <h3 className="font-display text-xl tracking-[-0.02em] text-white">
                  Prefieres mensaje directo
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-700">
                  Si necesitas una respuesta inmediata, escríbenos por
                  WhatsApp. Atendemos personalmente, no son bots.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start"
                >
                  <Button
                    iconLeft={<MessageCircle className="h-4 w-4" strokeWidth={1.6} />}
                  >
                    Hablar por WhatsApp
                  </Button>
                </a>
              </Card>

              <Card className="flex flex-col divide-y divide-ink-400/60 p-2">
                {INFO.map((i) => {
                  const Icon = i.icon;
                  return (
                    <div
                      key={i.label}
                      className="flex items-center gap-4 px-5 py-4"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-400/70 bg-ink-200/60">
                        <Icon className="h-4 w-4 text-ink-800" strokeWidth={1.5} />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[11px] uppercase tracking-[0.14em] text-ink-600">
                          {i.label}
                        </span>
                        <span className="text-[14px] text-white">
                          {i.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Card>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
