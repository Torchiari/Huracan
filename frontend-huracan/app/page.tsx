import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/fondo-home.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY (ahora cubre TODO bien) */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-2xl text-white font-serif">
        {/* LOGO (tamaño libre) */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/hero3.png"
            alt="Huracán Ciclista"
            width={1000}
            height={1000}
            className="object-contain w-[500px] md:w-[700px] lg:w-[900px]"
            priority
          />
        </div>

        <p className="text-lg md:text-xl text-gray-200 mb-4 tracking-wide">
          Club de Adolfo Gonzales Chaves
        </p>

        <p className="text-sm md:text-lg text-gray-300 mb-10">
          Sumate como socio, gestioná tu información y mantenete conectado con
          el club.
        </p>

        {/* REDES */}
        <div className="flex justify-center gap-6 mt-10 text-5xl">
          <a
            href="https://www.instagram.com/huracanciclista_oficial"
            target="_blank"
            className="hover:scale-110 hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100083158901023"
            target="_blank"
            className="hover:scale-110 hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
}
