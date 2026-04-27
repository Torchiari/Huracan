"use client";

import { useEffect, useRef, useState } from "react";
import { uploadFile, getMyFiles, deleteFile } from "@/services/files";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Files() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const fetchFiles = async () => {
    try {
      const res = await getMyFiles();
      setFiles(res.data);
    } catch {
      console.log("Error cargando archivos");
    }
  };

  useEffect(() => {
    if (user) {
      setFiles([]);
      fetchFiles();
    } else {
      setFiles([]);
    }
  }, [user]);

  const handleUpload = async () => {
    if (!file) return alert("Seleccioná un archivo");

    setLoading(true);

    try {
      await uploadFile(file);
      setFile(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }

      fetchFiles();
    } catch {
      alert("Error al subir archivo");
    }

    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar archivo?")) return;
    await deleteFile(id);
    fetchFiles();
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-red-800 mb-6">
        Certificados médicos
      </h1>

      {/* UPLOAD */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,image/*"
            id="fileUpload"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="bg-gray-200 text-black px-5 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Elegir archivo
          </button>

          <div className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 text-sm truncate">
            {file ? file.name : "No se ha seleccionado ningún archivo"}
          </div>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-red-900 transition disabled:opacity-50"
          >
            {loading ? "Subiendo..." : "Subir archivo"}
          </button>
        </div>
      </div>

      {/* LISTADO */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="font-semibold mb-4 text-gray-800">Archivos subidos</h2>

        {files.length === 0 ? (
          <p className="text-gray-500 text-sm">No tenés archivos cargados</p>
        ) : (
          <div className="space-y-4">
            {files.map((f) => (
              <div
                key={f.id}
                className="border border-gray-200 p-4 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
              >
                <div>
                  <p className="font-medium text-gray-800 break-all">
                    📄 {f.filename}
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <a
                    href={f.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 border rounded-full text-black hover:bg-gray-100"
                  >
                    Ver
                  </a>

                  <button
                    onClick={() => handleDelete(f.id)}
                    className="text-sm px-3 py-1 bg-red-800 text-white rounded-full hover:bg-red-900"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
