/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";
import { BARBERSHOP_DATA } from "../types";
import Logo from "./Logo";

export default function ContactMap() {
  return (
    <section id="contato" className="relative py-16 sm:py-20 bg-[#070707] overflow-hidden border-t border-[#111111]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Brand Logo, Tagline & Details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Logo and Typography */}
            <div className="flex items-center space-x-3">
              <Logo className="w-14 h-14" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-black tracking-[0.12em] text-[#F5F1E8]">
                  RENÊ CORTES
                </span>
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.25em] text-[#C9A646]">
                  Barbearia Premium
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-serif italic text-sm sm:text-base text-[#C9A646] opacity-90 font-light tracking-wide">
              Onde estilo e tradição se encontram.
            </p>

            {/* Simple Rows of Info with Golden Icons */}
            <div className="space-y-5 font-sans text-xs sm:text-sm text-white/90">
              
              {/* Address Row */}
              <div className="flex items-start space-x-3.5">
                <MapPin className="h-5 w-5 text-[#C9A646] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed font-light">
                  {BARBERSHOP_DATA.address.replace(" - ", " — ")}
                </span>
              </div>

              {/* Phone Row */}
              <div className="flex items-center space-x-3.5">
                <Phone className="h-5 w-5 text-[#C9A646] flex-shrink-0" />
                <span className="leading-relaxed font-light">
                  {BARBERSHOP_DATA.phoneDisplay}
                </span>
              </div>

              {/* Hours Row */}
              <div className="flex items-start space-x-3.5">
                <Clock className="h-5 w-5 text-[#C9A646] mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed font-light space-y-1">
                  <p>Seg a Sex · 09h às 20h</p>
                  <p>Sábado · 08h às 18h</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Embedded Map with Dark Style */}
          <div className="lg:col-span-7 relative h-[320px] sm:h-[360px] w-full">
            <div className="absolute inset-0 border border-[#C9A646]/20 bg-[#111111] shadow-2xl overflow-hidden">
              <iframe
                title="Renê Cortes - Localização Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(BARBERSHOP_DATA.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

