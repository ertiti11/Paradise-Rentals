import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { boats, BoatCategory } from '../data/boats'

const BoatList = () => {
  const [selectedCategory, setSelectedCategory] = useState<BoatCategory | 'All'>('All')

  const categories: (BoatCategory | 'All')[] = ['All', ...new Set(boats.map(boat => boat.category))]

  const filteredBoats = selectedCategory === 'All' 
    ? boats 
    : boats.filter(boat => boat.category === selectedCategory)

  return (
    <div id="boats" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-paradise-dark">Nuestros alquileres</h2>
      <div className="flex justify-center mb-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            className={`mx-2 px-6 py-2 rounded-full mb-2 ${
              selectedCategory === category ? 'bg-paradise-blue text-white' : 'bg-white text-paradise-dark border border-paradise-blue'
            } hover:bg-paradise-dark hover:text-white transition duration-300`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBoats.map((boat) => (
          <div key={boat.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={boat.imageUrl} alt={boat.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-paradise-dark">{boat.name}</h3>
              <p className="text-gray-600 mb-2">{boat.type}</p>
              <p className="text-gray-600 mb-2">Capacity: {boat.capacity} {boat.capacity > 1 ? 'people' : 'person'}</p>
              <p className="text-paradise-blue font-bold text-xl mb-4">${boat.price}/hour</p>
              <Link to={`/boat/${boat.id}`} className="block w-full bg-paradise-blue text-white py-3 rounded-full text-center font-semibold hover:bg-paradise-dark transition duration-300">
                Rent Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoatList