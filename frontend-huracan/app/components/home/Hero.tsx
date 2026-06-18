import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

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
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Resplandor rojo detrás del logo: ancla la identidad del club desde el primer instante */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-red-600/30 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 text-white max-w-4xl">
        <Image
          src="/hero3.png"
          alt="Huracán Ciclista"
          width={1000}
          height={1000}
          className="mx-auto w-[350px] md:w-[500px] drop-shadow-[0_0_35px_rgba(220,38,38,0.35)]"
          priority
        />

        <p className="mt-6 text-xl text-gray-200">
          Pasión, historia y compromiso con el fútbol.
        </p>

        <p className="mt-4 text-lg text-gray-300">
          Plataforma oficial para jugadores y miembros del club.
        </p>

        <div className="flex justify-center gap-8 mt-10 text-4xl">
          <a
            href="https://www.instagram.com/huracanciclista_oficial"
            target="_blank"
            className="transition-transform duration-300 hover:scale-125 hover:text-red-500"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100083158901023"
            target="_blank"
            className="transition-transform duration-300 hover:scale-125 hover:text-red-500"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Invita a seguir bajando hacia "Bienvenidos" */}
      <a
        href="#welcome"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/80 hover:text-red-400 transition-colors animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Conocé más</span>
        <ChevronDown size={26} />
      </a>

      {/* La foto se funde en el fondo oscuro de la siguiente sección, sin corte */}
      <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-b from-transparent via-black/70 to-zinc-950 z-10" />
    </section>
  );
}
