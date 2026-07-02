import React from "react";
import "./QuartosPousada.css";
import Hero from "../../../Hero/Hero";
import ImageSlide from "../../../SlideShow/Slide";


const Hero_Pousada_Quartos = [
    { src: "../../images/Pousada/QUARTOS/QUARTO_1/01.webp", alt: "Hero Pousada" },
];

const Quarto_Presidential = [
    { src: "images/Pousada/QUARTOS/QUARTO_1/01.webp", title: "Suíte Comum 1", index: 0 },
    { src: "images/Pousada/QUARTOS/QUARTO_1/02.webp", title: "Suíte Comum 2", index: 1 },
    { src: "images/Pousada/QUARTOS/QUARTO_1/03.webp", title: "Suíte Comum 3", index: 2 },
    { src: "images/Pousada/QUARTOS/QUARTO_1/04.webp", title: "Suíte Comum 4", index: 3 },
];

const Quartos_Standard = [
    { src: "images/Pousada/QUARTOS/QUARTO_2/01.webp", title: "Quarto Standard 1", index: 0 },
    { src: "images/Pousada/QUARTOS/QUARTO_2/02.webp", title: "Quarto Standard 2", index: 1 },
    { src: "images/Pousada/QUARTOS/QUARTO_2/03.webp", title: "Quarto Standard 3", index: 2 },
    { src: "images/Pousada/QUARTOS/QUARTO_2/04.webp", title: "Quarto Standard 4", index: 3 },
    { src: "images/Pousada/QUARTOS/QUARTO_2/05.webp", title: "Quarto Standard 5", index: 4 },
    { src: "images/Pousada/QUARTOS/QUARTO_2/06.webp", title: "Quarto Standard 6", index: 5 },
    { src: "images/Pousada/QUARTOS/QUARTO_2/07.webp", title: "Quarto Standard 7", index: 6 },
];

const Quarto_Noival = [
    { src: "images/Pousada/QUARTOS/QUARTO_3/01.webp", title: "Quarto Noival 1", index: 0 },
    { src: "images/Pousada/QUARTOS/QUARTO_3/02.webp", title: "Quarto Noival 2", index: 1 },
    { src: "images/Pousada/QUARTOS/QUARTO_3/03.webp", title: "Quarto Noival 3", index: 2 },
    { src: "images/Pousada/QUARTOS/QUARTO_3/04.webp", title: "Quarto Noival 4", index: 3 },
];


const QuartosPousada = () => {
    return (
        <>
            <Hero image={Hero_Pousada_Quartos[0]} />
            <div className="imageGridPousadaQuartos">
                <ImageSlide label="Quarto Presidencial" slides={Quarto_Presidential} />
                <ImageSlide label="Quartos Standard" slides={Quartos_Standard} />
                <ImageSlide label="Quartos Noival" slides={Quarto_Noival} />
            </div>
        </>
    );
};

export default QuartosPousada;