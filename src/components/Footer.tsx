/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BARBERSHOP_DATA } from "../types";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070707] border-t border-[#111111]/80 py-6 sm:py-8 relative overflow-hidden text-center">
      {/* Decorative Golden alignment line from image */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-[#C9A646]/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="font-sans text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[#C9A646]/80">
          &copy; {currentYear} RENÊ CORTES &middot; TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
}
