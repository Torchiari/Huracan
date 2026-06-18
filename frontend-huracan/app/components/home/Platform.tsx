export default function Platform() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Plataforma Digital
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-4">Perfil Personal</h3>

            <p className="text-gray-600">
              Gestioná y actualizá tus datos personales.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-4">Información Deportiva</h3>

            <p className="text-gray-600">
              Consultá información relacionada con tu actividad.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-4">Comunicación</h3>

            <p className="text-gray-600">
              Mantenete informado sobre novedades y avisos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
