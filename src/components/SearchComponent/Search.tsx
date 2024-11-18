import { useState } from "react";

export default function Search() {
  const [barco, setBarco] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [pasajeros, setPasajeros] = useState(1);

  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log({ barco, fechaInicio, fechaFinal, pasajeros });
  };

  return (
    <div className="top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col items-center space-y-6">
        <h2 className="text-2xl text-white font-semibold">Busca tu barco</h2>

        <div className="flex flex-col w-full max-w-lg space-y-4">
          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Barco</label>
            <input
              type="text"
              value={barco}
              onChange={(e) => setBarco(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-transparent text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Fecha Inicio</label>
            <input
              type="date"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-transparent text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Fecha Final</label>
            <input
              type="date"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-transparent text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Pasajeros</label>
            <input
              type="number"
              value={pasajeros}
              onChange={(e) => setPasajeros(Number(e.target.value))}
              className="p-3 border-2 border-gray-300 rounded-xl bg-transparent text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              min="1"
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-teal-500 text-white p-3 rounded-xl w-full hover:bg-teal-600 transition-all"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
