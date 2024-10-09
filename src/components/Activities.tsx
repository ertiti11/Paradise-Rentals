import React from 'react'
import { Waves, Sunset, Fish, Camera } from 'lucide-react'

const activities = [
  { icon: Waves, title: 'Swimming', description: 'Enjoy the crystal-clear waters perfect for a refreshing swim.' },
  { icon: Sunset, title: 'Sunset Cruises', description: 'Experience breathtaking sunsets from the water.' },
  { icon: Fish, title: 'Fishing', description: 'Try your luck fishing in our abundant waters.' },
  { icon: Camera, title: 'Photography', description: 'Capture stunning views and memories that will last a lifetime.' },
]

const Activities = () => {
  return (
    <div className="bg-sand py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-paradise-dark">Explore Paradise Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <activity.icon size={48} className="text-paradise-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-paradise-dark">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Activities