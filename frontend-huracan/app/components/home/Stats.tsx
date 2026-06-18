export default function Stats() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-red-500">100+</h3>
            <p>Jugadores</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-500">10+</h3>
            <p>Categorías</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-500">80+</h3>
            <p>Años</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-500">1</h3>
            <p>Gran Pasión</p>
          </div>
        </div>
      </div>
    </section>
  );
}
