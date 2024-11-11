import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Caribe from '../assets/caribean.webp';
import Crucero from '../assets/crucero.webp';

const ImageScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.9 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <motion.div
        className="absolute transform -translate-x-full z-10"
        animate={{ x: Math.min(scrollY * 0.5, window.innerWidth / 4) }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <img src={Caribe} alt="imagen 1" className="h-[400px] w-[300px]" />
      </motion.div>
      <motion.div
        className="absolute transform translate-x-full z-10"
        animate={{ x: Math.max(-scrollY * 0.5, -window.innerWidth / 4) }}
        transition={{ type: 'tween', duration: 1 }}
      >
        <img src={Crucero} alt="imagen 2" className="h-[400px] w-[300px]" />
      </motion.div>
      <div className="relative z-0 text-center">
        <h1 className="text-4xl text-white">Visita el caribe</h1>
        <div className="mt-4">
          <a
            href="#"
            className="px-4 py-2 border border-white-500 rounded-lg bg-black text-white-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md"
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;