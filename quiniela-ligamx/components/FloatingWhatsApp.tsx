"use client";

import React, { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de hacer scroll 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Contacto flotante" className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
      <a
        href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20quisiera%20cotizar%20el%20servicio%20de%20limpieza%20de%20l%C3%ADneas%20de%20cerveza."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a PureTap por WhatsApp"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-2xl hover:bg-[#20ba59] hover:scale-105 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.189.014.305-.058.115-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.102.174.454.747.974 1.21.671.597 1.238.782 1.412.869.174.087.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
        </svg>
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          ¿Dudas? Chatea con nosotros
        </span>
      </a>
    </aside>
  );
}
