/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, Award, Sparkles, Scissors } from "lucide-react";
import { ReactNode } from "react";

interface WhyChooseItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const whyChooseItems: WhyChooseItem[] = [
    {
      id: "why-1",
      icon: <Users className="h-6 w-6 text-[#070707] stroke-[1.75]" />,
      title: "Atendimento personalizado",
      description: "Cada cliente recebe um cuidado único e exclusivo.",
    },
    {
      id: "why-2",
      icon: <Award className="h-6.5 w-6.5 text-[#070707] stroke-[1.75]" />,
      title: "Profissional experiente",
      description: "Barbeiro mestre com anos de experiência.",
    },
    {
      id: "why-3",
      icon: <Sparkles className="h-6 w-6 text-[#070707] stroke-[1.75]" />,
      title: "Ambiente premium",
      description: "Espaço sofisticado para sua experiência completa.",
    },
    {
      id: "why-4",
      icon: <Scissors className="h-6 w-6 text-[#070707] stroke-[1.75]" />,
      title: "Produtos de alta qualidade",
      description: "As melhores marcas para o cuidado masculino.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
      },
    },
  };

  return (
    <section
      id="experiencia"
      className="relative py-14 sm:py-20 bg-[#070707] overflow-hidden"
    >
      {/* 1. Organic Golden Marble Veins (Cracks) Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          {/* Vein 1 starting top left traveling down-right */}
          <path
            d="M -10,100 L 110,180 L 150,150 L 260,260 L 310,230 L 480,360 L 550,290 L 720,460 L 850,400 L 1020,540 L 1090,510 L 1220,620 M 150,150 L 120,230 L 180,260 M 480,360 L 450,450 M 720,460 L 700,530"
            fill="none"
            stroke="#C9A646"
            strokeWidth="0.6"
            opacity="0.8"
          />
          {/* Vein 2 starting top center traveling diagonally down-right */}
          <path
            d="M 500,-10 L 570,110 L 660,80 L 740,190 L 780,160 L 920,280 L 1030,240 L 1150,360 M 740,190 L 710,260 L 760,290"
            fill="none"
            stroke="#E2C76B"
            strokeWidth="0.4"
            opacity="0.7"
          />
          {/* Vein 3 starting bottom-left traveling right */}
          <path
            d="M 120,680 L 220,730 L 310,690 L 440,790 L 510,750 L 680,820"
            fill="none"
            stroke="#A37F2F"
            strokeWidth="0.5"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* 2. Soft golden radial ambient backlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A646]/3 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-gold-base text-sm sm:text-base tracking-[0.05em] capitalize"
          >
            Por que nos escolher
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-2.5 font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#F5F1E8] tracking-[0.1em] uppercase"
          >
            A Experiência <span className="text-gold-gradient">Renê Cortes</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 h-[1px] w-28 bg-[#C9A646] mx-auto origin-center opacity-60"
          ></motion.div>
        </div>

        {/* 4 Cards Symmetrical Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {whyChooseItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 15px 35px rgba(201, 166, 70, 0.08)",
                borderColor: "rgba(201, 166, 70, 0.4)",
              }}
              className="relative p-8 bg-[#111111]/80 backdrop-blur-md border border-[#C9A646]/10 rounded-sm transition-all duration-300 hover:bg-[#111111]/95 overflow-hidden flex flex-col items-center justify-start text-center group"
            >
              {/* Circular Gold Icon Badge Container */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#E2C76B] via-[#C9A646] to-[#A37F2F] flex items-center justify-center mb-6 relative group-hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(201,166,70,0.25)]">
                {/* Thin concentric inner circle ring for extra luxury detail */}
                <div className="absolute inset-[3px] rounded-full border border-[#070707]/15"></div>
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="font-serif text-sm sm:text-base font-bold text-[#F5F1E8] tracking-[0.1em] uppercase mb-4 transition-colors duration-300 group-hover:text-[#E2C76B]">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-xs sm:text-[0.85rem] text-[#B8B8B8] leading-relaxed transition-colors duration-300 group-hover:text-[#F5F1E8]/90">
                {item.description}
              </p>

              {/* Subtle gold line bottom indicator */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A646]/30 to-transparent transform scale-x-0 group-hover:scale-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
