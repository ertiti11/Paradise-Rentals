import { useState } from 'react';
import './Navbar.css'; // Estilos personalizados para animaciones y blur
import Logo from '../assets/logo.svg'; // Logo de la empresa
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Barra de navegación superior visible siempre */}
      <div className={`fixed top-0 left-0 w-full bg-white/20 shadow-md z-50`}>
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo (opcional) */}
          <NavLink to="/" className="text-4xl text-black font-bold"><img src={Logo} alt="" className='w-24' /></NavLink>
          

          {/* Botón para abrir el menú */}
          <button
            className="text-4xl text-black cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776; {/* Ícono de menú */}
          </button>
        </div>
      </div>

      {/* Menú lateral que se abre al hacer clic */}
      <nav className={`fixed inset-0 z-40 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative w-full h-full">
          {/* Botón para cerrar el menú */}
          <button
            className="absolute top-6 right-6 text-black text-4xl"
            onClick={toggleMenu}
          >
            &#x2715; {/* Ícono de cerrar */}
          </button>

          {/* Contenedor principal del menú */}
          <div className="main_menu  flex bg-white/10 h-full gap-48   justify-center items-center">
            <div className='flex flex-col gap-10 text-white'>
              <NavLink className="menu_link main text-7xl" to={"/"} itemProp="url">Home</NavLink>
              <NavLink className="menu_link main text-7xl" to={"/sobre-nosotros"} itemProp="url">Sobre nosotros</NavLink>
              <NavLink className="menu_link main text-7xl" to={"/Contacto"} itemProp="url">Contacto</NavLink>
              <NavLink className="menu_link main text-7xl" to={"/alquileres"} itemProp="url">Reservar</NavLink>
            </div>
            <img src={Logo} alt="" />

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
