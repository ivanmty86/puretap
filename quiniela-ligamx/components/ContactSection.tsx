"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    grifos: "1-4 grifos",
    municipio: "Monterrey",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `¡Hola PureTap! Me gustaría cotizar servicio de limpieza y mantenimiento para mi negocio:\n\n` +
        `👤 Nombre: ${formData.nombre}\n` +
        `📱 Tel/WhatsApp: ${formData.telefono}\n` +
        `🍺 Grifos aprox: ${formData.grifos}\n` +
        `📍 Municipio: ${formData.municipio}\n` +
        (formData.mensaje ? `📝 Mensaje: ${formData.mensaje}\n` : "")
    );

    const generatedUrl = `https://wa.me/528120734480?text=${text}`;
    setWaLink(generatedUrl);
    setSubmitted(true);

    // Intentar abrir WhatsApp inmediatamente
    if (typeof window !== "undefined") {
      window.open(generatedUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera persuasiva */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-pure-amber uppercase">
            Atención Rápida &bull; Monterrey y ZMM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-pure-navy mt-2 tracking-tight">
            ¿Listo para que tu cerveza sepa como debe?
          </h2>
          <p className="text-base sm:text-lg text-pure-slate-muted mt-4">
            Cuéntanos sobre tu barra cervecera. Te responderemos en minutos con una propuesta
            personalizada sin compromiso.
          </p>

          {/* Botón directo WhatsApp */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/528120734480?text=Hola%20PureTap%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20inmediata."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white text-base font-bold shadow-lg hover:bg-[#20ba59] hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.189.014.305-.058.115-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.102.174.454.747.974 1.21.671.597 1.238.782 1.412.869.174.087.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.044.073.044.42-.1.825z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
              </svg>
              <span>Escríbenos directamente a WhatsApp (+52 8120 7344 80)</span>
            </a>
          </div>
        </div>

        {/* Contenedor del Formulario + Tarjeta de Contacto */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tarjeta de Información Directa */}
          <div className="lg:col-span-5 bg-pure-navy text-white rounded-3xl p-8 sm:p-10 shadow-card">
            <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Atención directa a propietarios de bares, gerentes de alimentos y bebidas, taprooms y homebrewers.
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-pure-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Teléfono / WhatsApp</span>
                  <a
                    href="https://wa.me/528120734480"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-pure-gold transition-colors"
                  >
                    +52 8120 7344 80
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-pure-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Ubicación y Cobertura</span>
                  <p className="font-semibold text-white">Monterrey, NL, México</p>
                  <p className="text-xs text-slate-300">Toda el Área Metropolitana de Monterrey</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-pure-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Horarios de Servicio</span>
                  <p className="font-semibold text-white">Lunes a Sábado</p>
                  <p className="text-xs text-slate-300">Horarios coordinados previos a tu apertura</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
              <p>✨ <strong>Tagline oficial:</strong> &ldquo;Cerveza como debe saber. Líneas siempre limpias.&rdquo;</p>
            </div>
          </div>

          {/* Formulario de Cotización */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-pure-navy mb-2">¡Información lista!</h4>
                <p className="text-sm text-pure-slate-muted mb-6">
                  Se ha preparado tu mensaje para WhatsApp con todos tus datos. Si no se abrió automáticamente, presiona el botón inferior:
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pure-navy text-white font-bold text-sm hover:bg-pure-blue transition-colors shadow"
                  >
                    <span>Abrir en WhatsApp</span>
                    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-pure-slate-muted hover:text-pure-navy underline py-2"
                  >
                    Enviar otra consulta o editar datos
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-pure-navy mb-4">
                  Cotiza tu servicio personalizado
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold text-pure-navy uppercase tracking-wider mb-1.5">
                      Nombre o Negocio *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Ej. Carlos - Taproom Regio"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-pure-slate placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pure-amber focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Teléfono / WhatsApp */}
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-bold text-pure-navy uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      placeholder="Ej. 81 1234 5678"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-pure-slate placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pure-amber focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Número de Grifos */}
                  <div>
                    <label htmlFor="grifos" className="block text-xs font-bold text-pure-navy uppercase tracking-wider mb-1.5">
                      Número aproximado de grifos
                    </label>
                    <select
                      id="grifos"
                      name="grifos"
                      value={formData.grifos}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-pure-slate bg-white focus:outline-none focus:ring-2 focus:ring-pure-amber focus:border-transparent transition-all"
                    >
                      <option value="1 a 4 grifos">1 a 4 grifos</option>
                      <option value="5 a 8 grifos">5 a 8 grifos</option>
                      <option value="9 a 16 grifos">9 a 16 grifos</option>
                      <option value="Más de 16 grifos">Más de 16 grifos</option>
                      <option value="Instalación nueva desde cero">Instalación nueva desde cero</option>
                    </select>
                  </div>

                  {/* Municipio */}
                  <div>
                    <label htmlFor="municipio" className="block text-xs font-bold text-pure-navy uppercase tracking-wider mb-1.5">
                      Municipio en Monterrey y ZMM
                    </label>
                    <select
                      id="municipio"
                      name="municipio"
                      value={formData.municipio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-pure-slate bg-white focus:outline-none focus:ring-2 focus:ring-pure-amber focus:border-transparent transition-all"
                    >
                      <option value="Monterrey">Monterrey</option>
                      <option value="San Pedro Garza García">San Pedro Garza García</option>
                      <option value="Guadalupe">Guadalupe</option>
                      <option value="San Nicolás">San Nicolás de los Garza</option>
                      <option value="Apodaca">Apodaca</option>
                      <option value="Santa Catarina">Santa Catarina</option>
                      <option value="Escobedo">General Escobedo</option>
                      <option value="Juárez">Juárez</option>
                      <option value="Otro municipio">Otro municipio de NL</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold text-pure-navy uppercase tracking-wider mb-1.5">
                    Mensaje o detalle del servicio
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    placeholder="Cuéntanos si tienes problemas de espuma, sabor o requieres mantenimiento quincenal..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-pure-slate placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pure-amber focus:border-transparent transition-all"
                  ></textarea>
                </div>

                {/* Botón de Enviar */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-pure-navy text-white font-bold text-base hover:bg-pure-blue hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-pure-amber/30"
                  >
                    <span>Enviar cotización vía WhatsApp</span>
                    <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.985-1.39A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.155-.494-4.425-1.341l-.317-.214-3.003.837.848-2.936-.231-.337A8.148 8.148 0 013.818 12C3.818 7.489 7.489 3.818 12 3.818 16.511 3.818 20.182 7.489 20.182 12c0 4.511-3.671 8.182-8.182 8.182z" />
                    </svg>
                  </button>
                  <p className="text-center text-[11px] text-pure-slate-muted mt-2">
                    Respuesta rápida garantizada. Sin compromisos ni cargos ocultos.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
