import { useEffect, useState } from 'react';
import ServicioCard from '../components/ServicioCard';
import { Servicio } from '../types';
import Reservas from '../components/Reservas';



export default function Alquileres() {
    const [servicios, setServicios] = useState<Servicio[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchServicios = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/categorias');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Servicio[] = await response.json();
                setServicios(data.data);
                console.log(data)
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchServicios();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>

            <h1>Servicios</h1>
            <Reservas/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {servicios.map((servicio) => (
                    <ServicioCard {...servicio} />
                ))}
            </div>


        </div>
    );
}