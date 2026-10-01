import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "PureTap | Limpieza y Equipo Cervecero en Monterrey, NL",
  description:
    "Limpieza profesional de líneas de cerveza de barril en Monterrey y área metropolitana. Evita sabores extraños, exceso de espuma y pérdida de clientes con servicio especializado cada 15 días.",
  keywords: [
    "limpieza de líneas de cerveza Monterrey",
    "mantenimiento equipo cervecero Monterrey",
    "cerveza de barril Monterrey",
    "limpieza líneas draft Monterrey",
    "calibración presiones CO2",
    "servicio líneas de cerveza San Pedro Garza García",
    "recirculación química cerveza",
    "PureTap Monterrey",
    "equipo cervecero Nuevo León",
  ],
  authors: [{ name: "PureTap" }],
  creator: "PureTap",
  publisher: "PureTap",
  metadataBase: new URL("https://puretap.mx"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PureTap | Limpieza y Equipo Cervecero en Monterrey",
    description:
      "Cerveza como debe saber. Líneas siempre limpias. Servicio especializado de recirculación química cada 15 días en Monterrey y área metropolitana.",
    url: "https://puretap.mx",
    siteName: "PureTap",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo-puretap.svg",
        width: 1200,
        height: 630,
        alt: "PureTap - Limpieza y Equipo Cervecero en Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PureTap | Limpieza y Equipo Cervecero en Monterrey",
    description:
      "Cerveza como debe saber. Líneas siempre limpias. Servicio especializado de limpieza de líneas de barril en Monterrey.",
    images: ["/logo-puretap.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-puretap.svg",
    apple: "/logo-puretap.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${inter.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white text-pure-slate antialiased font-sans selection:bg-pure-amber selection:text-pure-navy">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
