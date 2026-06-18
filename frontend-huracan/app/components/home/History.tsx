import { Trophy, Flag, Users } from "lucide-react";
import Reveal from "./Reveal";

export default function History() {
  return (
    <section className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden">
      <Trophy
        size={420}
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-white/[0.03] hidden md:block"
      />
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-red-700/10 rounded-full blur-[140px]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-900/40 mb-5">
            <Flag size={24} className="text-white" />
          </span>
          <h2 className="text-4xl font-bold text-white">Nuestra Historia</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-400 mx-auto mt-4 rounded-full" />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-500 to-red-800" />

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
              A lo largo de los años, Huracán Ciclista ha sido parte fundamental
              de la comunidad de Adolfo Gonzales Chaves, formando generaciones
              de deportistas y fortaleciendo los valores del esfuerzo, la
              disciplina y el compañerismo.
            </p>

            <div className="flex justify-center mt-8">
              <span className="inline-flex items-center gap-2 text-sm text-gray-300 bg-black/20 px-4 py-2 rounded-full">
                <Users size={16} className="text-red-500" />
                Generaciones de deportistas, una sola pasión
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Funde el final de la página hacia el footer oscuro */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/60" />
    </section>
  );
}
