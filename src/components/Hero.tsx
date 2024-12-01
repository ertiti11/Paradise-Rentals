import Video from "../assets/Video.mp4";
import { useState } from "react";
import "./styles.css";
import Search from "./SearchComponent/Search";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-white/90 h-[calc(100vh-4rem)] mx-10 mt-24 rounded-xl mb-40 overflow-hidden opacity-0 animate-fade-in">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover scale-105 animate-scale-in"
        autoPlay
        muted
        loop
        src={Video}
      ></video>
      <div className="absolute top-0 left-0 h-full w-full bg-black/50 flex flex-col items-center justify-start">
        <h1 className="text-white text-8xl font-bold mt-96 opacity-0 animate-fade-slide-up" style={{ animationDelay: '0.3s' }}>
          Paradise Rental's
        </h1>

        <button
          onClick={openModal}
          className="bg-paradise-blue font-roboto text-white px-6 py-3 rounded-full font-semibold hover:bg-paradise-dark transition duration-300 mt-20"
          style={{ animationDelay: '0.6s' }}
        >
          Reserva ahora
        </button>

        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 opacity-0 animate-fade-in"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div 
              className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col items-center space-y-6 max-w-lg w-full opacity-0 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
              style={{ animationDelay: '0.1s' }}
            >
              <h2 className="text-2xl text-white font-semibold">
                Busca tu barco
              </h2>

              <Search />

              <button
                onClick={closeModal}
                className=" bg-red-600 w-full font-roboto text-white px-6 py-3 rounded-full font-semibold hover:bg-paradise-dark transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;