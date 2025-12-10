import React from "react";
import "./home.css";
import Hero from "../../Hero/hero";
import ImageGrid from "../../ImagesGrid/imagesGrid";
import '/node_modules/animate.css/animate.css';


const Hero_Home = [
    {src:"../../images/mainpage/welcome_mainpage.webp", title: "Bem Vindo!"},
];
const homeGrid  = [
    {src: "/images/mainpage/Interiores_mainpage.webp", title: "Interiores", className:" gallery__item--1", link:"/Interiores"},
    {src: "/images/mainpage/MainPage_Arquitetura.webp", title: "Arquitetura" ,className:"gallery__item--2", link:"/Arquitetura"},
    {src: "/images/mainpage/MainPage_Pousada.webp", title: "Pousada", className:"gallery__item--3", link:"/Pousada"},
    {src: "/images/mainpage/MainPage_Mostras.webp", title: "Mostras", className:"gallery__item--4", link:"/Mostras"},
    {src: "/images/mainpage/MainPage_OEscritorio.webp", title: "O Escritorio", className:"gallery__item--5", link:"/OEscritorio"},
];



const Home = () => {
    return (
        <>
            <Hero image={Hero_Home[0]}/>
            <div>
                <h1 className="homeTitle animate__fadeIn">Alma e Sofistificaçao</h1>
                <h2 className="homeSubtitle animate__fadeIn">Um trabalho integral para meus clientes. <br/>Energia pra que sua alma brilhe no seu lar.</h2>
            </div>
            <ImageGrid images={homeGrid} wrapperClassName="imageGridHome" />
            <div className="decorationBottomWrapperChafariz">
                <img src="/images/mainpage/MainPage_Chafariz.webp" alt="decoration" className="decorationBottomChafariz"/>
                <img src="/images/interior_logo.webp" alt="decoration" className="decorationBottom"/>
            </div>
        </>
    );
};

export default Home;