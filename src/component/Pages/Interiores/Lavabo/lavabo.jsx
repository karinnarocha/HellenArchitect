import React from "react";
import "./lavabo.css";
import Hero from "../../../Hero/hero";
import ImagesGrid from "../../../ImagesGrid/imagesGrid";

import { Link } from "react-router-dom";

const Hero_Lavabo = [
    { src: "images/LAVABO/LAVABO_HERO.webp", title: "Lavabo" },
];

const lavaboGrid = [
    { src: "/images/LAVABO/LAVABO_01.webp" },
    { src: "/images/LAVABO/LAVABO_02.webp" },
    { src: "/images/LAVABO/LAVABO_HERO.webp" },
    { src: "/images/LAVABO/LAVABO_03.webp" },
]

const Lavabo = () => {
    return (
        <>
            <Hero image={Hero_Lavabo[0]} />
            <div className="GridContainer">
                <ImagesGrid images={lavaboGrid} wrapperClassName="imageGridLavabo" />
            </div>
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
export default Lavabo;