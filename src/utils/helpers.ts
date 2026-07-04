/**
 * Format a number with thousand separators.
 */
export const formatNumber = (n: number): string =>
  new Intl.NumberFormat("es-CO").format(n);

/**
 * Build a WhatsApp deep link with prefilled message.
 */
export const buildWhatsAppLink = (
  phoneE164: string,
  message: string,
): string => {
  const phone = phoneE164.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

/**
 * Smoothly scroll to a section by id.
 */
export const scrollToId = (id: string): void => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};
