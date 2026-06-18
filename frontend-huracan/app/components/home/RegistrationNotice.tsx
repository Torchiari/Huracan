import { ShieldAlert } from "lucide-react";

export default function RegistrationNotice() {
  return (
    <section className="bg-black py-20">
      <div
        className="
  max-w-4xl
  mx-auto
  px-8
  py-10
  rounded-3xl
  bg-gradient-to-r
  from-red-700
  to-red-900
  text-white
  shadow-2xl
"
      >
        <ShieldAlert size={55} className="mx-auto mb-5" />
        <h2 className="text-3xl font-bold mb-4">Información Importante</h2>

        <p className="text-lg">
          El registro actualmente se encuentra habilitado únicamente para
          jugadores pertenecientes al Club Huracán Ciclista.
        </p>
      </div>
    </section>
  );
}
