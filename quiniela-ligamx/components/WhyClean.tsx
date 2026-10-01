import React from "react";

export default function WhyClean() {
  const problems = [
    {
      title: "Biofilm y Bacterias",
      desc: "Lactobacillus y Pediococcus colonizan el interior de mangueras y espigas plásticas, proliferando colonias que dañan irreversiblemente el sabor.",
      icon: (
        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      badge: "Infección de línea",
    },
    {
      title: "Piedra de Cerveza (Beerstone)",
      desc: "El oxalato de calcio se precipita en las paredes de las líneas y juntas metálicas, creando una superficie rugosa donde se atrapan sedimentos y levaduras viejas.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      badge: "Obstrucción química",
    },
    {
      title: "Sabores Desagradables",
      desc: "Notas a vinagre (ácido acético), manzana verde o mantequilla rancia (diacetilo) que destruyen el perfil del cervecero y causan quejas o devoluciones.",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "Pérdida de clientes",
    },
    {
      title: "Exceso de Espuma y Merma",
      desc: "Líneas sucias o con depósitos crean turbulencia al servir. El cantinero tira hasta un 25% del barril en la charola para poder llenar un solo vaso.",
      icon: (
        <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
      badge: "Dinero tirado",
    },
  ];

  const benefits = [
    {
      title: "Cerveza fresca e impecable",
      desc: "Tus clientes degustarán la cerveza tal como el maestro cervecero la concibió, aumentando la repetición de consumo.",
    },
    {
      title: "Aprovechamiento al 100% del barril",
      desc: "Menos espuma incontrolable significa servir cada litro cobrado, reduciendo drásticamente la merma mensual.",
    },
    {
      title: "Prolongación de vida útil de tus equipos",
      desc: "Mantenemos empaques, orings, grifos de acero inox y conectores libres de corrosión prematura.",
    },
    {
      title: "Tranquilidad operativa total",
      desc: "Nosotros llevamos la bitácora calendarizada y te avisamos cuándo toca tu siguiente mantenimiento sin que tengas que preocuparte.",
    },
  ];

  return (
    <section id="por-que-limpiar" className="py-20 md:py-28 bg-pure-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-pure-amber uppercase">
            Estándares de la Industria Cervecera
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pure-navy mt-2 tracking-tight">
            ¿Por qué es indispensable limpiar tus líneas cada 14 días?
          </h2>
          <p className="text-base sm:text-lg text-pure-slate-muted mt-4">
            La <strong className="text-pure-slate">Brewers Association</strong> y los fabricantes de cerveza artesanal
            e industrial a nivel mundial estipulan que un sistema de draft debe ser desinfectado y recirculado
            químicamente cada 14 días como regla inquebrantable de sanidad.
          </p>
        </div>

        {/* Tarjetas de Problemas (Lo que evitas con PureTap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft border border-slate-200/70 hover:shadow-card hover:border-pure-amber/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-pure-navy mb-2">{item.title}</h3>
                <p className="text-sm text-pure-slate-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Beneficios para el Bar / Restaurante */}
        <div className="rounded-3xl bg-pure-navy text-white p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-pure-blue rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 rounded-full bg-pure-amber/20 text-pure-gold text-xs font-bold uppercase tracking-wider mb-3">
                Impacto directo en tu negocio
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                La limpieza periódica se paga sola desde el primer barril.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                Tirar espuma por la charola y servir pintas con mal sabor cuesta miles de pesos al mes en inventario desperdiciado y comensales que no regresan.
              </p>
              <div className="mt-6">
                <a
                  href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20quiero%20conocer%20los%20paquetes%20quincenales%20de%20limpieza%20para%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pure-amber text-pure-navy font-bold text-sm hover:bg-pure-gold transition-colors shadow-md"
                >
                  <span>Agendar servicio preventivo</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2 text-pure-gold">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <h4 className="font-bold text-white text-base">{b.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
