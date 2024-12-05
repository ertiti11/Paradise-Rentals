"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export default function ImageScroll() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Disfruta del lujo de Paradise Rentals
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Paradise Rentals dispone de una amplia y lujosa variedad de barcos diseñados especialmente para aquellos con gustos
         refinados y un estilo de vida exclusivo, que buscan disfrutar de experiencias únicas en el mar.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Gran variedad de barcos
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Paradise Rentals ofrece una gran variedad de tipos de barcos, cuidadosamente seleccionados para satisfacer las necesidade
       y deseos de los amantes de la navegación, desde embarcaciones elegantes y modernas hasta opciones clásicas y sofisticadas.

      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Disfruta del mar con Paradise Rentals
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Paradise Rentals es, sin duda, la mejor opción para quienes desean disfrutar de una experiencia única e inigualable de lujo en el mar,
         combinando embarcaciones de alta gama, servicios exclusivos y destinos paradisíacos que convierten cada travesía en un recuerdo inolvidable.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       Mejora la vida del mar con Paradise Rentals
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Descubre nuestros innovadores barcos eléctricos, diseñados especialmente para ofrecer una experiencia de navegación sostenible y respetuosa
         con el medio ambiente, mientras contribuyes activamente a la protección y conservación de los valiosos fondos marinos y su biodiversidad única.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://media.gettyimages.com/id/1419016061/es/foto/copas-de-c%C3%B3ctel-en-mesa.jpg?s=612x612&w=0&k=20&c=GUrOQ11ps7sGTQNps_npc1APoT0pv0scLq4c9C5ZFuE=",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://media.gettyimages.com/id/1442027343/es/foto/luxury-yacht-moored-in-the-marina-of-barcelona.jpg?s=612x612&w=0&k=20&c=DhLzWao0f4B8CB8JEkprn-p36FWm9LLVsrb_Owg4tRQ=",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://media.gettyimages.com/id/1306536616/es/foto/pareja-enamorada-disfrutando-de-vacaciones-de-verano-en-un-yate-en-zakynthos-grecia-playa.jpg?s=612x612&w=0&k=20&c=v6M2apCJYdfEeVT3TZB6id_9Alo7NlZm77ES-5KsDSo=",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://media.gettyimages.com/id/1311491689/es/foto/yate-de-lujo.jpg?s=612x612&w=0&k=20&c=r276cM1l-7OJDOGwh8BkcJOo7zwJIrboAC-1GA9jj80=",
  },
];
