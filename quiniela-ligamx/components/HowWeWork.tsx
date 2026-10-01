import React from "react";

export default function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Nos contactas por WhatsApp",
      description:
        "Escríbenos directamente indicando cuántos grifos tienes, qué tipo de negocio operas y tu ubicación en Monterrey.",
      icon: (
        <svg className="w-6 h-6 text-pure-navy" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.189.014.305-.058.115-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.102.174.454.747.974 1.21.671.597 1.238.782 1.412.869.174.087.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Agendamos la visita",
      description:
        "Coordinamos un horario conveniente antes de la apertura al público para realizar el servicio sin interrumpir tus ventas ni el servicio.",
      icon: (
        <svg className="w-6 h-6 text-pure-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Limpieza y revisión completa",
      description:
        "Conectamos nuestro equipo de bombeo recirculado con químico grado alimenticio, desarmamos grifos, revisamos empaques y calibramos presiones.",
      icon: (
        <svg className="w-6 h-6 text-pure-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Reporte y recomendaciones",
      description:
        "Te entregamos la bitácora técnica de servicio con observaciones del sistema, parámetros de CO2 y te recordamos la fecha de la próxima visita.",
      icon: (
        <svg className="w-6 h-6 text-pure-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-trabajamos" className="py-20 md:py-28 bg-pure-bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-pure-amber uppercase">
            Paso a Paso Sin Complicaciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pure-navy mt-2 tracking-tight">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-base sm:text-lg text-pure-slate-muted mt-4">
            Un proceso ágil, profesional y estandarizado para que no pierdas ni un solo minuto de operación en tu barra.
          </p>
        </div>

        {/* Proceso en 4 pasos (Horizontal desktop, vertical mobile) */}
        <div className="relative">
          {/* Línea conectora en desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-pure-navy via-pure-amber to-pure-navy -translate-y-12 z-0 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-pure-amber tracking-tight">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-pure-gold-light border border-pure-amber/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-pure-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-pure-slate-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-pure-amber">
                  <span>Paso {index + 1} de 4</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA rápido para WhatsApp */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20quisiera%20iniciar%20el%20paso%201%20y%20agendar%20una%20visita."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-pure-navy text-white font-semibold text-sm shadow hover:bg-pure-blue hover:shadow-md transition-all duration-200"
          >
            <span>Iniciar contacto por WhatsApp</span>
            <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
