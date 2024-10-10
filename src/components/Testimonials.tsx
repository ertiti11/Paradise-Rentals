import React from 'react'

const testimonials = [
  {
    name: 'Paco',
    text: 'Muy divertido para pasar un rato en familia!',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Maria M.',
    text: 'Finde perfecto en el agua. Los niños se lo pasaron en grande.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'antonia',
    text: 'Muy recomendable para desconectar y disfrutar de la naturaleza.',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
]

const Testimonials = () => {
  return (
    <div className="paradise-gradient py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <p className="font-semibold text-paradise-dark">{testimonial.name}</p>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials