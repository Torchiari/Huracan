import { Users, Layers, Calendar, Heart } from "lucide-react";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Jugadores" },
  { icon: Layers, value: 10, suffix: "+", label: "Categorías" },
  { icon: Calendar, value: 80, suffix: "+", label: "Años" },
  { icon: Heart, value: 1, suffix: "", label: "Gran Pasión" },
];

export default function Stats() {
  return (
    <section className="relative bg-red-800 py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:28px_28px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-950/50 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            El Club en Números
          </h2>
          <div className="w-20 h-1 bg-white/40 mx-auto mt-4 rounded-full" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 text-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={120 * i} direction="up">
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-4 py-7 sm:py-8 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <stat.icon size={26} className="mx-auto mb-3 text-red-200" />
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-red-100 mt-1.5 text-sm sm:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
