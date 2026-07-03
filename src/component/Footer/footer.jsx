import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SIDE (Logo + Menu) */}
        <div className="footer-left">
          <img
            className="footer-logo"
            src="/images/logo_cinza.webp"
            alt="Hellen Logo"
          />

          <div className="menu-container">
            <a href="/Arquitetura" className="footer-link">Arquitetura</a>
            <a href="/Interiores" className="footer-link">Interiores</a>
            <a href="/Pousada" className="footer-link">Pousada</a>
            <a href="/Mostras" className="footer-link">Mostras</a>
            <a href="/Sobre" className="footer-link">Sobre</a>
            <a href="/Nosso Escritório" className="footer-link">Nosso Escritório</a>
          </div>
          <p>
            "Casas que sustentam a vida — não só a estética."
          </p>
        </div>

        {/* RIGHT SIDE (Contact) */}
        <div className="contact-container">

          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <p>
              R. Manoel Vivácqua, 285<br />
              Jabour, Vitória - ES<br />
              29072-230, Brasil
            </p>
          </div>

          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:Hellenrocha.arq@gmail.com">
              Hellenrocha.arq@gmail.com
            </a>
          </div>

          <div className="socials-container">
            <a
              href="https://www.youtube.com/@hellenrocha-eu/shorts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-youtube"></i>
            </a>

            <a
              href="https://www.instagram.com/hellenrochaarquitetura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHTS */}
      <div className="rightsreserve-container">
        <div className="rightsreserve">
          All rights reserved. Website built by Karinna Rocha
        </div>
      </div>
    </footer>
  );
};

export default Footer;