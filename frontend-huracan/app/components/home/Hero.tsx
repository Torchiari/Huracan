"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { ChevronDown, Balloon } from "lucide-react";

function slowScrollTo(targetId: string, duration = 1400) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/fondo-home.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55 z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[480px] md:h-[480px] bg-red-600/30 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 text-white max-w-4xl">
        <Image
          src="/hero3.png"
          alt="Huracán Ciclista"
          width={1000}
          height={1000}
          className="mx-auto w-[280px] sm:w-[350px] md:w-[480px] drop-shadow-[0_0_35px_rgba(220,38,38,0.35)]"
          priority
        />

        <p className="mt-5 text-lg sm:text-xl text-gray-200 px-2">
          Pasión, historia y compromiso con el fútbol.
        </p>
        <p className="mt-3 text-base sm:text-lg text-gray-300 px-2">
          Plataforma oficial para jugadores y miembros del club.
        </p>

        <div className="flex justify-center gap-8 mt-8 text-3xl md:text-4xl">
          <a
            href="https://www.instagram.com/huracanciclista_oficial"
            target="_blank"
            className="transition-transform duration-300 hover:scale-125 hover:text-red-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100083158901023"
            target="_blank"
            className="transition-transform duration-300 hover:scale-125 hover:text-red-400"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Botón scroll lento hacia la siguiente sección */}
      <button
        onClick={() => slowScrollTo("welcome")}
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-28 md:bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/80 hover:text-red-300 transition-colors animate-bounce cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Conocé más</span>
        <ChevronDown size={24} />
      </button>

      <Balloon
        size={64}
        className="absolute bottom-10 right-6 md:right-12 z-10 text-red-400/30 hidden sm:block"
      />

      {/* Degradado inferior: la foto se funde hacia el fondo de la siguiente sección */}
      <div className="absolute inset-x-0 bottom-0 h-56 md:h-72 bg-gradient-to-b from-transparent via-black/50 to-stone-200 z-10" />
    </section>
  );
}
