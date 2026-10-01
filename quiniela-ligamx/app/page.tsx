import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyClean from "@/components/WhyClean";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header fijo con navegación y botón WhatsApp */}
      <Header />

      {/* Contenido principal en el orden exacto solicitado */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Sección "Por qué limpiar las líneas" */}
        <WhyClean />

        {/* 4. Sección Servicios */}
        <Services />

        {/* 5. Sección "Cómo trabajamos" */}
        <HowWeWork />

        {/* 6. Sección Zonas de cobertura */}
        <Coverage />

        {/* 7. Sección Testimonios */}
        <Testimonials />

        {/* 8. Sección CTA final + Contacto */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
