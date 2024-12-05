import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar si el usuario ha hecho scroll para cambiar la opacidad
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-lg' : 'bg-black/80'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo className="w-24 h-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/reservar"
            className="px-4 py-2 border border-white rounded-full bg-black text-white hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md"
          >
            Barcos
          </Link>
          <Link
            to="/contactos"
            className="px-4 py-2 border border-blue-500 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden bg-black/90"
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="px-4 py-2 border border-white rounded-lg bg-black text-white hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md"
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/reservar"
              onClick={toggleMenu}
              className="px-4 py-2 border border-white rounded-lg bg-black text-white hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md"
            >
              Barcos
            </Link>
          </li>
          <li>
            <Link
              to="/contactos"
              onClick={toggleMenu}
              className="px-4 py-2 border border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
