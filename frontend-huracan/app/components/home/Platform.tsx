import { User, Activity, Bell, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const cards = [
  {
    icon: User,
    title: "Perfil Personal",
    text: "Gestioná y actualizá tus datos personales.",
  },
  {
    icon: Activity,
    title: "Información Deportiva",
    text: "Consultá información relacionada con tu actividad.",
  },
  {
    icon: Bell,
    title: "Comunicación",
    text: "Mantenete informado sobre novedades y avisos.",
  },
];

export default function Platform() {
  return (
    <section className="relative bg-stone-200 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(252,165,165,0.2)_0%,_transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-red-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles size={13} />
            Todo en un solo lugar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Plataforma Digital
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-400 mx-auto mt-4 rounded-full" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={140 * i} direction="up">
              <div className="relative h-full bg-stone-50 border border-red-100 p-7 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-red-200/60 hover:border-red-200 hover:-translate-y-2 transition-all duration-300">
                <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-5 shadow-md shadow-red-200/60">
                  <card.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
