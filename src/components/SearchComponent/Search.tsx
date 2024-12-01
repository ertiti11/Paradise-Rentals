import { useState, useEffect } from "react";
import { getBarcosLocations } from "../../utils/api";
export default function Search() {
  const [localizacion, setLocalizacion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [pasajeros, setPasajeros] = useState(1);

  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log({ localizacion, fechaInicio, fechaFinal, pasajeros });
  };

  const [locations, setLocations] = useState<string[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locs = await getBarcosLocations();
      console.log(locs)
      setLocations(locs);
      console.log(locs);
    };

    fetchLocations();
  }, []);

  return (
    <div className="top-0 left-0 w-full h-full flex items-center justify-center">

        <div className="flex flex-col w-full max-w-lg space-y-4">
          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Localización</label>
            <select
              value={localizacion}
              onChange={(e) => setLocalizacion(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-xl bg-transparent text-white focus:ring-2 focus:ring-teal-500 focus:outline-none max-h-40 overflow-y-auto"
            >
              <option value="">Selecciona una localización</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
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
  );
}
