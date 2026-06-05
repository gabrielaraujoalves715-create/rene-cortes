/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageSquare, CalendarCheck } from "lucide-react";
import { BARBERSHOP_DATA } from "../types";
import barberHero from "../assets/images/barber_hero_1780605718009.png";

export default function CtaFinal() {
  const whatsappUrl = `https://wa.me/${BARBERSHOP_DATA.whatsappNumber.replace(
    /[+ ]/g,
    ""
  )}?text=${encodeURIComponent(BARBERSHOP_DATA.whatsappMessage)}`;

  return (
    <section className="relative py-16 sm:py-22 bg-[#070707] overflow-hidden">
      {/* Background Image styling with high density overlay filters */}
      <div className="absolute inset-0 z-0">
        <img
          src={barberHero}
          alt="Renê Cortes Premium Ambiance"
          className="w-full h-full object-cover object-center select-none filter brightness-[45%] contrast-[115%] grayscale-[10%]"
          referrerPolicy="no-referrer"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/90 via-[#070707]/50 to-[#070707]/95"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-5xl md:text-[3.25rem] font-bold text-[#C9A646] tracking-[0.12em] uppercase leading-tight"
          >
            PRONTO PARA ELEVAR <br />
            SEU VISUAL?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-base sm:text-lg md:text-xl text-[#B8B8B8] max-w-xl mx-auto font-light"
          >
            agende seu horário e viva a experiência Renê Cortes.
          </motion.p>
        </div>

        {/* Primary CTA Action Button in Elegant Gold Block with Square Corners */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-4 bg-gradient-to-b from-[#E2C76B] via-[#C9A646] to-[#A37F2F] text-[#070707] hover:brightness-110 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-[0_4px_25px_rgba(201,166,70,0.3)] hover:shadow-[0_0_35px_rgba(201,166,70,0.6)] cursor-pointer border border-[#C9A646]/20"
          >
            <MessageSquare className="mr-3 h-4 w-4 fill-current transition-transform group-hover:scale-110" />
            AGENDAR PELO WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
