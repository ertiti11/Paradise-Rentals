import React from 'react'

const testimonials = [
  {
    name: 'Sarah L.',
    text: 'Had an amazing time kayaking with my partner. The staff was friendly and the equipment was in great condition!',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mike R.',
    text: 'Rented a paddle board for the first time and loved it. Will definitely be coming back for more!',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Emily T.',
    text: 'Our family had so much fun on the pedal boat. It was a perfect activity for a sunny afternoon.',
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