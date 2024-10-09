export type BoatCategory = 'Kayak' | 'Paddle Board' | 'Pedal Boat' | 'Small Sailboat'

export interface Boat {
  id: number
  name: string
  type: string
  category: BoatCategory
  capacity: number
  price: number
  suitableFor: string
  description: string
  imageUrl: string
}

export const boats: Boat[] = [
  {
    id: 1,
    name: 'Ocean Explorer',
    type: 'Single Kayak',
    category: 'Kayak',
    capacity: 1,
    price: 25,
    suitableFor: 'Solo adventures',
    description: 'Perfect for exploring coastal waters and getting a great upper body workout.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'Sunset Cruiser',
    type: 'Tandem Kayak',
    category: 'Kayak',
    capacity: 2,
    price: 40,
    suitableFor: 'Couples and friends',
    description: 'Enjoy a peaceful paddle with a friend or loved one in this stable and comfortable tandem kayak.',
    imageUrl: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: 3,
    name: 'Wave Rider',
    type: 'Stand Up Paddle Board',
    category: 'Paddle Board',
    capacity: 1,
    price: 30,
    suitableFor: 'Balance enthusiasts',
    description: 'Test your balance and core strength while enjoying beautiful views from this sturdy paddle board.',
    imageUrl: 'https://images.unsplash.com/photo-1526188717906-ab4a2f949f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80'
  },
  {
    id: 4,
    name: 'Family Fun',
    type: 'Pedal Boat',
    category: 'Pedal Boat',
    capacity: 4,
    price: 50,
    suitableFor: 'Families and groups',
    description: 'Enjoy a leisurely ride with the whole family in this easy-to-use pedal boat.',
    imageUrl: 'https://images.unsplash.com/photo-1534254310421-788ac69d6fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    id: 5,
    name: 'Wind Chaser',
    type: 'Small Sailboat',
    category: 'Small Sailboat',
    capacity: 2,
    price: 60,
    suitableFor: 'Sailing enthusiasts',
    description: 'Experience the thrill of sailing in this compact and easy-to-handle small sailboat.',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80'
  }
]