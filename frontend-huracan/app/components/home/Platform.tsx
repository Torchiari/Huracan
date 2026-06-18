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
    <section className="relative bg-zinc-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-700/10 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-red-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <Sparkles size={14} />
            Todo en un solo lugar
          </span>
          <h2 className="text-4xl font-bold text-white">Plataforma Digital</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-400 mx-auto mt-4 rounded-full" />
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/40 to-transparent" />

          {cards.map((card, i) => (
            <Reveal key={card.title} delay={150 * i} direction="up">
              <div className="relative h-full bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-red-900/30 hover:border-red-600/50 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center mb-5 shadow-md shadow-red-900/40">
                  <card.icon size={26} className="text-white" />
                </div>

                <h3 className="font-bold text-xl mb-2 text-white">
                  {card.title}
                </h3>

                <p className="text-gray-300">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
