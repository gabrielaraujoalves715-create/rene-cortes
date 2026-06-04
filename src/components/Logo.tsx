/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "w-10 h-10", showText = true }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
    >
      <defs>
        {/* Metallic chrome gradient for barber pole caps */}
        <linearGradient id="metal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D8D8D8" />
          <stop offset="30%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#8A8A8A" />
          <stop offset="100%" stopColor="#555555" />
        </linearGradient>

        {/* Golden glow filter for premium title text */}
        <filter id="gold-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="0.8" stdDeviation="0.6" floodColor="#C9A646" floodOpacity="0.4" />
        </filter>

        {/* Clip path for the barber pole stripes */}
        <clipPath id="pole-clip">
          <rect x="2.6" y="6" width="4.8" height="18" rx="0.5" />
        </clipPath>
      </defs>

      {/* 1. Black Circle Background with gold outline */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="#070707"
        stroke="#C9A646"
        strokeWidth="1.2"
      />

      {/* 2. Inner Circular Decorative Accents */}
      {/* Fine golden interior circle */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="#C9A646"
        strokeWidth="0.4"
        opacity="0.3"
      />
      
      {/* Broken/Gapped white circular border */}
      <circle
        cx="50"
        cy="50"
        r="41"
        fill="none"
        stroke="#F5F1E8"
        strokeWidth="0.8"
        strokeDasharray="45 15 25 10 30 15"
        opacity="0.85"
      />

      {/* 3. Crown (Top Left, Rotated) */}
      <g transform="translate(17, 17) rotate(-34)">
        {/* Red crown base & peaks */}
        <path
          d="M 1,11 L 3.5,4.5 L 7.5,8 L 11,2.5 L 14.5,8 L 18.5,4.5 L 21,11 C 16,12.5 6,12.5 1,11 Z"
          fill="#EF4444"
          stroke="#991B1B"
          strokeWidth="0.4"
        />
        {/* Golden jewels elements inside crown */}
        <circle cx="3.5" cy="4.5" r="0.7" fill="#FBBF24" />
        <circle cx="11" cy="2.5" r="0.7" fill="#FBBF24" />
        <circle cx="18.5" cy="4.5" r="0.7" fill="#FBBF24" />
        <circle cx="11" cy="9.5" r="0.6" fill="#FBBF24" />
        <line x1="4" y1="11" x2="18" y2="11" stroke="#991B1B" strokeWidth="0.6" />
      </g>

      {/* 4. Scissors (Top Right, Rotated) */}
      <g transform="translate(68, 14) rotate(34)">
        {/* Scissors rings/handles */}
        <circle cx="5.5" cy="13" r="2.4" fill="none" stroke="#F5F1E8" strokeWidth="1" />
        <circle cx="13.5" cy="13" r="2.4" fill="none" stroke="#F5F1E8" strokeWidth="1" />
        
        {/* Scissor connector shafts */}
        <path d="M 6.5,10.8 L 9.5,8.5" stroke="#F5F1E8" strokeWidth="1.1" />
        <path d="M 12.5,10.8 L 9.5,8.5" stroke="#F5F1E8" strokeWidth="1.1" />

        {/* Gold Pivot Screw */}
        <circle cx="9.5" cy="8.2" r="0.7" fill="#C9A646" />

        {/* Sharp Blades */}
        <path d="M 9,8.2 L 8.2,1.5" stroke="#F5F1E8" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M 10,8.2 L 10.8,1.5" stroke="#F5F1E8" strokeWidth="1.1" strokeLinecap="round" />
      </g>

      {/* 5. Traditional Barber Pole (Right Side, Rotated) */}
      <g transform="translate(81, 38) rotate(12)">
        {/* Upper Chrome Cap */}
        <path d="M 2.6,4 C 2.6,2 7.4,2 7.4,4 L 7.4,6 L 2.6,6 Z" fill="url(#metal-grad)" />
        <circle cx="5" cy="2.5" r="1.3" fill="url(#metal-grad)" />
        
        {/* Stripe patterns with clip definition */}
        <g clipPath="url(#pole-clip)">
          {/* Base white surface */}
          <rect x="2.6" y="6" width="4.8" height="18" fill="#FFFFFF" />
          
          {/* Spirals Red */}
          <path d="M 0,6 L 10,13 M 0,11 L 10,18 M 0,16 L 10,23 M 0,21 L 10,28 M 0,1 L 10,8" stroke="#EF4444" strokeWidth="1.6" />
          
          {/* Spirals Blue */}
          <path d="M 0,8.5 L 10,15.5 M 0,13.5 L 10,20.5 M 0,18.5 L 10,25.5 M 0,23.5 L 10,30.5 M 0,3.5 L 10,10.5" stroke="#1D4ED8" strokeWidth="1.6" />
        </g>
        
        {/* Glass reflection layer */}
        <rect x="2.6" y="6" width="1.2" height="18" fill="#FFFFFF" opacity="0.25" />

        {/* Lower Chrome Cap */}
        <path d="M 2.6,24 L 7.4,24 L 7.4,25.5 C 7.4,27.5 2.6,27.5 2.6,25.5 Z" fill="url(#metal-grad)" />
      </g>

      {/* 6. Typography - "Renê Cortes" */}
      {showText && (
        <g filter="url(#gold-glow)">
          <text
            x="48"
            y="48"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="23"
            fontFamily="'Great Vibes', 'Playfair Display', cursive"
            fontWeight="bold"
            letterSpacing="0.02em"
          >
            Renê
          </text>
          <text
            x="50"
            y="67"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="23"
            fontFamily="'Great Vibes', 'Playfair Display', cursive"
            fontWeight="bold"
            letterSpacing="0.02em"
          >
            Cortes
          </text>
        </g>
      )}
    </svg>
  );
}
