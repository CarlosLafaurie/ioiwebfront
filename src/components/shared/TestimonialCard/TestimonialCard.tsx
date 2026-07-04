import { Card } from "../../ui/Card";
import type { Testimonial } from "../../../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, author, role, company } = testimonial;
  const initials = author
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <Card className="flex h-full flex-col justify-between gap-8 p-8">
      <p className="font-display text-[19px] leading-[1.5] tracking-[-0.015em] text-ink-900 md:text-[20px]">
        “{quote}”
      </p>

      <div className="flex items-center gap-4 border-t border-ink-400/60 pt-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-400/70 bg-ink-200/60 font-mono text-[12px] text-ink-800">
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-medium text-white">{author}</span>
          <span className="text-[12px] text-ink-700">
            {role} · {company}
          </span>
        </div>
      </div>
    </Card>
  );
}
