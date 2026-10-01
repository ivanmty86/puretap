import React from "react";

export default function Coverage() {
  const zones = [
    { name: "Monterrey", desc: "Centro, Barrio Antiguo, Obispado, San Jerónimo, Sur / Carretera Nacional" },
    { name: "San Pedro Garza García", desc: "Centrito Valle, Valle Oriente, Del Valle, Calzada del Valle" },
    { name: "Guadalupe", desc: "Linda Vista, Contry Sol, La Pastora, San Sebastián" },
    { name: "San Nicolás de los Garza", desc: "Anáhuac, Universidad, Las Puentes, República Mexicana" },
    { name: "Apodaca", desc: "Concordia, Sendero, Parques Industriales y Aeropuerto" },
    { name: "Santa Catarina", desc: "La Fama, Valle Poniente, Zona Centro y Parques Industriales" },
    { name: "General Escobedo", desc: "Sendero Divisorio, Barragán, Nexxus" },
    { name: "Juárez", desc: "Villas de San José, San Mateo, Teófilo Salinas" },
    { name: "Santiago / El Cercado", desc: "Pueblo Mágico, Los Cavazos y Carretera Nacional" },
    { name: "García", desc: "Cumbres García, Dominio Cumbres y Cabecera Municipal" },
  ];

  return (
    <section id="cobertura" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Acento gráfico de fondo */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-pure-gold/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mb-10">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-pure-amber uppercase">
              Presencia Local Inmediata
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pure-navy mt-2 tracking-tight">
              Cubrimos todo Monterrey y área metropolitana
            </h2>
            <p className="text-base sm:text-lg text-pure-slate-muted mt-3">
              Llegamos puntualmente a tu local, restaurante, gastro-pub, taproom o cervecería artesanal en
              cualquier municipio de la Zona Metropolitana de Monterrey sin demoras.
            </p>
          </div>

          {/* Chips / Cuadrícula de municipios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {zones.map((zone, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:border-pure-navy/30 hover:shadow-soft transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-pure-amber flex-shrink-0" />
                  <span className="font-bold text-sm text-pure-navy">{zone.name}</span>
                </div>
                <p className="text-[11px] text-pure-slate-muted leading-relaxed pl-4 line-clamp-2">
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Nota al pie de cobertura */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs sm:text-sm text-pure-slate-muted">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Disponibilidad matutina y previa a horario de apertura para no alterar tu servicio al cliente.</span>
            </p>
            <a
              href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20quisiera%20confirmar%20cobertura%20en%20mi%20zona."
              target="_blank"
              rel="noopener noreferrer"
              className="text-pure-navy font-bold hover:text-pure-amber underline transition-colors whitespace-nowrap"
            >
              Consultar otra zona específica &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
