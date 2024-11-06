import React from "react";
import { FaWifi, FaTv } from "react-icons/fa";
import { TbGrill, TbAirConditioning } from "react-icons/tb";
import { GiFireplace } from "react-icons/gi";
import { MdOutlineCleaningServices, MdDirectionsCar } from "react-icons/md";

const ServiciosIncluidos: React.FC = () => {
  const amenities = [
    { icon: <FaWifi className="w-6 h-6" />, title: "Acceso a internet" },
    { icon: <MdDirectionsCar className="w-6 h-6" />, title: "Estacionamiento techado" },
    { icon: <FaTv className="w-6 h-6" />, title: "Televisión" },
    { icon: <TbGrill className="w-6 h-6" />, title: "Parrilla" },
    { icon: <TbAirConditioning className="w-6 h-6" />, title: "Aire acondicionado" },
    { icon: <GiFireplace className="w-6 h-6" />, title: "Hogar a leña" },
    {
      icon: <MdOutlineCleaningServices className="w-6 h-6" />,
      title: "Limpieza final",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <p className="text-lg text-center mb-12">
        Desubrí nuestras encantadoras cabañas, ideales para parejas y pequeñas
        familias.
        <br /> Cuentan con todas las comodidades necesarias para una estadía
        placentera.
        <br />
        Calefacción a leña. Aire acondicionado. WiFi.
        <br />
        Todas las viviendas cuentan en su living con televisor Led con Direct
        TV.
      </p>

      <h2 className="text-2xl text-center font-semibold mb-8">
        SERVICIOS INCLUIDOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 transition-colors"
          >
            <div className="text-primary">{amenity.icon}</div>
            <span className="text-gray-700">{amenity.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosIncluidos;
