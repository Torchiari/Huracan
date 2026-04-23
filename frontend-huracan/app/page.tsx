export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Bienvenido a Huracán Ciclista
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Plataforma oficial del club. Registrate como socio, subí tu certificado
        y mantenete al día con todas las actividades.
      </p>

      <div className="flex gap-4">
        <a
          href="/register"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Hacete socio
        </a>

        <a
          href="/login"
          className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Iniciar sesión
        </a>
      </div>
    </div>
  );
}
