import { ShieldAlert, Megaphone, Users } from "lucide-react";
import Reveal from "./Reveal";

export default function RegistrationNotice() {
  return (
    <section className="relative bg-stone-200 py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(252,165,165,0.25)_0%,_transparent_70%)]" />

      <Reveal
        direction="scale"
        className="relative max-w-4xl mx-auto px-4 sm:px-6"
      >
        <div className="relative rounded-3xl bg-gradient-to-br from-red-600 to-red-800 px-6 py-10 sm:px-10 sm:py-14 text-white shadow-2xl shadow-red-300/40 border border-red-500/30 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 bg-white/15 text-red-50 text-xs font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
              <Megaphone size={13} />
              Información importante
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-200" />
              </span>
            </span>
          </div>

          <div className="relative w-fit mx-auto mb-5">
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            <ShieldAlert
              size={50}
              className="relative sm:w-[55px] sm:h-[55px]"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center leading-tight">
            Información Importante
          </h2>

          <p className="text-base sm:text-lg text-center text-red-50/90 leading-relaxed max-w-xl mx-auto">
            El registro actualmente se encuentra habilitado únicamente para
            jugadores pertenecientes al Club Huracán Ciclista.
          </p>

          <div className="flex justify-center mt-6">
            <span className="inline-flex items-center gap-2 text-sm text-red-100/90 bg-black/10 px-4 py-2 rounded-full">
              <Users size={15} />
              Exclusivo para miembros del club
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
