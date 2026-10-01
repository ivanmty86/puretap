import React from "react";

export default function Services() {
  const servicesList = [
    {
      id: "limpieza-profunda",
      title: "Limpieza Profunda de Líneas",
      subtitle: "Recirculación profesional con químicos grado alimenticio",
      description:
        "Utilizamos bombas eléctricas de recirculación dinámica que barren a presión las paredes internas de mangueras, espigas y grifos con solución cáustica y desincrustante ácido alternado.",
      details: [
        "Desarmado y cepillado manual de grifos y canillas",
        "Limpieza y sanitizado de conectores Sankey (D y S)",
        "Enjuague exhaustivo y verificación de pH neutro",
        "Frecuencia sugerida: cada 14 a 15 días",
      ],
      icon: (
        <svg className="w-8 h-8 text-pure-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      tag: "Servicio Estrella",
    },
    {
      id: "calibracion-presiones",
      title: "Mantenimiento y Calibración de Presiones",
      subtitle: "Balance exacto de gas CO2 y mezcla para cero espuma",
      description:
        "Ajustamos milimétricamente reguladores primarios y secundarios de acuerdo a la longitud de tu línea, temperatura del cold room y volumen de carbonatación del estilo servido.",
      details: [
        "Detección y sellado de microfugas de gas CO2",
        "Revisión de termostatos y temperatura en cold room",
        "Inspección de empaques, clamps y válvulas check",
        "Optimización de caudal de servido por grifo",
      ],
      icon: (
        <svg className="w-8 h-8 text-pure-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      tag: "Ahorro & Control",
    },
    {
      id: "instalacion-equipos",
      title: "Instalación de Equipos de Dispensado",
      subtitle: "Montaje higiénico y grado cervecero para bares y taprooms",
      description:
        "Diseñamos e instalamos barras cerveceras desde cero o remodelaciones. Colocamos torres de tiro directo, sistemas de glicol, cold boxes y jockey boxes portátiles.",
      details: [
        "Instalación de torres americanas, europeas y pasamuros",
        "Tendido térmico de líneas de cerveza (trunk lines)",
        "Interconexión de tanques de gas y manifolds de alta presión",
        "Puesta a punto y capacitación básica al staff",
      ],
      icon: (
        <svg className="w-8 h-8 text-pure-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      tag: "Proyectos Nuevos",
    },
    {
      id: "suministro-refacciones",
      title: "Suministro e Instalación de Refacciones",
      subtitle: "Componentes originales en acero inoxidable 304",
      description:
        "Contamos con refaccionamiento inmediato en Monterrey para evitar que un grifo se quede cerrado en fin de semana. Solo manejamos marcas líderes de la industria.",
      details: [
        "Grifos forward-sealing en acero inoxidable",
        "Conectores D-System y S-System certificados",
        "Mangueras grado alimenticio anti-oxígeno (Barrier)",
        "O-rings de vitón, empaques sanitarios y abrazaderas Oetiker",
      ],
      icon: (
        <svg className="w-8 h-8 text-pure-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tag: "Disponibilidad Inmediata",
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-pure-amber uppercase">
            Especialización Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pure-navy mt-2 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg text-pure-slate-muted mt-4">
            Soluciones integrales de dispensado para bares, restaurantes, taprooms y cervecerías en
            Monterrey y su área metropolitana.
          </p>
        </div>

        {/* Las 4 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-soft hover:shadow-card hover:border-pure-navy/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-pure-gold-light border border-pure-amber/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-pure-navy">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-pure-navy mb-1">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-pure-amber mb-4">
                  {service.subtitle}
                </p>
                <p className="text-sm text-pure-slate-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Lista de características técnicas */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 mb-6">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-pure-slate">
                      <svg
                        className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/528120734480?text=Hola%20PureTap%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20el%20servicio%3A%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 text-pure-navy font-semibold text-sm border border-slate-200 hover:bg-pure-navy hover:text-white hover:border-pure-navy transition-all duration-200 group-hover:shadow-sm"
                >
                  <span>Cotizar este servicio</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
