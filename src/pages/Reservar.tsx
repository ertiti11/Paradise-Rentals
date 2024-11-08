import { useState } from 'react';
import { Ship } from 'lucide-react';
import BoatCard from '../components/BoatCard';
import Filters from '../components/Filters';
import BookingPage from './BookingPage';

const BOATS = [
  {
    id: 1,
    location: 'Málaga',
    price: 1000,
    length: 42,
    capacity: 8,
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    location: 'Málaga',
    price: 1200,
    length: 45,
    capacity: 10,
    imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    location: 'Málaga',
    price: 900,
    length: 38,
    capacity: 6,
    imageUrl: 'https://images.unsplash.com/photo-1588401667987-e6292c86cbec?auto=format&fit=crop&q=80',
  },
];

function App() {
  const [filteredBoats, setFilteredBoats] = useState(BOATS);
  const [selectedBoat, setSelectedBoat] = useState<typeof BOATS[0] | null>(null);

  const handlePriceChange = (range: [number, number]) => {
    setFilteredBoats(
      BOATS.filter((boat) => boat.price >= range[0] && boat.price <= range[1])
    );
  };

  const handleLengthChange = (length: number) => {
    setFilteredBoats(BOATS.filter((boat) => boat.length <= length));
  };

  const handleTypeChange = (types: string[]) => {
    if (types.length === 0) {
      setFilteredBoats(BOATS);
    } else {
      setFilteredBoats(BOATS.filter((boat) => types.includes(boat.type)));
    }
  };

  const handleCapacityChange = (range: [number, number]) => {
    setFilteredBoats(
      BOATS.filter(
        (boat) => boat.capacity >= range[0] && boat.capacity <= range[1]
      )
    );
  };

  const handleBooking = (boat: typeof BOATS[0]) => {
    setSelectedBoat(boat);
  };

  if (selectedBoat) {
    return (
      <BookingPage 
        boat={selectedBoat} 
        onBack={() => setSelectedBoat(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Ship className="h-8 w-8 text-teal-500" />
            <h1 className="text-2xl font-bold text-white">Boat Rentals</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Sobre nosotros</a>
            <a href="#" className="text-gray-300 hover:text-white">Barcos</a>
            <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <Filters
              onPriceChange={handlePriceChange}
              onLengthChange={handleLengthChange}
              onTypeChange={handleTypeChange}
              onCapacityChange={handleCapacityChange}
            />
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBoats.map((boat) => (
                <BoatCard 
                  key={boat.id} 
                  {...boat} 
                  onBook={() => handleBooking(boat)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;