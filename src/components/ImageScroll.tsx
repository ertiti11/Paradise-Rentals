import Caribe from '../assets/caribean.webp'
import Crucero from '../assets/crucero.webp'


const ImageScroll = () => {
  return (
    <div className="flex justify-between">
      <div className='ml-20 py-2'>
        <img src={Caribe} alt="imagen 1" className='h-[280px] w-[500px] animate-fadeIn' />
      </div>
      <div className='mt-[100px]'>
        <h1 className="text-4xl">Visita el caribe</h1>
        <div className='mt-[40px] ml-[60px]'>
          <a href="" className='px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md mt-[10px]'>Reservar</a>
        </div>
      </div>
      <div className='mr-20 py-2'>
        <img src={Crucero} alt="imagen 2" className='h-[280px] w-[500px] animate-fadeIn' />
      </div>
    </div>
  )
}

export default ImageScroll
