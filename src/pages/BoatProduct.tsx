import { useParams, Link } from 'react-router-dom'
import { Users, Clock, Waves } from 'lucide-react'
import { boats } from '../data/boats'

const BoatProduct = () => {
  const { id } = useParams()
  const boat = boats.find(b => b.id === parseInt(id || ''))

  if (!boat) {
    return <div className="container mx-auto py-16 text-center">Boat not found</div>
  }

  return (
    <div className="container mx-auto py-16">od
      <h1>test</h1>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img src={boat.imageUrl} alt={boat.name} className="h-64 w-full object-cover md:w-64" />
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold text-paradise-dark mb-2">{boat.name}</h1>
            <p className="text-gray-600 text-xl mb-4">{boat.type}</p>
            <div className="flex items-center mb-4">
              <Users className="mr-2 text-paradise-blue" />
              <span>Capacity: {boat.capacity} {boat.capacity > 1 ? 'people' : 'person'}</span>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="mr-2 text-paradise-blue" />
              <span>Rental period: Hourly</span>
            </div>
            <div className="flex items-center mb-4">
              <Waves className="mr-2 text-paradise-blue" />
              <span>Suitable for: {boat.suitableFor}</span>
            </div>
            <p className="text-gray-700 mb-6">{boat.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-paradise-blue">${boat.price}/hora</span>
              <button className="bg-coral text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link to="/" className="text-paradise-blue hover:underline">&larr; Volver a los alquileres</Link>
      </div>
    </div>
  )
}

export default BoatProduct