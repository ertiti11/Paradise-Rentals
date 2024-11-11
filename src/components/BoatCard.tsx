import { Anchor } from 'lucide-react';

interface BoatCardProps {
  location: string;
  precio_dia: number;
  longitud: number;
  capacidad: number;
  url_imagen: string;
  disponible: boolean;
  onBook: () => void;
}

export default function BoatCard({ 
  location, 
  precio_dia, 
  longitud, 
  capacidad, 
  url_imagen,
  disponible,
  onBook 
}: BoatCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img 
          src={url_imagen} 
          alt="Boat" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 bg-gray-900 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{location}</h3>
          <Anchor className="w-5 h-5 text-teal-400" />
        </div>
        <div className="space-y-1 text-sm text-gray-300">
          <p>Largo: {longitud} m</p>
          <p>Capacidad: {capacidad} personas</p>
          {/* si barco disponible esto y si no en rojo*/}
          {disponible ? (
          <p className="text-teal-400">Barco disponible</p>
        ) : (
            <p className="text-red-400">Barco no disponible</p>
          )}
          {/* <p>Barco disponible</p> */}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Desde</p>
            <p className="text-xl font-bold">{precio_dia}€ <span className="text-sm font-normal">/día</span></p>
          </div>
          <button 
            onClick={onBook}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}