import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pure-navy text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Columna Marca */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Servicio especializado en limpieza y desinfección de líneas de cerveza de barril por recirculación,
              mantenimiento técnico y balance de presiones en Monterrey y su área metropolitana.
            </p>
            <div className="inline-block px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-pure-gold font-medium">
              &ldquo;Cerveza como debe saber. Líneas siempre limpias.&rdquo;
            </div>
          </div>

          {/* Enlaces de Navegación Rápida */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-pure-gold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#por-que-limpiar" className="hover:text-white transition-colors">
                  ¿Por qué limpiar?
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios de dispensado
                </a>
              </li>
              <li>
                <a href="#como-trabajamos" className="hover:text-white transition-colors">
                  Metodología de 4 pasos
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-white transition-colors">
                  Zonas de cobertura
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto y cotizaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Información y WhatsApp */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-pure-gold mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
                </svg>
                <a
                  href="https://wa.me/528120734480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pure-gold font-semibold transition-colors"
                >
                  +52 8120 7344 80
                </a>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-pure-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Monterrey, Nuevo León, México</span>
              </li>

              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-pure-amber flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Servicio quincenal programado para bares y taprooms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} <strong>PureTap</strong> &bull; Limpieza y Equipo Cervecero. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Hecho para la comunidad cervecera de Monterrey y San Pedro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
