/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import About from "./components/About";
import CtaFinal from "./components/CtaFinal";
import ContactMap from "./components/ContactMap";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#070707] text-[#F5F1E8] font-sans antialiased bg-marble min-h-screen relative overflow-x-hidden selection:bg-[#C9A646] selection:text-[#070707]">
      {/* Absolute high-status line tracking active sections */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A646] z-50"></div>

      {/* Main Single Page structural segments */}
      <main>
        {/* Section 1: Hero first fold */}
        <Hero />

        {/* Section 2: Why Choose Us (A experiência Renê Cortes) */}
        <WhyChooseUs />

        {/* Section 3: Services catalog (Arte & Precisão) */}
        <Services />

        {/* Section 4: Customer reviews feedback (Avaliações) */}
        <Testimonials />

        {/* Section 5: Gallery Portfolio results (Galeria Renê Cortes) */}
        <Gallery />

        {/* Section 6: About brand statement (Tradição & Sofisticação) */}
        <About />

        {/* Section 7: Final CTA visual hook */}
        <CtaFinal />

        {/* Section 8: Location, hours schedule and direct contact map */}
        <ContactMap />
      </main>

      {/* Bottom Footer credits and menus */}
      <Footer />

      {/* Continuous floating active WhatsApp scheduling link */}
      <WhatsAppButton />
    </div>
  );
}

