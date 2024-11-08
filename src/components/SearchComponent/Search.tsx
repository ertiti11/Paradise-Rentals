import { useState } from "react";
// import "./styles.css"; // Asegúrate de tener las clases necesarias para el glassmorphism

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
    <div className=" top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-full shadow-lg flex items-center space-x-4">
        <div className="flex flex-col">
          <label className="text-white">Barco</label>
          <input
            type="text"
            value={barco}
            onChange={(e) => setBarco(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Fecha Inicio</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Fecha Final</label>
          <input
            type="date"
            value={fechaFinal}
            onChange={(e) => setFechaFinal(e.target.value)}
            className="p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Pasajeros</label>
          <input
            type="number"
            value={pasajeros}
            onChange={(e) => setPasajeros(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded mt-1"
            min="1"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-full mt-4"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}