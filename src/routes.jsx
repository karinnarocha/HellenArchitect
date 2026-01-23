import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer"
import Home from "./component/Pages/Home/home";
import Interior from "./component/Pages/Interiores/interiores";
import Sobre from "./component/Pages/Sobre/sobre";
import Arquitetura from "./component/Pages/Arquitetura/arquitetura";
import O_Escritorio from "./component/Pages/O_Escritorio/Escritorio";
import Lavabo from "./component/Pages/Interiores/Lavabo/lavabo";
import AreaGourmet from "./component/Pages/Interiores/Area_Gourmet/areaGourmet";
import Contato from "./component/Pages/Contato/contato";
import Quartos from "./component/Pages/Interiores/Quartos/quartos";
import Quarto_Master from "./component/Pages/Interiores/Quartos/Master/master";
import Quarto_Menina from "./component/Pages/Interiores/Quartos/Menina/menina";
import Quarto_Menino from "./component/Pages/Interiores/Quartos/Menino/menino";
import Pousada from "./component/Pages/Pousada/pousada";
import QuartosPousada from "./component/Pages/Pousada/Quartos_pousada/Suite_Comun/Quartos_pousada";
import Cozinha from "./component/Pages/Interiores/Cozinha/cozinha";
import Escritorio from "./component/Pages/Interiores/Escritorio/escritorio";
import Sala from "./component/Pages/Interiores/Sala/sala";
import Outros from "./component/Pages/Interiores/Outros/outros"; 
import Area_de_Servico from "./component/Pages/Interiores/Outros/Area_de_Servico/area_de_servico";

const PagesRoutes = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/interiores" element={<Interior/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/Arquitetura" element={<Arquitetura/>}/>
                <Route path="/Escritório" element={<O_Escritorio/>}/>
                <Route path="/Gourmet" element={<AreaGourmet/>}/>
                <Route path="/lavabo" element={<Lavabo/>}/>
                <Route path="/Contato" element={<Contato/>}/>
                <Route path="/quartos" element={<Quartos/>}/>
                <Route path="/Quarto_Master" element={<Quarto_Master/>}/>
                <Route path="/Quarto_Menina" element={<Quarto_Menina/>}/>
                <Route path="/Quarto_Menino" element={<Quarto_Menino/>}/>
                <Route path="/Pousada" element={<Pousada/>}/>
                <Route path="/Quartos_pousada" element={<QuartosPousada/>}/>
                <Route path="/Cozinha" element={<Cozinha/>}/>
                <Route path="/Escritorio" element={<Escritorio/>}/>
                <Route path="/Sala" element={<Sala/>}/>
                <Route path="/Outros" element={<Outros/>}/>
                <Route path="/Area_de_Servico" element={<Area_de_Servico/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default PagesRoutes;