// import React, { useEffect, useRef } from "react";
// import sailboatImage from '../assets/sailboat.jpeg';
// import fishingImage from '../assets/fishing.jpeg';
// import lanchaImage from '../assets/lancha2.jpeg';
// import motorImage from '../assets/motor2.jpeg';

// const Carousel = () => {
//   const topCarouselRef = useRef(null);
//   const bottomCarouselRef = useRef(null);

//   useEffect(() => {
//     // Mover la primera imagen al final del carrusel superior
//     const topInterval = setInterval(() => {
//       const carousel = topCarouselRef.current;
//       const firstImage = carousel.firstElementChild;
//       carousel.appendChild(firstImage); // Mueve la primera imagen al final
//     }, 1000); // Cada 1 segundo

//     // Mover la primera imagen al final del carrusel inferior
//     const bottomInterval = setInterval(() => {
//       const carousel = bottomCarouselRef.current;
//       const firstImage = carousel.firstElementChild;
//       carousel.appendChild(firstImage); // Mueve la primera imagen al final
//     }, 1000); // Cada 1 segundo

//     return () => {
//       clearInterval(topInterval); // Limpia el intervalo del carrusel superior
//       clearInterval(bottomInterval); // Limpia el intervalo del carrusel inferior
//     };
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Carrusel superior */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden">
//         <div
//           className="flex space-x-4 animate-marquee"
//           ref={topCarouselRef}
//         >
//           <img src={sailboatImage} alt="Sailboat" className="w-full" />
//           <img src={fishingImage} alt="Fishing" className="w-full" />
//           <img src={lanchaImage} alt="Lancha" className="w-full" />
//         </div>
//       </div>

//       {/* Carrusel inferior */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//         <div
//           className="flex space-x-4 animate-marquee-reverse"
//           ref={bottomCarouselRef}
//         >
//           <img src={motorImage} alt="Motor" className="w-full" />
//           <img src={lanchaImage} alt="Lancha" className="w-full" />
//           <img src={fishingImage} alt="Fishing" className="w-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;





























import React, { useEffect } from "react";
import sailboatImage from '../assets/sailboat.jpeg';
import fishingImage from '../assets/fishing.jpeg';
import lanchaImage from '../assets/lancha2.jpeg';
import motorImage from '../assets/motor2.jpeg';


const Carousel = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector('.carousel');
      const firstImage = carousel.firstElementChild;
      carousel.appendChild(firstImage);  // Mueve la primera imagen al final
    }, 1000); // Cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="carousel flex transition-all duration-1000">
        <img src={sailboatImage} alt="" className="" />
        <img src={fishingImage} alt="" className="w-full" />
        <img src={lanchaImage} alt="Image 3" className="w-full" />
      </div>
    </div>
  );
};

export default Carousel;
// 
// import React, { useEffect, useRef } from "react";
// import sailboatImage from '../assets/sailboat.jpeg';
// import fishingImage from '../assets/fishing.jpeg';
// import lanchaImage from '../assets/lancha2.jpeg';
// import motorImage from '../assets/motor2.jpeg';
// 
// const Carousel = () => {
//   const carouselRef = useRef(null);
// 
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const carousel = carouselRef.current;
//       const firstImage = carousel.firstElementChild;
//       
//       // Mueve la primera imagen al final del contenedor de manera suave
//       carousel.style.transition = 'transform 2s ease-in-out';
//       carousel.appendChild(firstImage);  // Mueve la primera imagen al final
// 
//       // Después de la animación, se reinicia el transform para evitar problemas de salto
//       setTimeout(() => {
//         carousel.style.transition = 'none';
//         carousel.style.transform = 'translateX(0)';
//       }, 1000); // Sincroniza con el tiempo de la transición
//     }, 3000); // Cambio cada 3 segundos
// 
//     return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
//   }, []);
// 
//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="carousel flex"
//         ref={carouselRef}
//         style={{ display: 'flex', transform: 'translateX(0)', transition: 'none' }}
//       >
//         <img src={sailboatImage} alt="Sailboat" className="w-full" />
//         <img src={fishingImage} alt="Fishing" className="w-full" />
//         <img src={lanchaImage} alt="Lancha" className="w-full" />
//         <img src={motorImage} alt="Motor" className="w-full" />
//       </div>
//     </div>
//   );
// };
// 
// export default Carousel;
