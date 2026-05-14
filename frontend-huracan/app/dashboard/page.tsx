import Link from "next/link";
import { FaUser, FaFileAlt, FaHeartbeat } from "react-icons/fa";

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white mb-6">Inicio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <Link href="/dashboard/profile">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="text-red-800 text-xl mb-2">
              <FaUser />
            </div>

            <h2 className="font-semibold mb-1 text-black/80">Mis datos</h2>
            <p className="text-sm text-black/80">
              Ver y editar tu información personal
            </p>
          </div>
        </Link>

        <Link href="/dashboard/files">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="text-red-800 text-xl mb-2">
              <FaFileAlt />
            </div>

            <h2 className="font-semibold mb-1 text-black/80">Certificados</h2>
            <p className="text-sm text-black/80">Subir documentos médicos</p>
          </div>
        </Link>

        <Link href="/dashboard/files">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer">
            <div className="text-red-800 text-xl mb-2">
              <FaHeartbeat />
            </div>

            <h2 className="font-semibold mb-1 text-black/80">Ficha médica</h2>

            <p className="text-sm text-black/80">
              Subir ficha médica y documentación
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
