
import React from "react";
import Hero from "../../Hero/Hero";
import ImageSlide from "../../SlideShow/Slide";
import { Link } from "react-router-dom";

import "./Mostras.css";

const Hero_Mostras = [
  { src: "images/Mostras/CANTO_ENCANTO_2016/02.webp", title: "Mostras" },
];

const CANTO_ENCANTO_2015 = [
  { src: "images/Mostras/CANTO_ENCANTO_2015/01.webp", title: "CANTO_ENCANTO_2015", index: 0 },
  { src: "images/Mostras/CANTO_ENCANTO_2015/02.webp", title: "CANTO_ENCANTO_2015", index: 1 },
  { src: "images/Mostras/CANTO_ENCANTO_2015/03.webp", title: "CANTO_ENCANTO_2015", index: 2 },
];

const CANTO_ENCANTO_2016 = [
  { src: "images/Mostras/CANTO_ENCANTO_2016/01.webp", title: "CANTO_ENCANTO_2016", index: 0 },
  { src: "images/Mostras/CANTO_ENCANTO_2016/02.webp", title: "CANTO_ENCANTO_2016", index: 1 },
  { src: "images/Mostras/CANTO_ENCANTO_2016/03.webp", title: "CANTO_ENCANTO_2016", index: 2 },
  { src: "images/Mostras/CANTO_ENCANTO_2016/04.webp", title: "CANTO_ENCANTO_2016", index: 3 },
];

const Canto_Encanto_2017 = [
  { src: "images/Mostras/Canto_Encanto_2017/01.webp", title: "Canto_Encanto_2017", index: 0 },
  { src: "images/Mostras/Canto_Encanto_2017/02.webp", title: "Canto_Encanto_2017", index: 1 },
  { src: "images/Mostras/Canto_Encanto_2017/03.webp", title: "Canto_Encanto_2017", index: 2 },
  { src: "images/Mostras/Canto_Encanto_2017/04.webp", title: "Canto_Encanto_2017", index: 3 },
];
const CANTO_ENCANTO_2018 = [
  { src: "images/Mostras/CANTO_ENCANTO_2018/01.webp", title: "CANTO_ENCANTO_2018", index: 0 },
  { src: "images/Mostras/CANTO_ENCANTO_2018/02.webp", title: "CANTO_ENCANTO_2018", index: 1 },
  { src: "images/Mostras/CANTO_ENCANTO_2018/03.webp", title: "CANTO_ENCANTO_2018", index: 2 },
];

const CASA_COR_2012 = [
  { src: "images/Mostras/CASA_COR_2012/01.webp", title: "CASA_COR_2012", index: 0 },
  { src: "images/Mostras/CASA_COR_2012/02.webp", title: "CASA_COR_2012", index: 1 },
  { src: "images/Mostras/CASA_COR_2012/03.webp", title: "CASA_COR_2012", index: 2 },
];

const DECORA_LIDER_2016 = [
  { src: "images/Mostras/DECORA_LIDER_2016/01.webp", title: "DECORA_LIDER_2016", index: 0 },
  { src: "images/Mostras/DECORA_LIDER_2016/02.webp", title: "DECORA_LIDER_2016", index: 1 },
  { src: "images/Mostras/DECORA_LIDER_2016/03.webp", title: "DECORA_LIDER_2016", index: 2 },
  { src: "images/Mostras/DECORA_LIDER_2016/04.webp", title: "DECORA_LIDER_2016", index: 3 },
  { src: "images/Mostras/DECORA_LIDER_2016/05.webp", title: "DECORA_LIDER_2016", index: 4 },
  { src: "images/Mostras/DECORA_LIDER_2016/06.webp", title: "DECORA_LIDER_2016", index: 5 },
  { src: "images/Mostras/DECORA_LIDER_2016/07.webp", title: "DECORA_LIDER_2016", index: 6 },
];



const Mostras = () => {
  return (
    <>
      <Hero
        image={Hero_Mostras[0]}
        title="Mostras"
        subtitle="Participações em mostras de arquitetura e decoração, com ambientes autorais assinados por Hellen Rocha."
      />
      <div className="imageGridMostras">
        <div className="imageContainer">
          <ImageSlide label="CANTO_ENCANTO_2015" slides={CANTO_ENCANTO_2015} />
        </div>

        <div className="imageContainer">
          <ImageSlide label="CANTO_ENCANTO_2016" slides={CANTO_ENCANTO_2016} />
        </div>

        <div className="imageContainer">
          <ImageSlide label="CANTO_ENCANTO_2017" slides={Canto_Encanto_2017} />
        </div>

        <div className="imageContainer">
          <ImageSlide label="CANTO_ENCANTO_2018" slides={CANTO_ENCANTO_2018} />
        </div>

        <div className="imageContainer">
          <ImageSlide label="CASA_COR_2012" slides={CASA_COR_2012} />
        </div>

        <div className="imageContainer">
          <ImageSlide label="DECORA_LIDER_2016" slides={DECORA_LIDER_2016} />
        </div>
      </div>
      <div className="FinalCTAsection">
        <div className="FinalCTAcard">
          <h2 className="FinalCTAtitle">Quer um ambiente assinado por Hellen Rocha?</h2>
          <p className="FinalCTAsubtitle">Leve o mesmo cuidado autoral das mostras para o seu próprio espaço.</p>
          <Link to="/Contato" className="FinalCTAbutton">Agendar conversa</Link>
        </div>
      </div>
    </>

  );
};
export default Mostras;