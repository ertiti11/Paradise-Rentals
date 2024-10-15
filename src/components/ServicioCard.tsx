import { Link } from 'react-router-dom'

export default function ServicioCard(boat) {
    console.log(boat)
    return (
        <div key={boat.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={boat.url_imagen} alt={boat.nombre} className="w-full h-56 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-paradise-dark">{boat.nombre}</h3>
                <p className="text-gray-600 mb-2">{boat.categoria_id}</p>
                <p className="text-gray-600 mb-2">Capacity: {boat.capacidad} {boat.capacidad > 1 ? 'personas' : 'persona'}</p>
                <p className="text-paradise-blue font-bold text-xl mb-4">{boat.precio_por_hora}€/hour</p>
                <Link to={`/boat/${boat.id}`} className="block w-full bg-paradise-blue text-white py-3 rounded-full text-center font-semibold hover:bg-paradise-dark transition duration-300">
                    Rent Now
                </Link>
                
            </div>
        </div>
    )
}
