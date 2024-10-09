import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Ship } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md text-paradise-dark shadow-md' : 'bg-transparent text-white'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Ship size={24} />
          <span className="text-xl font-bold">ParadiseRentals</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-coral transition duration-300">Home</Link></li>
            <li><a href="#boats" className="hover:text-coral transition duration-300">Alquileres</a></li>
            <li><a href="#about" className="hover:text-coral transition duration-300">Sobre nosotros</a></li>
            <li><a href="#contact" className="hover:text-coral transition duration-300">Contacto</a></li>
            <li><Link to="/admin" className="hover:text-coral transition duration-300">Admin</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header