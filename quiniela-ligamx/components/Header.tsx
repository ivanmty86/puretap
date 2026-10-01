"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#por-que-limpiar", label: "Por qué limpiar" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Menú de escritorio con anclas suaves */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm font-medium text-pure-slate"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg transition-colors hover:text-pure-amber hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-pure-amber"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botón destacado de WhatsApp a la derecha */}
          <div className="hidden sm:flex items-center">
            <a
              href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20la%20limpieza%20de%20mis%20l%C3%ADneas%20de%20cerveza."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 lg:px-5 py-2.5 rounded-full bg-pure-navy text-white text-sm font-semibold shadow-md hover:bg-pure-blue hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pure-amber group"
            >
              <svg
                className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.189.014.305-.058.115-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.102.174.454.747.974 1.21.671.597 1.238.782 1.412.869.174.087.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
              </svg>
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-pure-navy rounded-lg hover:bg-slate-100"
            >
              <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-pure-slate hover:text-pure-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-pure-amber"
              aria-expanded={isMobileMenuOpen}
              aria-label="Alternar menú de navegación"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-pure-slate hover:bg-pure-gold-light hover:text-pure-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20la%20limpieza%20de%20mis%20l%C3%ADneas%20de%20cerveza."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-pure-navy text-white font-semibold text-center shadow hover:bg-pure-blue"
              >
                <span>Solicitar cotización por WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
