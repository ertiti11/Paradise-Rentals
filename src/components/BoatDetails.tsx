import React, { useState, useEffect } from 'react';
import { Users, Ruler, Anchor, MapPin, Shield } from 'lucide-react';
import BoatSlider from './BoatSlider';
import PassengerForm from './PassengerForm';
import { getBarcoById } from '../utils/api';

interface BoatDetailsProps {
  boatId: number;
}

interface Boat {
  id: number;
  nombre: string;
  tipo: string;
  precio_dia: number;
  capacidad: number;
  thumbnail: string;
  descripcion: string;
  longitud: number;
  disponible: boolean;
  categoria_id: number;
  fotos: { id: number; barco_id: number; url: string }[];
}

interface Passenger {
  id: string;
  name: string;
  surname: string;
  dni: string;
  phone: string;
  email: string;
}

export default function BoatDetails({ boatId }: BoatDetailsProps) {
  const [boat, setBoat] = useState<Boat | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: '1',
      name: '',
      surname: '',
      dni: '',
      phone: '',
      email: '',
    },
  ]);

  useEffect(() => {
    getBarcoById(boatId)
      .then((data) => setBoat(data))
      .catch((error) => console.error('Error fetching boat data:', error));
  }, [boatId]);

  const addPassenger = () => {
    if (passengers.length < (boat?.capacidad || 0)) {
      setPassengers([
        ...passengers,
        {
          id: String(Date.now()),
          name: '',
          surname: '',
          dni: '',
          phone: '',
          email: '',
        },
      ]);
    }
  };

  const removePassenger = (id: string) => {
    setPassengers(passengers.filter((p) => p.id !== id));
  };

  const updatePassenger = (id: string, field: keyof Passenger, value: string) => {
    setPassengers(
      passengers.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ startDate, endDate, passengers });
  };

  if (!boat) {
    return <div>Loading...</div>;
  }

  const images = [boat.thumbnail, ...boat.fotos.map((foto) => foto.url)];

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg overflow-hidden">
      <BoatSlider images={images} />
      
      <div className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{boat.nombre} en {boat.descripcion}</h1>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{boat.descripcion} Marina</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Precio por día</p>
            <p className="text-3xl font-bold text-white">{boat.precio_dia}€</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center text-teal-400 mb-2">
              <Ruler className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Dimensiones</h3>
            </div>
            <p className="text-white">Largo: {boat.longitud}m</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center text-teal-400 mb-2">
              <Users className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Capacidad</h3>
            </div>
            <p className="text-white">{boat.capacidad} personas</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center text-teal-400 mb-2">
              <Anchor className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Tipo</h3>
            </div>
            <p className="text-white">{boat.tipo}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Reserva tu experiencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Fecha de inicio
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Fecha de fin
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>

          <div className="mt-8">
            <PassengerForm
              passengers={passengers}
              maxPassengers={boat.capacidad}
              onAddPassenger={addPassenger}
              onRemovePassenger={removePassenger}
              onUpdatePassenger={updatePassenger}
            />
          </div>

          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center text-teal-400 mb-4">
              <Shield className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Garantías incluidas</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Seguro a todo riesgo</li>
              <li>✓ Asistencia 24/7</li>
              <li>✓ Cancelación gratuita hasta 48h antes</li>
            </ul>
          </div>

          <button 
            type="submit"
            className="w-full mt-8 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </form>
  );
}