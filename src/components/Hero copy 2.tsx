import { Link } from 'react-router-dom';
import Heroimg from '../assets/Hero.webp';
import "./styles.css";
import SearchIcon from '../assets/SearchIcon';
const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center paradise-gradient relative" style={{
      backgroundImage: `url(${Heroimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%', // Ajusta la posición de la imagen
    }}>
      {/* Span de blur independiente */}
      <span className='bg-white  blurry absolute  z-10'></span>

      <div className="container  mx-auto text-center text-white w-full flex items-center flex-col z-10">
        <h1 className="text-6xl font-bold text-shadow font-playfair text-[128px] w-auto mb-[650px]">Experience
          <br />the <span className='text-black'>ultimate</span> luxury</h1>


        <section className='flex bg-white/20 p-5 rounded-full backdrop-blur-md'>

          <div className="flex items-center w-[200px] h-[70px] border-2 border-gray-300 rounded-full bg-gray-100 p-5 ">
            <span className="mr-2 text-gray-500">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none"
              placeholder={"localidad"}
            />
          </div>
          <div className="flex items-center w-[200px] h-[70px] border-2 border-gray-300 rounded-full bg-gray-100 p-5 ">
            <span className="mr-2 text-gray-500">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none"
              placeholder={"localidad"}
            />
          </div>
          <div className="flex items-center w-[200px] h-[70px] border-2 border-gray-300 rounded-full bg-gray-100 p-5 ">
            <span className="mr-2 text-gray-500">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none"
              placeholder={"localidad"}
            />
          </div>
          <div className="flex items-center w-[200px] h-[70px] border-2 border-gray-300 rounded-full bg-gray-100 p-5 ">
            <span className="mr-2 text-gray-500">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none"
              placeholder={"localidad"}
            />
          </div>
          <div className="flex items-center w-[200px] h-[70px] border-2 border-gray-300 rounded-full bg-gray-100 p-5 ">
            <span className="mr-2 text-gray-500">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none"
              placeholder={"localidad"}
            />
          </div>



        </section>
      </div>
    </div>
  );
};

export default Hero;
