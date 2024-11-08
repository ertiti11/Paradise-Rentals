import { ArrowLeft } from 'lucide-react';
import BoatDetails from '../components/BoatDetails';

interface BookingPageProps {
  boat: {
    id: number;
    location: string;
    price: number;
    length: number;
    capacity: number;
    imageUrl: string;
  };
  onBack: () => void;
}

export default function BookingPage({ boat, onBack }: BookingPageProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a la búsqueda
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <BoatDetails boat={boat} />
      </main>
    </div>
  );
}