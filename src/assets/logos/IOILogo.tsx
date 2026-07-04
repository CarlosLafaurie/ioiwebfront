import { cn } from "../../utils/cn";
import logo from "./logo.png";

interface IOILogoProps {
  className?: string;
}

export function IOILogo({ className }: IOILogoProps) {
  return (
    <img
      src={logo}
      alt="IOI"
      className={cn("w-auto object-contain", className)}
    />
  );
}