import React from "react";
import './hero.css';
import { useLocation, useNavigate } from "react-router-dom";
import '/node_modules/animate.css/animate.css';

const Hero  = ({image}) => {
    const location =  useLocation();
    const navigate = useNavigate();

    console.log(navigate);
    if (!image) return null;

    const isHomePage = location.pathname === "/";

    return(
        <div className="Hero-section animate__animated animate__slideInDown">
            <img className="Hero-Background" src={image.src} alt={image.title} />
            {!isHomePage && (
            <div className="imageTitleOverlayBackground">
                <div className="imageTitleOverlayText">
                    <span className="returnIcon" onClick={() => navigate(-1)}>❰</span>
                    {image.title}</div>
            </div>
            )}
        </div>
    );
};

export default Hero;