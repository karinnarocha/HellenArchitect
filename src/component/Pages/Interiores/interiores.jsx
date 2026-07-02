import React from "react";
import "./Interiores.css";
import Hero from "../../Hero/Hero";
import ImagesGrid from "../../ImagesGrid/ImagesGrid";

import { Link } from "react-router-dom";

const Hero_Interiores = [
    { src: "images/interior/interior_HERO.webp", title: "Interiores" },
];

const interiorGrid = [
    { src: "/images/interior/interior_gourmet.webp", title: "Area Gourmet", className: "gallery_Gourmet", link: "/Gourmet" },
    { src: "/images/interior/interior_lavabo.webp", title: "Lavabo", className: "gallery_Lavabo", link: "/lavabo" },
    { src: "/images/interior/interior_quartos.webp", title: "Quartos", className: "gallery_Quarto", link: "/quartos" },
    { src: "/images/interior/interior_escritorio.webp", title: "Escritorio", className: "gallery_Escritorio", link: "/escritorio" },
    { src: "/images/interior/interior_sala.webp", title: "Sala", className: "gallery_Sala", link: "/Sala" },
    { src: "/images/interior/inteiror_outros.webp", title: "Outros", className: "gallery_Outros", link: "/outros" },
    { src: "/images/interior/interior_cozinha.webp", title: "Cozinha", className: "gallery_Cozinha", link: "/cozinha" },
];

const Interior = () => {
    return (
        <>
            <Hero
                image={Hero_Interiores[0]}
                title="Interiores"
                subtitle="Projetos de design de interiores que traduzem personalidade em ambientes funcionais e sofisticados, do conceito à execução."
            />
            <ImagesGrid images={interiorGrid} wrapperClassName="imageGridInteriores imageGridHome" />

            <div className="FinalCTAsection">
                <div className="FinalCTAcard">
                    <h2 className="FinalCTAtitle">Vamos transformar seus ambientes</h2>
                    <p className="FinalCTAsubtitle">Um projeto de interiores que traduz sua personalidade em cada detalhe.</p>
                    <Link to="/Contato" className="FinalCTAbutton">Solicitar orçamento</Link>
                </div>
            </div>
            <div className="decorationBottomWrapperChafariz">
                <img src="/images/mainpage/MainPage_Chafariz.webp" alt="decoration" className="decorationBottomChafariz" />
            </div>
        </>
    );
};

export default Interior;