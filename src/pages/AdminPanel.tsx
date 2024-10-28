import React, { useState, useEffect } from 'react'
import { boats, Boat, BoatCategory } from '../data/boats'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Mock reservation data
const mockReservations = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "cas"],
  datasets: [
    {
      label: 'Number of Reservations',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(0, 180, 219, 0.6)',
    },
  ],
}

const AdminPanel = () => {
  const [rentalItems, setRentalItems] = useState<Boat[]>(boats)
  const [newBoat, setNewBoat] = useState<Partial<Boat>>({
    name: '',
    type: '',
    category: 'Kayak',
    capacity: 1,
    price: 0,
    suitableFor: '',
    description: '',
    imageUrl: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewBoat(prev => ({ ...prev, [name]: name === 'capacity' || name === 'price' ? Number(value) : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newId = Math.max(...rentalItems.map(b => b.id), 0) + 1
    const boatToAdd = { ...newBoat, id: newId } as Boat
    setRentalItems(prev => [...prev, boatToAdd])
    boats.push(boatToAdd)
    alert('New rental item added successfully!')
    setNewBoat({
      name: '',
      type: '',
      category: 'Kayak',
      capacity: 1,
      price: 0,
      suitableFor: '',
      description: '',
      imageUrl: '',
    })
  }

  const handleDelete = (id: number) => {
    setRentalItems(prev => prev.filter(item => item.id !== id))
    const index = boats.findIndex(boat => boat.id === id)
    if (index > -1) {
      boats.splice(index, 1)
    }
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-paradise-dark">Admin Panel</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-paradise-dark">Add New Rental Item</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={newBoat.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="type"
              value={newBoat.type}
              onChange={handleInputChange}
              placeholder="Type"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <select
              name="category"
              value={newBoat.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="Kayak">Kayak</option>
              <option value="Paddle Board">Paddle Board</option>
              <option value="Pedal Boat">Pedal Boat</option>
              <option value="Small Sailboat">Small Sailboat</option>
            </select>
            <input
              type="number"
              name="capacity"
              value={newBoat.capacity}
              onChange={handleInputChange}
              placeholder="Capacity"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="number"
              name="price"
              value={newBoat.price}
              onChange={handleInputChange}
              placeholder="Price per hour"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="suitableFor"
              value={newBoat.suitableFor}
              onChange={handleInputChange}
              placeholder="Suitable for"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="description"
              value={newBoat.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
            <input
              type="url"
              name="imageUrl"
              value={newBoat.imageUrl}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="bg-paradise-blue text-white px-4 py-2 rounded hover:bg-paradise-dark transition duration-300">
              Add Rental Item
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-paradise-dark">Reservation Statistics</h2>
          <Bar data={mockReservations} />
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-paradise-dark">Existing Rental Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rentalItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4">
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold text-paradise-dark">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.type} - {item.category}</p>
              <p className="text-sm text-gray-600">Capacity: {item.capacity}</p>
              <p className="text-sm text-gray-600">Price: ${item.price}/hour</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel