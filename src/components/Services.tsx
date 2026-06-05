/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { BARBERSHOP_DATA } from "../types";
import serviceHaircut from "../assets/images/service_haircut_1780605734929.png";
import serviceBarba from "../assets/images/service_barba_1780605749035.png";
import serviceCombo from "../assets/images/service_combo_1780605762814.png";
import barberTools from "../assets/images/barber_tools_1780605778088.png";

export default function Services() {
  const services = [
    {
      id: "srv-1",
      title: "Corte Masculino",
      description: "Cortes modernos e clássicos executados com precisão milimétrica.",
      image: serviceHaircut
    },
    {
      id: "srv-2",
      title: "Barba Completa",
      description: "Modelagem, navalha quente e finalização impecável.",
      image: serviceBarba
    },
    {
      id: "srv-3",
      title: "Corte + Barba",
      description: "A combinação perfeita para um visual completo e refinado.",
      image: serviceCombo
    },
    {
      id: "srv-4",
      title: "Acabamento Premium",
      description: "Tratamentos exclusivos com produtos de alta performance.",
      image: barberTools
    }
  ];

  const whatsappNumber = "5511924629412";
  const whatsappMessage = "Olá, vim pelo site da Renê Cortes e gostaria de agendar um horário.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="servicos" className="relative py-14 sm:py-20 bg-[#070707] overflow-hidden">
      {/* Subtle details background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full border-x border-[#111111]/40 pointer-events-none"></div>

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
            Nossos serviços
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#F5F1E8] tracking-tight uppercase"
          >
            Arte & <span className="text-gold-gradient">Precisão</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-[1px] w-24 bg-[#C9A646] mx-auto origin-center"
          ></motion.div>
        </div>

        {/* Services Symmetrical 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#111111]/90 backdrop-blur-md border border-[#C9A646]/10 rounded-lg overflow-hidden shadow-2xl hover:border-[#C9A646]/35 transition-all duration-500 flex flex-col"
            >
              {/* Image Section (full width aspect ratio matching design) */}
              <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9]">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Visual blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/45 to-transparent"></div>
              </div>

              {/* Text / Desc Details Column */}
              <div className="p-6 sm:p-8 flex flex-col justify-start bg-[#111111] flex-1">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#C9A646] tracking-[0.1em] uppercase mb-3.5 transition-colors duration-300 group-hover:text-[#E2C76B]">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Accent border representing premium gold finish on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A646] to-transparent transform scale-x-0 group-hover:scale-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
