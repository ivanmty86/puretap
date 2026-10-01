# PureTap &mdash; Limpieza y Equipo Cervecero

Sitio web oficial one-page profesional para **PureTap**, especialistas en limpieza profunda de líneas de cerveza de barril por recirculación química, calibración de presiones y mantenimiento de equipos de dispensado en Monterrey y su área metropolitana.

> *"Cerveza como debe saber. Líneas siempre limpias."*

---

## 🚀 Tecnologías

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconos:** SVGs optimizados integrados y listos para producción
- **SEO & Datos Estructurados:** Schema.org (`LocalBusiness` y `Service` en JSON-LD), OpenGraph, Twitter Cards, Sitemap y Robots nativos.
- **Despliegue:** Optimizado para [Vercel](https://vercel.com/) con cero configuración adicional.

---

## 📋 Estructura de la One-Page

El proyecto sigue rigurosamente el orden de conversión y presentación solicitado:

1. **Header fijo (Sticky):** Logo PureTap, menú con anclas suaves (`#inicio`, `#por-que-limpiar`, `#servicios`, `#como-trabajamos`, `#contacto`) y botón de WhatsApp.
2. **Hero Section:** Propuesta de valor clara para Monterrey, llamados a la acción y sellos de confianza técnica (ciclo 14-15 días, químicos grado alimenticio, etc.).
3. **Por qué limpiar las líneas:** Detalle educativo y persuasivo sobre Biofilm, Piedra de Cerveza (*beerstone*), sabores a vinagre/mantequilla y merma por espuma, con la recomendación oficial de la *Brewers Association*.
4. **Nuestros Servicios:** 4 tarjetas detalladas:
   - Limpieza profunda de líneas (recirculación química)
   - Mantenimiento y calibración de presiones
   - Instalación de equipos de dispensado
   - Suministro e instalación de refacciones
5. **Cómo trabajamos:** Metodología clara en 4 pasos (contacto, agendamiento pre-apertura, limpieza/revisión y entrega de bitácora).
6. **Zonas de cobertura:** Cobertura en Monterrey, San Pedro Garza García, Guadalupe, San Nicolás, Apodaca, Santa Catarina, Escobedo, Juárez, Santiago y García.
7. **Testimonios:** Reseñas realistas de negocios y gerentes de la escena cervecera local.
8. **CTA Final + Formulario de Contacto:** Formulario interactivo que genera el mensaje estructurado para WhatsApp al instante.
9. **Footer:** Identidad de marca, enlaces de navegación, WhatsApp clickeable (+52 8120 7344 80), ubicación y copyright.
10. **Botón Flotante:** Acceso rápido a WhatsApp en móvil y escritorio.

---

## 🎨 Paleta de Colores

- **Azul profundo (Base):** `#0A2540`
- **Azul logo:** `#1B3A5F`
- **Acento Dorado / Ámbar:** `#D4A017` / `#E8B923`
- **Fondo:** `#FFFFFF` y `#F8FAFC`
- **Texto:** `#1E293B` y `#64748B`

---

## 🖼️ Reemplazar el Logo Oficial

El proyecto viene con el logo vectorial SVG de alta definición listo en `/public/logo-puretap.svg` y un componente inteligente `components/Logo.tsx`.

Para usar la imagen PNG oficial de PureTap:
1. Guarda tu archivo con el nombre exacto: **`logo-puretap.png`**
2. Colócalo dentro de la carpeta: **`public/logo-puretap.png`**
3. El componente `components/Logo.tsx` lo detectará y renderizará automáticamente.

---

## 🛠️ Instalación y Desarrollo Local

1. Clona el repositorio o abre esta carpeta en tu terminal:
   ```bash
   cd puretap-monterrey
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre en tu navegador:
   ```
   http://localhost:3000
   ```

---

## 🌐 Despliegue en Vercel (Recomendado)

1. Sube este repositorio a tu cuenta de **GitHub**.
2. Entra a [vercel.com](https://vercel.com/) e inicia sesión.
3. Haz clic en **"Add New..." &rarr; "Project"** y selecciona este repositorio.
4. Deja la configuración predeterminada de Next.js.
5. Haz clic en **Deploy**. ¡Tu sitio estará en línea en menos de 2 minutos!

---

## 📞 Datos de Contacto del Negocio

- **Negocio:** PureTap (Limpieza y Equipo Cervecero)
- **WhatsApp Directo:** [+52 8120 7344 80](https://wa.me/528120734480)
- **Ubicación:** Monterrey, Nuevo León, México
