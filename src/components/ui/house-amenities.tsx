import React from "react";
import { FaWifi, FaTv } from "react-icons/fa";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { TbGrill, TbAirConditioning } from "react-icons/tb";
import { GiFireplace } from "react-icons/gi";
import {
  MdOutlineRemoveRedEye,
  MdDirectionsCar,
  MdHouse,
} from "react-icons/md";

const HouseAmenities: React.FC = () => {
  const amenities = [
    {
      icon: <MdHouse className="w-6 h-6" />,
      title: "Todo el alojamiento es para vos",
    },
    { icon: <FaWifi className="w-6 h-6" />, title: "Acceso a internet" },
    {
      icon: <MdDirectionsCar className="w-6 h-6" />,
      title: "Estacionamiento techado",
    },
    { icon: <FaTv className="w-6 h-6" />, title: "Televisión" },
    { icon: <TbGrill className="w-6 h-6" />, title: "Parrilla" },
    {
      icon: <TbAirConditioning className="w-6 h-6" />,
      title: "Aire acondicionado",
    },
    {
      icon: <FaHouseFloodWaterCircleArrowRight className="w-6 h-6" />,
      title: "Bajada al lago. Plataforma flotante incluida",
    },
    { icon: <GiFireplace className="w-6 h-6" />, title: "Hogar a leña" },
    { icon: <MdOutlineRemoveRedEye className="w-6 h-6" />, title: "Vista panorámica al lago" },
  ];

  return (
    <section className="max-w-6xl m-auto px-4 py-8">
      <p className="text-lg text-center py-8 my-4">
        Casa espaciosa de 162 m², ideal para grupos grandes o familias numerosas. 
        <br /> Consta de 3 plantas y cuenta con bajada directa al lago donde podes disfrutar de nuestra plataforma flotante. 
        <br /> 
        Disfruta de amplios espacios comunes y todas las comodidades para
        una experiencia grupal única.
      </p>
      <h2 className="text-2xl text-center font-semibold mb-8">
        SERVICIOS INCLUIDOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 transition-colors text-center md:text-left"
          >
            <div className="text-white mb-2 md:mb-0">{amenity.icon}</div>
            <span className="text-white text-sm md:text-base">{amenity.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HouseAmenities;


