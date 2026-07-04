import { useEffect, useState } from "react";
import { getFounders } from "../services/founderService";
import type { Founder } from "../types/founder";

export const useFounders = () => {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFounders = async () => {
      try {
        const data = await getFounders();
        setFounders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadFounders();
  }, []);

  return {
    founders,
    loading,
  };
};