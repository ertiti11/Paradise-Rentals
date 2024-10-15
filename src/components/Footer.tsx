import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-paradise-dark text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">ParadiseRentals</h3>
          <p className="mt-2">Experimente la belleza de las aventuras costeras</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-sand transition duration-300"><Facebook size={24} /></a>
          <a href="#" className="hover:text-sand transition duration-300"><Twitter size={24} /></a>
          <a href="#" className="hover:text-sand transition duration-300"><Instagram size={24} /></a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm">
        <p>&copy; 2023 ParadiseRentals. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer