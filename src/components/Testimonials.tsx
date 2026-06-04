/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";
import { BARBERSHOP_DATA } from "../types";

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="relative py-14 sm:py-20 bg-marble overflow-hidden">
      {/* Decorative Golden Ambient Backlights */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#C9A646]/2 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#C9A646]"
          >
            Quem nos conhece, indica
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F1E8] tracking-tight"
          >
            Avaliações dos <span className="text-gold-gradient">Clientes</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-[1px] w-24 bg-[#C9A646] mx-auto origin-center"
          ></motion.div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BARBERSHOP_DATA.testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative p-8 bg-[#111111]/90 border border-[#C9A646]/10 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Quote Decor Icon */}
              <div className="absolute top-6 right-8 text-[#C9A646]/10 group-hover:text-[#C9A646]/25 transition-colors">
                <Quote className="h-8 w-8 transform rotate-180" />
              </div>

              {/* Star Ratings Row */}
              <div className="flex items-center space-x-1.5 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#C9A646] text-[#C9A646]"
                  />
                ))}
              </div>

              {/* Quote text message body */}
              <p className="font-sans text-sm sm:text-base text-[#F5F1E8]/90 italic leading-relaxed mb-8 relative z-10">
                "{item.review}"
              </p>

              {/* Client Profile / Signature Row */}
              <div className="flex items-center space-x-4 pt-6 border-t border-[#070707]">
                {/* Initials Avatar */}
                <div className="w-10 h-10 border border-[#C9A646]/20 bg-[#070707] flex items-center justify-center rounded-lg shadow-inner">
                  <span className="font-serif font-bold text-xs text-[#C9A646]">
                    {item.name.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold text-[#F5F1E8] tracking-wide">
                    {item.name}
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-500 flex items-center">
                    <Heart className="h-2.5 w-2.5 text-[#C9A646] mr-1" /> Cliente Satisfeito
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
