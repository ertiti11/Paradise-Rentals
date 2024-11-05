// import logo from '../assets/Logo.svg';
import footerLogo from '../assets/logoNombreDerecha.jpeg'

const Navbar = () => {
  return (
    <div>

      <div className="bg-black flex item-center justify-between">
        <div className=''>
              <img src={footerLogo} alt="" className='w-32 h-23 mr-80'/>
        </div>

        <div className='mt-12 space-x-10'>
          <a href="" className='px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md'>Email</a>
          <a href="" className='px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md'>Twitter</a>
          <a href="" className='px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md'>Instagram</a>
        </div>
        
        

        <div className='mt-12 mr-20'>
          <p className=''>©2024 YachtVacations. Todos los derechos reservados.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar