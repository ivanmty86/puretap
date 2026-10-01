import React from "react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/4 w-80 h-80 bg-pure-gold/15 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-pure-navy/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pure-gold-light border border-pure-amber/30 text-pure-navy text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-pure-amber animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-pure-amber -ml-4" />
            <span>Servicio especializado en Monterrey y Zona Metropolitana</span>
          </div>

          {/* Headline fuerte */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-pure-navy tracking-tight leading-[1.15] mb-6">
            Limpieza profesional de líneas de cerveza de barril en{" "}
            <span className="relative whitespace-nowrap text-pure-blue">
              Monterrey
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-pure-amber/70"
                viewBox="0 0 250 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9C55 3 195 3 247 9"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-pure-slate-muted leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Evita sabores extraños, exceso de espuma y pérdida de clientes. Servicio
            especializado cada 15 días con recirculación y estándares de la industria cervecera.
          </p>

          {/* Dos Botones Principales */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20el%20mantenimiento%20y%20limpieza%20de%20mis%20l%C3%ADneas%20de%20cerveza."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-pure-navy text-white text-base font-bold shadow-lg hover:bg-pure-blue hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-pure-amber/40"
            >
              <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
              </svg>
              <span>Solicitar cotización por WhatsApp</span>
            </a>

            <a
              href="#por-que-limpiar"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white text-pure-navy border border-slate-300 text-base font-semibold hover:bg-slate-50 hover:border-pure-navy/30 transition-all duration-200 shadow-sm"
            >
              ¿Por qué es importante limpiar?
            </a>
          </div>

          {/* Insignias de confianza en Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-left">
            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-lg bg-pure-gold-light flex items-center justify-center text-pure-amber flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-pure-slate-muted font-medium">Ciclo óptimo</p>
                <p className="text-sm font-bold text-pure-navy">Cada 14 - 15 días</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-lg bg-pure-gold-light flex items-center justify-center text-pure-amber flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-pure-slate-muted font-medium">Calidad técnica</p>
                <p className="text-sm font-bold text-pure-navy">Grado alimenticio</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-lg bg-pure-gold-light flex items-center justify-center text-pure-amber flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-pure-slate-muted font-medium">Ubicación</p>
                <p className="text-sm font-bold text-pure-navy">Toda la ZMM</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="w-10 h-10 rounded-lg bg-pure-gold-light flex items-center justify-center text-pure-amber flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-pure-slate-muted font-medium">Cero mermas</p>
                <p className="text-sm font-bold text-pure-navy">Presión calibrada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
