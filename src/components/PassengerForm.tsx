import { X } from 'lucide-react';

interface Passenger {
  id: string;
  name: string;
  surname: string;
  dni: string;
  phone: string;
  email: string;
}

interface PassengerFormProps {
  passengers: Passenger[];
  maxPassengers: number;
  onAddPassenger: () => void;
  onRemovePassenger: (id: string) => void;
  onUpdatePassenger: (id: string, field: keyof Passenger, value: string) => void;
}

export default function PassengerForm({
  passengers,
  maxPassengers,
  onAddPassenger,
  onRemovePassenger,
  onUpdatePassenger,
}: PassengerFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Datos de los pasajeros</h3>
        {passengers.length < maxPassengers && (
          <button
            onClick={onAddPassenger}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Añadir pasajero
          </button>
        )}
      </div>

      {passengers.map((passenger, index) => (
        <div key={passenger.id} className="bg-gray-800 p-6 rounded-lg relative">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-medium text-white">
              {index === 0 ? 'Pasajero Principal' : `Pasajero ${index + 1}`}
            </h4>
            {index !== 0 && (
              <button
                onClick={() => onRemovePassenger(passenger.id)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Nombre
              </label>
              <input
                type="text"
                value={passenger.name}
                onChange={(e) => onUpdatePassenger(passenger.id, 'name', e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Apellidos
              </label>
              <input
                type="text"
                value={passenger.surname}
                onChange={(e) => onUpdatePassenger(passenger.id, 'surname', e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                DNI
              </label>
              <input
                type="text"
                value={passenger.dni}
                onChange={(e) => onUpdatePassenger(passenger.id, 'dni', e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                value={passenger.phone}
                onChange={(e) => onUpdatePassenger(passenger.id, 'phone', e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                value={passenger.email}
                onChange={(e) => onUpdatePassenger(passenger.id, 'email', e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}