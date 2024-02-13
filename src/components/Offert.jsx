import React from "react";
import { ofertas } from "../Data";

const Oferta = () => {
    return (
        <div className="section" id="o">
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-16">
                    Ofertas del Mes
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16 bg-gray-50">
                    {ofertas.map((oferta) => {
                        return (
                            <div
                                className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                                key={oferta.id}
                            >
                                <img src={oferta.image} alt="" className="rounded-lg mb-4 px-9 w-72" />
                                <div className="mb-4">
                                    <div className="md:text-xl text-[1rem] font-semibold">
                                        {oferta.name}
                                    </div>
                                </div>
                                <p className="text-[0.85rem] opacity-70 mb-4">
                                    {oferta.description}
                                </p>
                                <div className="flex items-center">
                                    <span className="text-xl font-semibold">{oferta.price}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Oferta;