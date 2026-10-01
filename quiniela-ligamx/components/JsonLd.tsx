import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://puretap.mx/#business",
        "name": "PureTap - Limpieza y Equipo Cervecero",
        "alternateName": "PureTap Monterrey",
        "description":
          "Servicio profesional especializado en limpieza recirculada de líneas de cerveza de barril, calibración de presiones y mantenimiento de equipos cerveceros en Monterrey y área metropolitana.",
        "url": "https://puretap.mx",
        "telephone": "+528120734480",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Monterrey",
          "addressRegion": "Nuevo León",
          "addressCountry": "MX",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.686614",
          "longitude": "-100.316113",
        },
        "areaServed": [
          { "@type": "City", "name": "Monterrey" },
          { "@type": "City", "name": "San Pedro Garza García" },
          { "@type": "City", "name": "Guadalupe" },
          { "@type": "City", "name": "San Nicolás de los Garza" },
          { "@type": "City", "name": "Apodaca" },
          { "@type": "City", "name": "Santa Catarina" },
          { "@type": "City", "name": "General Escobedo" },
          { "@type": "City", "name": "Juárez" },
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "08:00",
            "closes": "20:00",
          },
        ],
        "sameAs": [
          "https://wa.me/528120734480",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://puretap.mx/#service-cleaning",
        "name": "Limpieza profesional de líneas de cerveza de barril",
        "provider": {
          "@id": "https://puretap.mx/#business",
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Monterrey y Zona Metropolitana",
        },
        "description":
          "Limpieza profunda por recirculación con químicos grado alimenticio certificados cada 14-15 días, eliminando biofilm, piedra de cerveza y bacterias para garantizar sabor óptimo y cero mermas.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
