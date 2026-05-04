import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-4">
          <Image
            src="/escudo-blanco.png"
            alt="Logo Huracán Ciclista Club"
            width={40}
            height={40}
            className="object-contain"
          />

          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
              Huracán Ciclista Club
            </h3>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Contacto
          </p>

          <div className="flex gap-4 text-sm">
            <Link
              href="https://www.instagram.com/huracanciclista_oficial"
              target="_blank"
              className="text-white hover:text-red-500 transition"
            >
              Instagram
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100083158901023"
              target="_blank"
              className="text-white hover:text-red-500 transition"
            >
              Facebook
            </Link>
          </div>

          <p className="text-xs text-gray-500 mt-1">
            Desarrollado por Danel Torchiari
          </p>
        </div>
      </div>
    </footer>
  );
}
