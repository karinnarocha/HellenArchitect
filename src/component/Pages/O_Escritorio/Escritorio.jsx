
import React from "react";
import Hero from "../../Hero/hero";
import ImagesGrid from "../../ImagesGrid/imagesGrid";
import "./Escritorio.css";
import { Link } from "react-router-dom";


const Hero_Escritorio = [
    { src: "images/O_Escritorio/Hero_O_Escritorio.webp", title: "O Escritorio" },
];

const EscritorioGrid = [
    { src: "images/O_Escritorio/Escritorio_01.webp" },
    { src: "images/O_Escritorio/Escritorio_02.webp" },
    { src: "images/O_Escritorio/Escritorio_03.webp" },
    { src: "images/O_Escritorio/Escritorio_04.webp" },
    { src: "images/O_Escritorio/Escritorio_05.webp" },
    { src: "images/O_Escritorio/Escritorio_06.webp" },
];

const O_Escritorio = () => {
    return (
        <>
            <Hero
                image={Hero_Escritorio[0]}
                title="O Escritório"
                subtitle="Conheça o escritório de arquitetura e interiores de Hellen Rocha, com atuação em Vitória, ES, e atendimento personalizado em todo o Brasil."
            />
            <ImagesGrid images={EscritorioGrid} wrapperClassName="imageGridEscritorio" />
            <div className="FinalCTAsection">
                <div className="FinalCTAcard">
                    <h2 className="FinalCTAtitle">Sua próxima visita pode começar aqui</h2>
                    <p className="FinalCTAsubtitle">Agende um horário no escritório e vamos falar sobre o seu projeto com calma.</p>
                    <Link to="/Contato" className="FinalCTAbutton">Marcar visita ao escritório</Link>
                </div>
            </div>
        </>

    );
};
export default O_Escritorio;