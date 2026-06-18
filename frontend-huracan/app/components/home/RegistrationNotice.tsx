import { ShieldAlert, Megaphone, Users } from "lucide-react";
import Reveal from "./Reveal";

export default function RegistrationNotice() {
  return (
    <section className="relative bg-zinc-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-700/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-[120px]" />

      <Reveal direction="scale" className="relative max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-red-700 to-red-900 px-8 py-12 md:px-14 text-white shadow-2xl shadow-red-950/50 border border-red-500/20 transition-transform duration-300 hover:-translate-y-1">
          <span className="inline-flex items-center gap-2 bg-black/20 text-red-100 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            <Megaphone size={14} />
            Información importante
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-200" />
            </span>
          </span>

          <div className="relative w-fit mx-auto mb-5">
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            <ShieldAlert size={55} className="relative" />
          </div>

          <h2 className="text-3xl font-bold mb-4 text-center">
            Información Importante
          </h2>

          <p className="text-lg text-center text-red-50/90 leading-relaxed">
            El registro actualmente se encuentra habilitado únicamente para
            jugadores pertenecientes al Club Huracán Ciclista.
          </p>

          <div className="flex justify-center mt-6">
            <span className="inline-flex items-center gap-2 text-sm text-red-100/90 bg-black/15 px-4 py-2 rounded-full">
              <Users size={16} />
              Exclusivo para miembros del club
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
