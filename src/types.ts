/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

export interface WhyChooseItem {
  id: string;
  iconName: string; // 'Sparkles' | 'Scissors' | 'Sparkle' | 'ShoppingBag' | etc
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  review: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  tag: string;
  title: string;
}

import serviceHaircut from "./assets/images/service_haircut_1780605734929.png";
import serviceBarba from "./assets/images/service_barba_1780605749035.png";
import serviceCombo from "./assets/images/service_combo_1780605762814.png";
import barberTools from "./assets/images/barber_tools_1780605778088.png";
import barberHero from "./assets/images/barber_hero_1780605718009.png";

export const BARBERSHOP_DATA = {
  name: "Renê Cortes",
  concept: "Barbearia Premium",
  tagline: "Seu estilo começa aqui",
  description: "Cortes premium, barba impecável e atendimento de alto nível",
  whatsappNumber: "5511924629412", // Updated with user phone
  whatsappMessage: "Olá, vim pelo site da Renê Cortes e gostaria de agendar um horário.",
  address: "Rua costa do marfim, 270 — Jardim Sao Manuel, São Paulo - SP, 05871-280",
  phoneDisplay: "5511924629412",
  hours: [
    { days: "Segunda a sexta", time: "09h às 20h" },
    { days: "Sábado", time: "08h às 18h" },
  ],
  services: [
    {
      id: "srv-1",
      title: "Corte Masculino",
      price: "R$ 75",
      description: "Cortes modernos e clássicos executados com precisão e atenção aos detalhes.",
      image: serviceHaircut
    },
    {
      id: "srv-2",
      title: "Barba Completa",
      price: "R$ 60",
      description: "Modelagem, navalha e finalização para uma barba alinhada e bem cuidada.",
      image: serviceBarba
    },
    {
      id: "srv-3",
      title: "Corte + Barba",
      price: "R$ 120",
      description: "A combinação ideal para um visual completo, limpo e refinado com preço especial.",
      image: serviceCombo
    },
    {
      id: "srv-4",
      title: "Acabamento Premium",
      price: "R$ 40",
      description: "Finalização cuidadosa, sobrancelhas e contorno para manter seu estilo sempre alinhado.",
      image: barberTools
    }
  ] as ServiceItem[],
  whyChooseUs: [
    {
      id: "why-1",
      iconName: "User",
      title: "Atendimento personalizado",
      description: "Cada cliente recebe um cuidado único, de acordo com seu estilo e preferência."
    },
    {
      id: "why-2",
      iconName: "Scissors",
      title: "Profissional experiente",
      description: "Barbeiro mestre com anos de experiência."
    },
    {
      id: "why-3",
      iconName: "Sparkles",
      title: "Ambiente profissional",
      description: "Um espaço preparado para oferecer conforto, cuidado e uma experiência completa."
    },
    {
      id: "why-4",
      iconName: "ShoppingBag",
      title: "Produtos de qualidade",
      description: "Utilizamos produtos selecionados para valorizar o corte, a barba e o acabamento final."
    }
  ] as WhyChooseItem[],
  testimonials: [
    {
      id: "test-1",
      name: "Rafael M.",
      review: "Atendimento excelente, corte bem feito e ambiente muito profissional. A melhor experiência de São Paulo.",
      rating: 5
    },
    {
      id: "test-2",
      name: "Lucas A.",
      review: "Profissional extremamente atencioso e resultado sempre impecável. Recomendo de olhos fechados.",
      rating: 5
    },
    {
      id: "test-3",
      name: "Bruno C.",
      review: "Barbearia de confiança. Sempre saio extremamente satisfeito com o corte e o tratamento que recebo.",
      rating: 5
    }
  ] as TestimonialItem[],
  gallery: [
    {
      id: "gal-1",
      image: serviceHaircut,
      tag: "Haircut",
      title: "Degradê Americano"
    },
    {
      id: "gal-2",
      image: serviceBarba,
      tag: "Beard",
      title: "Terapia de Barba"
    },
    {
      id: "gal-3",
      image: serviceCombo,
      tag: "Combo",
      title: "Grooming Premium"
    },
    {
      id: "gal-4",
      image: barberTools,
      tag: "Studio",
      title: "Equipamentos de Precisão"
    },
    {
      id: "gal-5",
      image: barberHero,
      tag: "Ambiente",
      title: "Luxo & Conforto"
    },
    {
      id: "gal-6",
      image: serviceHaircut, // reusing but beautifully styled
      tag: "Clássico",
      title: "Corte Executivo"
    }
  ] as GalleryItem[]
};
