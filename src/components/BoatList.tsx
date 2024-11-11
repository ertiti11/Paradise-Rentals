import  { useState } from 'react'
import { boats, BoatCategory } from '../data/boats'
import ServicioCard from './ServicioCard'

const BoatList = () => {
  const [selectedCategory, setSelectedCategory] = useState<BoatCategory | 'All'>('All')

  const categories: (BoatCategory | 'All')[] = ['All', ...new Set(boats.map(boat => boat.category))]

  const filteredBoats = selectedCategory === 'All' 
    ? boats 
    : boats.filter(boat => boat.category === selectedCategory)

  return (
    <div id="boats" className="container mx-auto py-16 font-roboto">
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
          // 
          <ServicioCard key={boat.id} {...boat} />
        ))}
      </div>
    </div>
  )
}

export default BoatList