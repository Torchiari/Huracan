import { Heart, Users, Target, Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Resplandor ambiente: continúa la atmósfera que dejó el Hero */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-700/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <Reveal direction="scale">
          <div className="relative bg-white rounded-[40px] shadow-2xl border border-white/10 px-8 py-14 md:px-14 text-center">
            {/* Insignia flotante */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-900/40 ring-4 ring-white">
              <Heart size={26} className="text-white" fill="currentColor" />
            </div>

            <Quote
              size={64}
              className="absolute top-6 right-6 text-red-100 hidden sm:block"
            />

            <span className="block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-red-700/80 mb-3">
              Club Huracán Ciclista
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-red-700 mb-6">
              Bienvenidos
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-400 mx-auto mb-8 rounded-full" />

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Huracán Ciclista es una institución deportiva con una larga
              trayectoria en Adolfo Gonzales Chaves, promoviendo los valores del
              deporte, el compromiso y el trabajo en equipo.
            </p>
          </div>
        </Reveal>

        {/* Hace eco de la frase del Hero ("Pasión, historia y compromiso"), tejiendo el hilo entre ambas secciones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10">
          {[
            { icon: Heart, label: "Pasión" },
            { icon: Users, label: "Comunidad" },
            { icon: Target, label: "Compromiso" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={150 * (i + 1)}>
              <div className="flex items-center gap-3 justify-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-5 py-4 hover:border-red-600/60 hover:bg-white/10 transition-colors">
                <item.icon size={20} className="text-red-500" />
                <span className="text-white/90 font-medium">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
