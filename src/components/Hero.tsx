import Video from "../assets/Video.mp4";
import { useState } from "react";
import "./styles.css";
import Search from "./SearchComponent/Search";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative bg-white/90 h-[calc(100vh-4rem)] mx-10 mt-24 rounded-xl mb-40 overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        src={Video}
      ></video>
      <div className="absolute top-0 left-0 h-full w-full bg-black/50 flex flex-col items-center justify-start">
        <h1 className="text-white text-8xl font-bold mt-96">Paradise Rental's</h1>

        {/* Botón para abrir el modal */}
        <button
          onClick={openModal}
          className="bg-teal-500 text-white p-3 rounded-xl hover:bg-teal-600 transition-all mt-10"
        >
          Reserva ahora
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white/30 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col items-center space-y-6 max-w-lg w-full">
              <h2 className="text-2xl text-white font-semibold">Busca tu barco</h2>

              {/* Aquí se incluye el formulario de búsqueda */}
              <Search />

              {/* Botón para cerrar el modal */}
              <button
                onClick={closeModal}
                className="bg-red-500 text-white p-2 rounded-xl mt-4 hover:bg-red-600 transition-all"
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
