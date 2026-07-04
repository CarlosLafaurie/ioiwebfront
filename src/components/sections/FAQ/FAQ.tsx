import { useState } from "react";
import { SectionTitle } from "../../ui/SectionTitle";
import { Reveal } from "../../animations/Reveal";
import { FAQ_ITEMS } from "../../../data/faq";
import { FAQItem } from "./FAQItem";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Preguntas frecuentes"
              title="Todo lo que necesitas saber."
              description="Si tu pregunta no está aquí, escríbenos y te respondemos en menos de 24 horas hábiles."
            />
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="border-t border-ink-400/60">
                {FAQ_ITEMS.map((item) => (
                  <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openId === item.id}
                    onToggle={() =>
                      setOpenId((prev) => (prev === item.id ? null : item.id))
                    }
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
