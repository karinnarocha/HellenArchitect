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
            </Routes>
            <Footer/>
        </Router>
    );
};

export default PagesRoutes;