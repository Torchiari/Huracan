import { Flag, Users, Balloon } from "lucide-react";
import Reveal from "./Reveal";

export default function History() {
  return (
    <section className="relative bg-stone-100 py-24 md:py-32 overflow-hidden">
      <Balloon
        size={260}
        className="absolute -bottom-8 -left-8 text-red-200 hidden md:block"
      />
      <Balloon
        size={140}
        className="absolute top-10 right-10 text-red-200/70 hidden lg:block"
      />
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-red-200/50 rounded-full blur-[140px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-200/60 mb-5">
            <Flag size={24} className="text-white" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nuestra Historia
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-400 mx-auto mt-4 rounded-full" />
        </Reveal>

        <Reveal delay={160}>
          <div className="relative bg-stone-50 border border-red-100 rounded-3xl px-6 py-9 sm:px-10 sm:py-12 shadow-sm shadow-red-100/40 overflow-hidden">
            <span className="absolute left-0 top-8 bottom-8 w-1.5 rounded-full bg-gradient-to-b from-red-600 to-red-400" />

            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center pl-4 sm:pl-0">
              A lo largo de los años, Huracán Ciclista ha sido parte fundamental
              de la comunidad de Adolfo Gonzales Chaves, formando generaciones
              de deportistas y fortaleciendo los valores del esfuerzo, la
              disciplina y el compañerismo.
            </p>

            <div className="flex justify-center mt-8">
              <span className="inline-flex items-center gap-2 text-sm text-gray-500 bg-stone-200 border border-stone-300 px-4 py-2 rounded-full">
                <Users size={15} className="text-red-500" />
                Generaciones de deportistas, una sola pasión
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
