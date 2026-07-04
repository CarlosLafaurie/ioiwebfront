import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../../ui/Card";
import type { Service } from "../../../types/service";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  return (
    <Link
      to={`/servicios/${service.slug}`}
      className="h-full"
    >
      <Card
        interactive
        className="group flex h-full flex-col gap-6 p-7"
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-[11px] text-ink-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium tracking-tight text-white">
            {service.title}
          </h3>

          <p className="text-[14px] leading-relaxed text-ink-700">
            {service.description}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2 text-[13px] text-ink-700 transition-colors duration-300 group-hover:text-white">
          <span>Conocer más</span>

          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </div>
      </Card>
    </Link>
  );
}