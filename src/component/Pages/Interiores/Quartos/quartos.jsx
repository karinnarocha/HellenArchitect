import React from "react";
import "./Quartos.css";
import Hero from "../../../Hero/Hero";
import ImagesGrid from "../../../ImagesGrid/ImagesGrid";

import { Link } from "react-router-dom";



const Hero_Quartos = [
    { src: "images/Quartos/Hero_QuartoPage.webp", title: "Quartos" },
];

const QuartoMenu = [
    { src: "/images/Quartos/Master-QuartoPage.webp", title: "Quartos Master", link: "/Quarto_Master" },
    { src: "/images/Quartos/Menina-QuartoPage.webp", title: "Quartos Menina ", link: "/Quarto_Menina" },
    { src: "/images/Quartos/Menino-QuartoPage.webp", title: "Quartos Menino", link: "/Quarto_Menino" },
];


const Quartos = () => {
    return (
        <>
            <Hero image={Hero_Quartos[0]} />
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