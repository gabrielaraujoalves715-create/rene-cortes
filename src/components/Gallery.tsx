/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Sparkles } from "lucide-react";
import corteInfantil from "../assets/images/corte-infantil.png";
interface GalleryItem {
  id: string;
  image: string;
  tag: string;
  title: string;
}

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      image: corteInfantil,
      tag: "Corte",
      title: "Corte com Tesoura & Navalha"
    },
    {
      id: "gal-2",
      image: "/src/assets/images/gallery_hot_towel_1780608023194.png",
      tag: "Toalha Quente",
      title: "Terapia de Barba & Relaxamento"
    },
    {
      id: "gal-3",
      image: "/src/assets/images/gallery_kids_style_1780608058283.png",
      tag: "Kids",
      title: "Estilo Infantil & Degradê"
    },
    {
      id: "gal-4",
      image: "/src/assets/images/gallery_classic_grey_1780608076685.png",
      tag: "Social",
      title: "Corte Social Clássico & Grisalho"
    }
  ];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % galleryItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      activeImageIndex === 0
        ? galleryItems.length - 1
        : activeImageIndex - 1
    );
  };

  return (
    <section id="galeria" className="relative py-14 sm:py-20 bg-[#070707] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header exactly like the screenshot */}
        <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-[#C9A646] text-sm sm:text-base tracking-[0.05em]"
          >
            Nosso trabalho
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-2.5 font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#C9A646] tracking-[0.1em] uppercase"
          >
            GALERIA RENÊ CORTES
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 h-[1px] w-24 bg-[#C9A646]/40 mx-auto origin-center mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-[#B8B8B8] leading-relaxed"
          >
            Momentos reais da nossa barbearia e resultados que falam por si.
          </motion.p>
        </div>

        {/* Gallery Symmetrical 4-Card Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              whileHover={{ y: -6 }}
              className="group relative aspect-[3/4] bg-[#111111] overflow-hidden border border-[#C9A646]/10 rounded-sm cursor-pointer shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Delicate gold interior hover frame */}
              <div className="absolute inset-4 border border-[#C9A646]/0 group-hover:border-[#C9A646]/15 transition-all duration-500 pointer-events-none rounded-none"></div>

              {/* Dark overlay with title and tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="font-sans text-[9px] uppercase tracking-widest text-[#C9A646] mb-1 font-semibold flex items-center">
                  <Sparkles className="h-3 w-3 mr-1" /> {item.tag}
                </span>
                <span className="font-serif text-sm font-bold text-[#F5F1E8] tracking-wide uppercase">
                  {item.title}
                </span>

                {/* Center zoom micro interaction trigger */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/10 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <Maximize2 className="h-3.5 w-3.5 text-[#C9A646]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Top Close Bar */}
            <div className="absolute top-6 right-6 flex items-center space-x-6 z-55">
              <span className="font-sans text-[10px] tracking-widest text-[#B8B8B8] uppercase hidden sm:inline-block">
                Visualizando {activeImageIndex + 1} de {galleryItems.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full border border-white/10 bg-black/60 text-[#F5F1E8] hover:text-[#C9A646] hover:border-[#C9A646]/30 flex items-center justify-center transition-all focus:outline-none cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Stage Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] aspect-[3/4] bg-neutral-900 border border-[#C9A646]/20 rounded-md shadow-[0_0_50px_rgba(201,166,70,0.15)] overflow-hidden cursor-default"
            >
              <img
                src={galleryItems[activeImageIndex].image}
                alt={galleryItems[activeImageIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#C9A646]/10 bg-black/50 text-white hover:text-[#C9A646] hover:bg-black/80 flex items-center justify-center transition-all focus:outline-none cursor-pointer"
              >
                &#10229;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#C9A646]/10 bg-black/50 text-white hover:text-[#C9A646] hover:bg-black/80 flex items-center justify-center transition-all focus:outline-none cursor-pointer"
              >
                &#10230;
              </button>

              {/* Image Legend Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#C9A646] font-semibold mb-1">
                  {galleryItems[activeImageIndex].tag}
                </span>
                <span className="font-serif text-lg font-black text-white tracking-widest uppercase">
                  {galleryItems[activeImageIndex].title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
