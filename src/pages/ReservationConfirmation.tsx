import { ReservationCard } from '../components/ReservationCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ReservationConfirmation() {
  // Coge el parámetro de la URL
  const { reservaId } = useParams<{ reservaId: string }>();

  // Petición a la API para obtener los datos de la reserva
  const [reservationData, setReservationData] = useState<any>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reservas/${reservaId}`)
      .then(response => response.json())
      .then(data => {
        setReservationData(data);
        console.log('Reservation data:', data); // Asegúrate de que el console.log esté aquí
      })
      .catch(error => {
        console.error('Error fetching reservation data:', error);
      });
  }, [reservaId]);

  if (!reservationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="w-full max-w-4xl flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gracias por su Reserva</h1>
          <p className="text-gray-600">¡Su aventura en crucero le espera!</p>
        </div>
        
        <ReservationCard {...reservationData} />
      </div>
    </div>
  );
}

export default ReservationConfirmation;