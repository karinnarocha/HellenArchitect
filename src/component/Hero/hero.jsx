import React from "react";
import './hero.css';
import { useLocation, useNavigate, Link } from "react-router-dom";
import '/node_modules/animate.css/animate.css';

const Hero = ({ image, title, subtitle, ctaText, ctaLink, showScrollIndicator }) => {
    const location = useLocation();
    const navigate = useNavigate();

    if (!image) return null;

    const isHomePage = location.pathname === "/";

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    };

    return (
        <div className="Hero-section animate__animated animate__slideInDown">
            <img className="Hero-Background" src={image.src} alt={image.title} />

            {!isHomePage && title && (
                <div className="imageTitleOverlayBackground">
                    <div className="imageTitleOverlayText">
                        <div>
                            <div className="imageTitleOverlayHeadingRow">
                                <span className="returnIcon" onClick={() => navigate(-1)}>❰</span>
                                <h1 className="imageTitleOverlayHeading">{title}</h1>
                            </div>
                            {subtitle && <p className="imageTitleOverlaySubtitle">{subtitle}</p>}
                        </div>
                    </div>
                </div>
            )}

            {isHomePage && title && (
                <div className="Hero-overlay">
                    <div className="Hero-overlayContent animate__animated animate__fadeIn">
                        <h1 className="Hero-title">{title}</h1>
                        {subtitle && <p className="Hero-subtitle">{subtitle}</p>}
                        {ctaText && ctaLink && (
                            <a href={ctaLink} className="Hero-ctaButton">{ctaText}</a>
                        )}
                    </div>
                    {showScrollIndicator && (
                        <button
                            className="Hero-scrollIndicator"
                            onClick={scrollToContent}
                            aria-label="Rolar para baixo"
                        >
                            ↓
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Hero;