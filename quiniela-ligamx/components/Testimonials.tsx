import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rodrigo Cantú",
      role: "Gerente Operativo",
      business: "Barrio Antiguo Craft Beer Co.",
      location: "Monterrey Centro",
      quote:
        "Teníamos un problema serio con la IPA insignia: salía con exceso de espuma y perdíamos casi un tercio de cada barril. PureTap vino, limpió con recirculación y calibró la presión en el cuarto frío. La merma bajó a cero y el aroma del lúpulo volvió a ser perfecto.",
      rating: 5,
    },
    {
      name: "Mariana Elizondo",
      role: "Cofundadora & Sommelier",
      business: "La Taberna del Valle",
      location: "San Pedro Garza García",
      quote:
        "Para nosotros el perfil de sabor es sagrado. Delegar la limpieza cada 15 días con PureTap ha sido la mejor decisión operativa del año. Son súper puntuales, trabajan antes de que abramos puertas y nos dejan bitácora técnica impecable.",
      rating: 5,
    },
    {
      name: "Ing. Alejandro Treviño",
      role: "Head Brewer & Propietario",
      business: "Cervecería de la Sierra",
      location: "Guadalupe, NL",
      quote:
        "Muchos piensan que enjuagar con agua basta, pero el oxalato de calcio arruina las mangueras. El equipo de PureTap entiende la química cervecera y usa insumos de grado alimenticio certificados. Totalmente recomendados para cualquier taproom regio.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-pure-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-pure-amber uppercase">
            Confianza Comprobada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pure-navy mt-2 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base sm:text-lg text-pure-slate-muted mt-4">
            Bares, taprooms y cerveceros en Monterrey confían en PureTap para mantener sus líneas al 100%.
          </p>
        </div>

        {/* Las 3 Tarjetas de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Estrellas */}
                <div className="flex items-center gap-1 text-pure-amber mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comillas y Cita */}
                <p className="text-sm text-pure-slate leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Autor y Negocio */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pure-navy text-pure-gold flex items-center justify-center font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-pure-navy">{t.name}</h3>
                  <p className="text-xs text-pure-slate-muted">
                    {t.role} &bull; <span className="font-medium text-pure-blue">{t.business}</span>
                  </p>
                  <p className="text-[10px] text-slate-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
