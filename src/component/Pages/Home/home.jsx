import React from "react";
import "./home.css";
import Hero from "../../Hero/hero";
import ImageGrid from "../../ImagesGrid/imagesGrid";
import ImageSlide from "../../SlideShow/slide";
import '/node_modules/animate.css/animate.css';
import { Link } from "react-router-dom";


const Hero_Home = [
    {src:"../../images/mainpage/hero.jpg", title: "Bem Vindo!"},
];
const homeGrid  = [
    {src: "../../images/mainpage/Interiores_mainpage.webp", title: "Interiores", className:" gallery__item--1", link:"/Interiores"},
    {src: "../../images/mainpage/MainPage_Arquitetura.webp", title: "Arquitetura" ,className:"gallery__item--2", link:"/Arquitetura"},
    {src: "../../images/mainpage/MainPage_Pousada.webp", title: "Pousada", className:"gallery__item--3", link:"/Pousada"},
    {src: "../../images/mainpage/MainPage_Mostras.webp", title: "Mostras", className:"gallery__item--4", link:"/Mostras"},
    {src: "../../images/mainpage/MainPage_OEscritorio.webp", title: "O Escritorio", className:"gallery__item--5", link:"/OEscritorio"},
];

const Sala3 = [
    {src: "../../images/interior/Sala/03/01.webp", title: "Design de Sala", index:0},
    {src: "../../images/interior/Sala/03/02.webp", title: "Sala Moderna", index:1},
    {src: "../../images/interior/Sala/03/03.webp", title: "Sala Compacta", index:2},
    {src: "../../images/interior/Sala/03/04.webp", title: "Sala Aconchegante", index:3},
];

const CASA_NT = [
    {src:"../../images/Arquitecture/CASA_NT/Render_0.webp", title: "CASA_NT1", index: 0},
    {src:"../../images/Arquitecture/CASA_NT/Render_2.webp", title: "CASA_NT3", index: 2},
    {src:"../../images/Arquitecture/CASA_NT/Render_7.webp", title: "CASA_NT4", index: 3},
    {src:"../../images/Arquitecture/CASA_NT/Render_8.webp", title: "CASA_NT5", index: 4},
    {src:"../../images/Arquitecture/CASA_NT/Render_9.webp", title: "CASA_NT6", index: 5},
];
const RooftopSlide = [
    {src: "../../images/Pousada/ROOFTOP/01.webp", title: "Rooftop 1", index: 0},
    {src: "../../images/Pousada/ROOFTOP/02.webp", title: "Rooftop 2", index: 1},
    {src: "../../images/Pousada/ROOFTOP/03.webp", title: "Rooftop 3", index: 2},
    {src: "../../images/Pousada/ROOFTOP/04.webp", title: "Rooftop 4", index: 3},
    {src: "../../images/Pousada/ROOFTOP/05.webp", title: "Rooftop 5", index: 4},
];


const Home = () => {
    return (
        <>
            <Hero image={Hero_Home[0]}/>
            <div className="CTAsection">
                <h1 className="homeTitle animate__fadeIn">Alma e Sofistificaçao</h1>
                <h2 className="homeSubtitle animate__fadeIn">Um trabalho integral para meus clientes. <br/>Energia pra que sua alma brilhe no seu lar.</h2>
                <div className="Meetsection">
                    <img className="background_image"></img>
                    <div className="QuoteSection">
                        <h2 className="Quote animate__fadeIn">"Traduzo quem você é em espaços que fazem sentido. Uma arquitetura guiada pela sensibilidade, pela matéria e por escolhas conscientes, onde sofisticação e alma caminham juntas."</h2>
                        <div className="central">
                            <Link to='/Sobre' className="OrcamentoButton">Sobre Hellen Rocha</Link>
                    </div>
                </div>
            </div>
                
                
            </div>
            
            <div>
                <h2 className="homeTitle animate__fadeIn">Portifólio</h2>
                <h3 className="homeSubtitle animate__fadeIn">Explore o nossos projetos menu</h3>
               <ImageGrid images={homeGrid} wrapperClassName="imageGridHome" /> 
            </div>
            
            <div className="decorationBottomWrapperChafariz">
                <img src="/images/mainpage/MainPage_Chafariz.webp" alt="decoration" className="decorationBottomChafariz"/>
                <img src="/images/interior_logo.webp" alt="decoration" className="decorationBottom"/>
            </div>
        </>
    );
};

export default Home;