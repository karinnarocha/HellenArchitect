
import React, { useState } from "react";
import Hero from "../../Hero/Hero";
import "./OEscritorio.css";
import { Link, useNavigate } from "react-router-dom";


const Hero_Escritorio = [
    { src: "images/O_Escritorio/Hero_O_Escritorio.webp", title: "O Escritorio" },
];

const EscritorioSlides = [
    "images/O_Escritorio/Escritorio_01.webp",
    "images/O_Escritorio/Escritorio_02.webp",
    "images/O_Escritorio/Escritorio_03.webp",
    "images/O_Escritorio/Escritorio_04.webp",
    "images/O_Escritorio/Escritorio_05.webp",
    "images/O_Escritorio/Escritorio_06.webp",
];



const O_Escritorio = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPhotoOpen, setIsPhotoOpen] = useState(false);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? EscritorioSlides.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === EscritorioSlides.length - 1 ? 0 : prev + 1));
    };

    const openPhoto = () => setIsPhotoOpen(true);
    const closePhoto = (e) => {
        if (e.target === e.currentTarget) setIsPhotoOpen(false);
    };

    return (
        <>
            <Hero
                image={Hero_Escritorio[0]}
                title="O Escritório"
                subtitle="Conheça o escritório de arquitetura e interiores de Hellen Rocha, com atuação em Vitória, ES, e atendimento personalizado em todo o Brasil."
            />
            <div className="Escritorio-slide">
                <div className="Escritorio-slidePrev" onClick={goToPrevious}>❰</div>
                <img
                    className="Escritorio-slideImage"
                    src={EscritorioSlides[currentIndex]}
                    alt={`Escritório Hellen Rocha, foto ${currentIndex + 1}`}
                    onClick={openPhoto}
                />
                <div className="Escritorio-slideNext" onClick={goToNext}>❱</div>
            </div>

            {isPhotoOpen && (
                <div className="Escritorio-popupBackground" onClick={closePhoto}>
                    <div className="Escritorio-slidePrev" onClick={goToPrevious}>❰</div>
                    <img
                        className="Escritorio-popupImage"
                        src={EscritorioSlides[currentIndex]}
                        alt={`Escritório Hellen Rocha, foto ${currentIndex + 1}`}
                    />
                    <div className="Escritorio-slideNext" onClick={goToNext}>❱</div>
                </div>
            )}

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