export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-red-800 mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="font-semibold mb-2">Mis datos</h2>
          <p className="text-sm text-gray-500">Ver y editar tu información</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="font-semibold mb-2">Certificados</h2>
          <p className="text-sm text-gray-500">Subir certificado médico</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="font-semibold mb-2">Ficha médica</h2>
          <p className="text-sm text-gray-500">Completar formulario de salud</p>
        </div>
      </div>
    </div>
  );
}
