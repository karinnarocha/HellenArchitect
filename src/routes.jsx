import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer"
import Home from "./component/Pages/Home/Home.jsx";
import Interior from "./component/Pages/Interiores/Interiores.jsx";
import Sobre from "./component/Pages/Sobre/Sobre.jsx";
import Arquitetura from "./component/Pages/Arquitetura/Arquitetura.jsx";
import O_Escritorio from "./component/Pages/OEscritorio/OEscritorio";
import Lavabo from "./component/Pages/Interiores/Lavabo/Lavabo.jsx";
import AreaGourmet from "./component/Pages/Interiores/AreaGourmet/AreaGourmet.jsx";
import Contato from "./component/Pages/Contato/Contato";
import Quartos from "./component/Pages/Interiores/Quartos/Quartos";
import Quarto_Master from "./component/Pages/Interiores/Quartos/Master/Master.jsx";
import Quarto_Menina from "./component/Pages/Interiores/Quartos/Menina/Menina.jsx";
import Quarto_Menino from "./component/Pages/Interiores/Quartos/Menino/Menino.jsx";
import Pousada from "./component/Pages/Pousada/Pousada.jsx";
import QuartosPousada from "./component/Pages/Pousada/SuiteComun/QuartosPousada";
import Cozinha from "./component/Pages/Interiores/Cozinha/Cozinha.jsx";
import Escritorio from "./component/Pages/Interiores/Escritorio/Escritorio.jsx";
import Sala from "./component/Pages/Interiores/Sala/Sala.jsx";
import Outros from "./component/Pages/Interiores/Outros/Outros.jsx";
import AreaDeServico from "./component/Pages/Interiores/Outros/AreaDeServico/AreaDeServico.jsx";
import Mostras from "./component/Pages/Mostras/Mostras.jsx";

const PagesRoutes = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/interiores" element={<Interior />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/Arquitetura" element={<Arquitetura />} />
                <Route path="/Escritório" element={<O_Escritorio />} />
                <Route path="/Gourmet" element={<AreaGourmet />} />
                <Route path="/lavabo" element={<Lavabo />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/quartos" element={<Quartos />} />
                <Route path="/QuartoMaster" element={<Quarto_Master />} />
                <Route path="/QuartoMenina" element={<Quarto_Menina />} />
                <Route path="/QuartoMenino" element={<Quarto_Menino />} />
                <Route path="/Pousada" element={<Pousada />} />
                <Route path="/QuartosPousada" element={<QuartosPousada />} />
                <Route path="/Cozinha" element={<Cozinha />} />
                <Route path="/Escritorio" element={<Escritorio />} />
                <Route path="/Sala" element={<Sala />} />
                <Route path="/Outros" element={<Outros />} />
                <Route path="/AreaDeServico" element={<areaDeServico />} />
                <Route path="/Mostras" element={<Mostras />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default PagesRoutes;