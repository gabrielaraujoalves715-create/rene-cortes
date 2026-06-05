/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronDown, CalendarDays } from "lucide-react";
import { BARBERSHOP_DATA } from "../types";
import Logo from "./Logo";
import barberHero from "../assets/images/barber_hero_1780605718009.png";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${BARBERSHOP_DATA.whatsappNumber.replace(
    /[+ ]/g,
    ""
  )}?text=${encodeURIComponent(BARBERSHOP_DATA.whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#070707] pt-20 pb-28"
    >
      {/* Cinematic Background Image with Parallax & Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.55 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src={barberHero}
          alt="Renê Cortes Premium Barber Shop"
          className="w-full h-full object-cover object-center select-none"
          referrerPolicy="no-referrer"
        />
        {/* Layered vignette filters for a luxury deep-black gradient finish */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/75 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient(ellipse at center, rgba(7,7,7,0.2) 0%, rgba(7,7,7,0.95) 100%)"></div>
      </div>

      {/* Hero Content Grid (Centered luxury brand display) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ contentVisibility: "auto" }}>
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo Brand Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-1"
          >
            <Logo className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 drop-shadow-[0_0_35px_rgba(201,166,70,0.5)]" />
          </motion.div>



          {/* Luxury Large Headings */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5F1E8] tracking-tight leading-tight"
          >
            Seu estilo <br className="sm:hidden" />
            <span className="text-gold-gradient font-black">começa aqui</span>
          </motion.h1>

          {/* Sophisticated Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-sans text-sm sm:text-base md:text-lg text-[#B8B8B8] max-w-2xl font-light leading-relaxed"
          >
            {BARBERSHOP_DATA.description}
          </motion.p>

          {/* Action Buttons with magnetic hovering effect */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-4 w-full sm:w-auto"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4.5 bg-[#C9A646] hover:bg-transparent border border-[#C9A646] text-[#070707] hover:text-[#C9A646] font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_4px_25px_rgba(201,166,70,0.25)] hover:shadow-[0_0_35px_rgba(201,166,70,0.6)] cursor-pointer"
            >
              {/* Button light flare effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></span>
              <CalendarDays className="mr-3 h-4 w-4 transition-transform group-hover:rotate-12 duration-300" />
              Agendar agora no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a
          href="#experiencia"
          className="flex flex-col items-center group cursor-pointer focus:outline-none"
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#B8B8B8] group-hover:text-[#C9A646] transition-colors"
          >
            Role para explorar
          </motion.span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 text-[#C9A646]"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
