/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, CalendarDays } from "lucide-react";
import { BARBERSHOP_DATA } from "../types";

export default function About() {
  return (
    <section id="sobre" className="relative py-14 sm:py-20 bg-[#070707] overflow-hidden border-t border-[#C9A646]/10 flex flex-col items-center justify-center text-center">
      {/* Soft golden light source behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A646]/2 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="space-y-8 flex flex-col items-center">
          
          {/* Header Title strictly uppercase and serif */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-[2.65rem] font-bold text-[#C9A646] tracking-[0.15em] uppercase"
          >
            TRADIÇÃO <span className="text-[#F5F1E8]">&amp;</span> SOFISTICAÇÃO
          </motion.h2>

          {/* Thin Gold Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] w-24 bg-[#C9A646]/40 mx-auto origin-center"
          ></motion.div>

          {/* Centered Descriptive Narrative exactly matching paragraph style in the first image */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif italic text-base sm:text-lg md:text-xl text-[#B8B8B8]/95 leading-[1.85] tracking-wide font-light max-w-3xl"
          >
            A{" "}
            <span className="font-serif text-[#C9A646] font-bold not-italic tracking-[0.08em] uppercase">
              RENÊ CORTES
            </span>{" "}
            nasceu para homens que valorizam estilo, cuidado e experiência premium. Mais do que cortar cabelo, oferecemos um ambiente sofisticado e acolhedor onde cada detalhe é pensado para elevar o seu visual e a sua confiança.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
