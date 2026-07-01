import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import "/node_modules/animate.css/animate.css";

const Navbar = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [interioresOpen, setInterioresOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">

      {/* ===== TOP RIGHT CONTACT BUTTON ===== */}
      <div className="contactTop">
        <a href="tel:+17322177735" className="contactBtn">
          (732) 217-7735
        </a>
      </div>
      {/* ===== LINKS CONTAINER ===== */}
      <div className="LinksContainer">

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>

          <li>
            <Link to="/Arquitetura" onClick={() => setIsOpen(false)}>
              Arquitetura
            </Link>
          </li>

          {/* ===== INTERIORES DROPDOWN ===== */}
          <li className="dropdown">
            <Link
              className={
                interioresOpen || location.pathname.startsWith("/Interiores")
                  ? "active-dropdown"
                  : ""
              }
              onClick={() => {
                setInterioresOpen(!interioresOpen);
                setIsOpen(false);
              }}
            >
              Interiores
            </Link>

            {interioresOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/Gourmet">Area Gourmet</Link></li>
                <li><Link to="/Cozinha">Cozinha</Link></li>
                <li><Link to="/Escritorio">Escritório</Link></li>
                <li><Link to="/Lavabo">Lavabo</Link></li>
                <li><Link to="/Quartos">Quartos</Link></li>
                <li><Link to="/Sala">Sala</Link></li>
                <li><Link to="/Outros">Outros</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/Pousada" onClick={() => setIsOpen(false)}>
              Pousada
            </Link>
          </li>

          <li>
            <Link to="/Escritório" onClick={() => setIsOpen(false)}>
              Escritório
            </Link>
          </li>

          <li>
            <Link to="/Mostras" onClick={() => setIsOpen(false)}>
              Mostras
            </Link>
          </li>

          <li>
            <Link to="/Sobre" onClick={() => setIsOpen(false)}>
              Sobre
            </Link>
          </li>

        </ul>

        <button className="dropdownMenuIcon" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* ===== LOGO SECTION ===== */}
      <div className="navbarcontainer">
        <div className="LogoSpace">
          {isMainPage ? (
            <img
              className="LogoImageMain animate__animated animate__zoomIn"
              src="/images/full_Logo.png"
              alt="Logo"
            />
          ) : (
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                className="LogoImage"
                src="/images/logo_cinza.webp"
                alt="Hellen Logo"
              />
            </Link>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;