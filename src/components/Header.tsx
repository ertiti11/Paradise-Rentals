import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="bg-black/80 flex item-center justify-between">
        <div className='mt-8 ml-20 space-x-10'>
          <a href="" className='px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md'>Reservas</a>
          <Link to="/"><a href="" className='px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md'>Sobre nosotros</a></Link>
          <Link to="/reservar"><a href="" className='px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md'>Barcos</a></Link>
        </div>    
        <div className=''>
          <Link to="/"><img src={logo} alt="" className='w-32 mr-80'/></Link>
        </div>
        <div className='mt-8 mr-20'>
          <Link to="/contactos" className='px-4 py-2 border border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md'>Contacto</Link>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar