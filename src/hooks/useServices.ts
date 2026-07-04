import { useEffect, useState } from "react";
import { getServices } from "../services/serviceService";

export const useServices = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return {
    services,
    loading,
  };
};