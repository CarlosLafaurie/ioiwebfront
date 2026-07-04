import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Textarea } from "../../ui/Textarea";

type Status = "idle" | "submitting" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("sent");
      form.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("No se pudo enviar el formulario.");
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="Nombre"
          name="name"
          placeholder="Tu nombre completo"
          required
        />

        <Input
          label="Empresa"
          name="company"
          placeholder="Nombre de la empresa"
          required
        />
      </div>

      <Input
        label="Correo"
        type="email"
        name="email"
        placeholder="nombre@empresa.com"
        required
      />

      <Textarea
        label="Mensaje"
        name="message"
        placeholder="Cuéntanos sobre tu proyecto, problema o idea."
        required
      />

      <div className="mt-2 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-600">
          Respondemos en menos de 24h hábiles
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          iconRight={
            status === "sent" ? (
              <Check className="h-4 w-4" strokeWidth={1.7} />
            ) : (
              <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
            )
          }
        >
          {status === "idle" && "Solicitar cotización"}
          {status === "submitting" && "Enviando..."}
          {status === "sent" && "Mensaje enviado"}
        </Button>
      </div>
    </form>
  );
}