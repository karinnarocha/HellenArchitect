import React from "react";
import { Link } from "react-router-dom";
import "./Arquitetura.css";
import Hero from "../../Hero/Hero";
import ImageSlide from "../../SlideShow/Slide";


const Hero_Arquitetura = [
    { src: "images/Arquitecture/CASA_NT/Render_9.webp", title: "Arquitetura" },
];

const CASA_NT = [
    { src: "images/Arquitecture/CASA_NT/Render_0.webp", title: "CASA_NT1", index: 0 },
    /*{src:"images/Arquitecture/CASA_NT/Render_1.webp", title: "CASA_NT2", index: 1},*/
    { src: "images/Arquitecture/CASA_NT/Render_2.webp", title: "CASA_NT3", index: 2 },
    { src: "images/Arquitecture/CASA_NT/Render_7.webp", title: "CASA_NT4", index: 3 },
    { src: "images/Arquitecture/CASA_NT/Render_8.webp", title: "CASA_NT5", index: 4 },
    { src: "images/Arquitecture/CASA_NT/Render_9.webp", title: "CASA_NT6", index: 5 },
];

const CASA_CS = [
    { src: "images/Arquitecture/CASA_CS/FACHADA 01.webp", title: "CASA_cs1", index: 0 },
    { src: "images/Arquitecture/CASA_CS/FACHADA 03.webp", title: "CASA_cs2", index: 1 },
    { src: "images/Arquitecture/CASA_CS/FACHADA 04.webp", title: "CASA_cs3", index: 2 },
    { src: "images/Arquitecture/CASA_CS/FACHADA 06.webp", title: "CASA_cs4", index: 3 },
];

const CASA_ME = [
    { src: "images/Arquitecture/CASA_ME/CASA_ME0.webp", title: "CASA_me0", index: 0 },
    { src: "images/Arquitecture/CASA_ME/CASA_ME1.webp", title: "CASA_me1", index: 1 },
    { src: "images/Arquitecture/CASA_ME/CASA_ME2.webp", title: "CASA_me2", index: 2 },
    { src: "images/Arquitecture/CASA_ME/CASA_ME3.webp", title: "CASA_me3", index: 3 },
    { src: "images/Arquitecture/CASA_ME/CASA_ME4.webp", title: "CASA_me4", index: 3 },
];

const CASA_RE = [
    { src: "images/Arquitecture/CASA_RE/CASA_RE0.webp", title: "CASA_re0", index: 0 },
    { src: "images/Arquitecture/CASA_RE/CASA_RE1.webp", title: "CASA_re1", index: 1 },
    { src: "images/Arquitecture/CASA_RE/CASA_RE2.webp", title: "CASA_re2", index: 2 },
    { src: "images/Arquitecture/CASA_RE/CASA_RE3.webp", title: "CASA_re3", index: 3 },
    { src: "images/Arquitecture/CASA_RE/CASA_RE4.webp", title: "CASA_re4", index: 3 },
];


const Arquitetura = () => {

    return (
        <>
            <Hero
                image={Hero_Arquitetura[0]}
                title="Arquitetura"
                subtitle="Projetos arquitetônicos residenciais personalizados, unindo sofisticação, conforto e identidade em cada construção. Atendimento em Vitória, Espírito Santo, e região."
            />
            <div className="imageGridArquitetura">
                <ImageSlide slides={CASA_NT} label="Casa NT" />
                <ImageSlide slides={CASA_CS} label="Casa CS" />
                <ImageSlide slides={CASA_ME} label="Casa ME" />
                <ImageSlide slides={CASA_RE} label="Casa RE" />
            </div>
            <div className="FinalCTAsection">
                <div className="FinalCTAcard">
                    <h2 className="FinalCTAtitle">Vamos projetar a sua casa.</h2>
                    <p className="FinalCTAsubtitle">Do terreno ao acabamento, um projeto arquitetônico pensado para o seu jeito de morar.</p>
                    <Link to="/Contato" className="FinalCTAbutton">Solicitar Orçamento</Link>
                </div>
            </div>

        </>
    );
};

export default Arquitetura;