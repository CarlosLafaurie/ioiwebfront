import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

export function Service() {
  const { slug } = useParams();

  const [service, setService] = useState<any>(null);

  useEffect(() => {
    const loadService = async () => {
      try {
        const response = await api.get(`/services/${slug}`);
        setService(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadService();
  }, [slug]);

  if (!service) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-32">
        Cargando servicio...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-32">
      <h1 className="text-5xl font-bold text-white">
        {service.title}
      </h1>

      <p className="mt-6 text-gray-400">
        {service.description}
      </p>

      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="mt-10 w-full rounded-2xl"
        />
      )}

      <div
        className="prose prose-invert mt-10 max-w-none"
        dangerouslySetInnerHTML={{
          __html: service.content,
        }}
      />
    </div>
  );
}