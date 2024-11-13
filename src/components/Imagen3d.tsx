// import React, { useRef, useEffect } from 'react';
// import { image } from 'framer-motion/client';
import Imagen from "../assets/image-6.jpg";
import { useEffect } from "react";
import { useRef } from "react";

const Imagen3d = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleMouseMove = (evt) => {
      const { layerX, layerY } = evt;
      const { clientWidth: width, clientHeight: height } = el;

      const yRotation = ((layerX - width / 2) / width) * 15;
      const xRotation = ((layerY - height / 2) / height) * 15;

      el.style.transform = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;
    };

    const handleMouseOut = () => {
      el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`;
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseout", handleMouseOut);

    // Cleanup event listeners on component unmount
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="flex-col">
      <div className="ml-[770px]">
        <h1 className="text-4xl ml-9 font-bold">Costa</h1>
        <h1 className="text-4xl font-bold">Concordia</h1>
        <br />
        <br />
      </div>
      <div
        className="w-[full] h-[500px] flex justify-center items-center"
        ref={imageRef}
      >
        <img
          src={Imagen}
          alt="imagen"
          className="w-[500px] h-[400px] rounded-lg"
        />

        <img
          src={Imagen}
          alt=""
          className="absolute w-[300px] h-[200px] mr-[500px] object-cover z-10 rounded-lg"
        />
        <img
          src={Imagen}
          alt=""
          className="absolute w-[300px] h-[200px] ml-[500px] mb-[300px] object-cover z-[-10] rounded-lg"
        />
        <img
          src={Imagen}
          alt=""
          className="absolute w-[300px] h-[200px] ml-[500px] mt-[300px] mr-[100px] object-cover z-[10] rounded-lg"
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Imagen3d;
