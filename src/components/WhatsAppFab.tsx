import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919825031792?text=Hello%20Tanishk%20Logistics%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
