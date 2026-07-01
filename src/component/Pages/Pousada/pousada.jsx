
import React from "react";
import Hero from "../../Hero/hero";
import ImageSlide from "../../SlideShow/slide";
import ImagesGrid from "../../ImagesGrid/imagesGrid";

import { Link } from "react-router-dom";

import "./pousada.css";

const Hero_Pousada =[
     {src: "images/Pousada/FACHADA/03.webp", title:"Pousada" },
];

const FachadaSlide = [
    {src: "images/Pousada/FACHADA/02.webp", title: "Fachada 2", index: 1},
    {src: "images/Pousada/FACHADA/01.webp", title: "Fachada 1", index: 0},
    {src: "images/Pousada/FACHADA/03.webp", title: "Fachada 3", index: 2},
    {src: "images/Pousada/FACHADA/04.webp", title: "Fachada 4", index: 3},
    {src: "images/Pousada/FACHADA/05.webp", title: "Fachada 5", index: 4},
];

const RooftopSlide = [
    {src: "images/Pousada/ROOFTOP/01.webp", title: "Rooftop 1", index: 0},
    {src: "images/Pousada/ROOFTOP/02.webp", title: "Rooftop 2", index: 1},
    {src: "images/Pousada/ROOFTOP/03.webp", title: "Rooftop 3", index: 2},
    {src: "images/Pousada/ROOFTOP/04.webp", title: "Rooftop 4", index: 3},
    {src: "images/Pousada/ROOFTOP/05.webp", title: "Rooftop 5", index: 4},
];

const LavaboSlide = [
    {src: "images/Pousada/LAVABO/01.webp", title: "Rooftop 1", index: 0},
    {src: "images/Pousada/LAVABO/02.webp", title: "Rooftop 2", index: 1},

];
const InteriorSlide = [
    {src: "images/Pousada/INTERIOR/01.webp", title: "Interior 1", index: 0},
    {src: "images/Pousada/INTERIOR/02.webp", title: "Interior 2", index: 1},
    {src: "images/Pousada/INTERIOR/03.webp", title: "Interior 3", index: 2},
    {src: "images/Pousada/INTERIOR/04.webp", title: "Interior 4", index: 3},
    {src: "images/Pousada/INTERIOR/05.webp", title: "Interior 5", index: 5},
    {src: "images/Pousada/INTERIOR/06.webp", title: "Interior 6", index: 6},
    {src: "images/Pousada/INTERIOR/07.webp", title: "Interior 6", index: 7},
    {src: "images/Pousada/INTERIOR/08.webp", title: "Interior 7", index: 8},
];

const PiscinaSlide = [
    {src: "images/Pousada/PISCINA/01.webp", title: "Piscina 1", index: 0},
    {src: "images/Pousada/PISCINA/02.webp", title: "Piscina 2", index: 1},
    {src: "images/Pousada/PISCINA/03.webp", title: "Piscina 3", index: 2},

];

const Quartos = [
    {src: "/images/Pousada/QUARTOS/QUARTO_1/01.webp", title: "Quartos", link:"/Quartos_pousada" },
];


const Pousada = () => {
  return (
    <>
      <Hero image={Hero_Pousada[0]} />
      <div className="imageGridPousada">
        <ImageSlide label="Fachada" slides={FachadaSlide} />
        <ImageSlide label="Rooftop" slides={RooftopSlide} />
        <ImageSlide label="Lavabo" slides={LavaboSlide} />
        <ImageSlide label="Interior" slides={InteriorSlide} />
        <ImageSlide label="Piscina" slides={PiscinaSlide} />
        <ImagesGrid  images={Quartos} />
      </div>

      <div className="central">
        <Link to='/Contato' className="OrcamentoButton">Orçamento</Link>
      </div>
    </>
  );
};
export default Pousada;