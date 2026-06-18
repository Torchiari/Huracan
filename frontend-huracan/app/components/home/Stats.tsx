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
    <section className="relative bg-zinc-950 py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:28px_28px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-700/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-600/15 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={120 * i} direction="up">
              <div className="md:border-l md:first:border-l-0 border-white/10 px-2 md:px-4">
                <stat.icon size={26} className="mx-auto mb-3 text-red-500" />
                <h3 className="text-4xl md:text-5xl font-bold text-red-500">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-300 mt-1">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
