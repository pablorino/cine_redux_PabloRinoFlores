import React from "react";
import { FaArrowRight } from "react-icons/fa";
import cine1 from "../assets/cine1.jpg";
import director from "../assets/director.jpg";

const About = () => {
    return (
        <div className="section p-24" id="about">
            <div className="grid md:grid-cols-2 items-center mb-10">
                <div className="flex flex-col justify-center items-start gap-6 m-11">
                    <div className="sm:text-3xl text-xl font-bold mb-6">
                        Películas de todo el mundo
                    </div>
                    <p className="text-sm opacity-70">             
                        Disfrute de una experiencia cinematográfica única en nuestro cine, donde fusionamos la auténtica esencia del cine estadounidense con la delicadeza de películas orientales como el cine japonés. Nuestra diversa y emocionante cartelera le ofrece la oportunidad de explorar historias que van desde dramas intensos hasta emocionantes películas de acción, brindándole un festín cinematográfico que satisfará todos los gustos. Sumérjase en la fusión perfecta de lo occidental y lo oriental en cada proyección.
                    </p>
                </div>
                <div className="md:row-start-1">
                    <img src={cine1} alt=""  className="rounded-xl"/>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="">
                    <div className="sm:text-3xl text-xl font-bold mb-6">
                        Nuestro equipo de profesionales cinematográficos.
                    </div>
                    <p className="text-sm opacity-70">                      
                    Nuestro equipo de directores registrados y profesionales cinematográficos con habilidades especializadas proporciona servicios de producción cinematográfica. Desde nuestra página web le invitamos a reservar un asiento para disfrutar de nuestra experiencia cinematográfica excepcional. Garantizamos un ambiente acogedor y películas exquisitamente seleccionadas para que su visita sea inolvidable.
                    </p>
                </div>
                <div>
                    <img src={director} alt=""  className="rounded-xl"/>
                </div>
            </div>
        </div>
    );
};

export default About;
