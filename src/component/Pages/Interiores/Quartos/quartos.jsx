import React from "react";
import "./Quartos.css";
import Hero from "../../../Hero/Hero";
import ImagesGrid from "../../../ImagesGrid/ImagesGrid";

import { Link } from "react-router-dom";



const Hero_Quartos = [
    { src: "images/Quartos/Hero_QuartoPage.webp", title: "Quartos" },
];

const QuartoMenu = [
    { src: "/images/Quartos/Master-QuartoPage.webp", title: "Quartos Master", link: "/QuartoMaster" },
    { src: "/images/Quartos/Menina-QuartoPage.webp", title: "Quartos Menina ", link: "/QuartoMenina" },
    { src: "/images/Quartos/Menino-QuartoPage.webp", title: "Quartos Menino", link: "/QuartoMenino" },
];


const Quartos = () => {
    return (
        <>
            <Hero
                image={Hero_Quartos[0]}
                title="Quartos"
                subtitle="Quartos planejados para descanso, conforto e personalidade em cada detalhe."
            />
            <ImagesGrid images={QuartoMenu} wrapperClassName="imageGridQuartos" />
            <div className="FinalCTAsection">
                <div className="FinalCTAcard">
                    <h2 className="FinalCTAtitle">Vamos criar o seu projeto</h2>
                    <p className="FinalCTAsubtitle">Conte um pouco sobre o que você sonha para o seu espaço.</p>
                    <Link to="/Contato" className="FinalCTAbutton">Agendar conversa</Link>
                </div>
            </div>
        </>
    );
};

export default Quartos;