import { Heart, Users, Target, Quote, Balloon } from "lucide-react";
import Reveal from "./Reveal";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative bg-stone-200 py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute -top-20 right-0 w-72 h-72 bg-red-200/70 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-red-100 rounded-full blur-[80px]" />

      <Balloon
        size={260}
        className="absolute -right-10 top-1/2 -translate-y-1/2 text-red-200 hidden lg:block"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal direction="scale">
          <div className="relative bg-stone-50 rounded-[36px] shadow-xl shadow-red-200/50 border border-red-100 px-6 pt-16 pb-12 md:px-14 md:pt-20 md:pb-14 text-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-300/40 ring-4 ring-stone-200">
              <Heart size={26} className="text-white" fill="currentColor" />
            </div>

            <Quote
              size={56}
              className="absolute top-6 right-6 text-red-100 hidden sm:block"
            />

            <span className="block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-red-500 mb-3">
              Club Huracán Ciclista
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-red-700 mb-5">
              Bienvenidos
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-400 mx-auto mb-7 rounded-full" />

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Huracán Ciclista es una institución deportiva con una larga
              trayectoria en Adolfo Gonzales Chaves, promoviendo los valores del
              deporte, el compromiso y el trabajo en equipo.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-8">
          {[
            { icon: Heart, label: "Pasión" },
            { icon: Users, label: "Comunidad" },
            { icon: Target, label: "Compromiso" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={140 * (i + 1)}>
              <div className="flex items-center gap-3 justify-center bg-stone-50 border border-red-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-red-300 hover:-translate-y-1 transition-all duration-300">
                <item.icon size={20} className="text-red-600 shrink-0" />
                <span className="text-gray-800 font-semibold">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
