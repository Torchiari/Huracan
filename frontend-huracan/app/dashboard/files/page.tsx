export default function Files() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-red-800 mb-6">Certificados</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <input type="file" />

        <button className="mt-4 bg-red-800 text-white px-4 py-2 rounded-full">
          Subir archivo
        </button>
      </div>
    </div>
  );
}
