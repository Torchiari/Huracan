import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

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

      <div className="relative z-10 text-white max-w-4xl">
        <Image
          src="/hero3.png"
          alt="Huracán Ciclista"
          width={1000}
          height={1000}
          className="mx-auto w-[350px] md:w-[500px]"
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
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100083158901023"
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </section>
  );
}
