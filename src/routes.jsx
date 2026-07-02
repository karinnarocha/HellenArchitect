import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer"
import Home from "./component/Pages/Home/home";
import Interior from "./component/Pages/Interiores/interiores";
import Sobre from "./component/Pages/Sobre/sobre";
import Arquitetura from "./component/Pages/Arquitetura/arquitetura";
import O_Escritorio from "./component/Pages/OEscritorio/OEscritorio";
import Lavabo from "./component/Pages/Interiores/Lavabo/lavabo";
import AreaGourmet from "./component/Pages/Interiores/AreaGourmet/areaGourmet";
import Contato from "./component/Pages/Contato/contato";
import Quartos from "./component/Pages/Interiores/Quartos/quartos";
import Quarto_Master from "./component/Pages/Interiores/Quartos/Master/master";
import Quarto_Menina from "./component/Pages/Interiores/Quartos/Menina/menina";
import Quarto_Menino from "./component/Pages/Interiores/Quartos/Menino/menino";
import Pousada from "./component/Pages/Pousada/pousada";
import QuartosPousada from "./component/Pages/Pousada/SuiteComun/QuartosPousada";
import Cozinha from "./component/Pages/Interiores/Cozinha/cozinha";
import Escritorio from "./component/Pages/Interiores/Escritorio/escritorio";
import Sala from "./component/Pages/Interiores/Sala/sala";
import Outros from "./component/Pages/Interiores/Outros/outros";
import Area_de_Servico from "./component/Pages/Interiores/Outros/AreaDeServico/areaDeServico";
import Mostras from "./component/Pages/Mostras/mostras";

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