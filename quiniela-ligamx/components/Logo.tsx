"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "light" | "footer";
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "default",
  showTagline = true,
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const isLight = variant === "light" || variant === "footer";
  const primaryTextColor = isLight ? "text-white" : "text-pure-navy";
  const secondaryTextColor = isLight ? "text-slate-300" : "text-pure-blue";
  const accentColor = "text-pure-amber";
  const tapColor = isLight ? "#FFFFFF" : "#0A2540";
  const tapBody = isLight ? "#94A3B8" : "#1B3A5F";

  return (
    <Link
      href="#inicio"
      className={`inline-flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01] ${className}`}
      aria-label="PureTap Monterrey - Inicio"
    >
      {/* Intento de renderizar imagen real si se agrega /logo-puretap.png */}
      {!imageError ? (
        <div className="relative h-12 w-auto min-w-[180px] max-w-[240px] flex items-center">
          <Image
            src="/logo-puretap.svg"
            alt="PureTap - Limpieza y Equipo Cervecero"
            width={240}
            height={58}
            className="h-11 w-auto object-contain transition-opacity duration-200"
            priority
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        /* Fallback Vectorial Fiel con grifo, gota dorada y tipografía oficial */
        <div className="flex items-center gap-3">
          {/* Grifo con gota dorada */}
          <div className="relative flex-shrink-0 w-11 h-11 flex items-center justify-center">
            <svg
              viewBox="0 0 70 85"
              className="w-full h-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base del grifo */}
              <rect x="2" y="44" width="10" height="22" rx="2" fill={tapColor} />
              <path d="M12 48 L26 48 Q30 48 30 52 L30 56 Q30 60 26 60 L12 60 Z" fill={tapBody} />
              
              {/* Cuerpo del grifo */}
              <path d="M30 50 L40 50 Q43 50 44 54 L46 62 Q46 66 42 68 L34 68 Q31 66 31 62 L30 50 Z" fill={tapColor} />
              <path d="M36 64 L38 75 Q38 77 36 77 L34 77 Q32 77 33 75 L35 64 Z" fill={tapBody} />
              
              {/* Palanca vertical */}
              <rect x="32" y="38" width="8" height="8" rx="1.5" fill={tapColor} />
              <rect x="34" y="42" width="4" height="4" fill="#D4A017" />
              <path d="M34 38 L35 12 Q35 9 37 9 Q39 9 39 12 L39 38 Z" fill={tapColor} />
              <ellipse cx="37" cy="9" rx="3.5" ry="4" fill={tapBody} />

              {/* Gota ámbar con remolino blanco */}
              <g transform="translate(29, 68)">
                <path
                  d="M6 0 C6 0 0 6 0 10.5 C0 13.5 2.7 16 6 16 C9.3 16 12 13.5 12 10.5 C12 6 6 0 6 0 Z"
                  fill="url(#logoAmberG)"
                />
                <path
                  d="M5.5 12.8 C4 12.8 3.5 11.5 3.8 10.5 C4.2 9.4 5.5 9.1 6.5 9.8 C7.4 10.5 7.8 11.8 6.8 12.5 C6.2 12.9 5.8 12.8 5.5 12.8 Z"
                  fill="#FFFFFF"
                />
              </g>

              <defs>
                <linearGradient id="logoAmberG" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E8B923" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Textos del Logo */}
          <div className="flex flex-col leading-tight">
            <span
              className={`text-[9px] font-bold tracking-[0.22em] uppercase ${secondaryTextColor}`}
            >
              Monterrey, NL
            </span>
            <span
              className={`text-2xl font-black tracking-tight ${primaryTextColor} flex items-baseline`}
            >
              PURE<span className={accentColor}>TAP</span>
            </span>
            {showTagline && (
              <span
                className={`text-[8px] font-bold tracking-[0.16em] uppercase ${secondaryTextColor}`}
              >
                Limpieza y Equipo Cervecero
              </span>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
