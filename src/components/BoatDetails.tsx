import React, { useState } from 'react';
import { Users, Ruler, Anchor, MapPin, Shield } from 'lucide-react';
import BoatSlider from './BoatSlider';
import PassengerForm from './PassengerForm';

interface BoatDetailsProps {
  boat: {
    id: number;
    location: string;
    price: number;
    length: number;
    capacity: number;
    imageUrl: string;
  };
}

interface Passenger {
  id: string;
  name: string;
  surname: string;
  dni: string;
  phone: string;
  email: string;
}

export default function BoatDetails({ boat }: BoatDetailsProps) {
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

  // Simulated multiple images
  const images = [
    boat.imageUrl,
    'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80',
  ];

  const addPassenger = () => {
    if (passengers.length < boat.capacity) {
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

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg overflow-hidden">
      <BoatSlider images={images} />
      
      <div className="p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Yate de Lujo en {boat.location}</h1>
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{boat.location} Marina</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Precio por día</p>
            <p className="text-3xl font-bold text-white">{boat.price}€</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center text-teal-400 mb-2">
              <Ruler className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Dimensiones</h3>
            </div>
            <p className="text-white">Largo: {boat.length}m</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center text-teal-400 mb-2">
              <Users className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Capacidad</h3>
            </div>
            <p className="text-white">{boat.capacity} personas</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center text-teal-400 mb-2">
              <Anchor className="w-5 h-5 mr-2" />
              <h3 className="font-semibold">Tipo</h3>
            </div>
            <p className="text-white">Yate de Motor</p>
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
              maxPassengers={boat.capacity}
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