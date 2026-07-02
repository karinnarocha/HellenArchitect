import "./Escritorio.css";
import Hero from "../../../Hero/Hero";
import ImageSlide from "../../../SlideShow/Slide";

import { Link } from "react-router-dom";

const Hero_Escritorio = [
    { src: "/images/interior/Escritorio/Escritorio2/04.webp", title: "Escritório" },
];

const Escritorio1 = [
    { src: "/images/interior/Escritorio/Escritorio1/01.webp", title: "Design de Escritório", index: 0 },
    { src: "/images/interior/Escritorio/Escritorio1/02.webp", title: "Escritório Moderno", index: 1 },
    { src: "/images/interior/Escritorio/Escritorio1/03.webp", title: "Escritório Compacto", index: 2 },
];
const Escritorio2 = [
    { src: "/images/interior/Escritorio/Escritorio2/01.webp", title: "Design de Escritório", index: 0 },
    { src: "/images/interior/Escritorio/Escritorio2/02.webp", title: "Escritório Moderno", index: 1 },
    { src: "/images/interior/Escritorio/Escritorio2/03.webp", title: "Escritório Compacto", index: 2 },
    { src: "/images/interior/Escritorio/Escritorio2/04.webp", title: "Escritório Compacto", index: 3 },
];

const Escritorio3 = [
    { src: "/images/interior/Escritorio/Escritorio3/01.webp", title: "Design de Escritório", index: 0 },
    { src: "/images/interior/Escritorio/Escritorio3/02.webp", title: "Escritório Moderno", index: 1 },
    { src: "/images/interior/Escritorio/Escritorio3/03.webp", title: "Escritório Compacto", index: 2 },
];

const Escritorio4 = [
    { src: "/images/interior/Escritorio/Escritorio4/01.webp", title: "Design de Escritório", index: 0 },
    { src: "/images/interior/Escritorio/Escritorio4/02.webp", title: "Escritório Moderno", index: 1 },
    { src: "/images/interior/Escritorio/Escritorio4/03.webp", title: "Escritório Compacto", index: 2 },
];

const Escritorio = () => {
    return (
        <>
            <Hero image={Hero_Escritorio[0]} />
            <div className="imageGridEscritorio ">
                <ImageSlide label="Escritorio 1" slides={Escritorio1} />
                <ImageSlide label="Escritorio 2" slides={Escritorio2} />
                <ImageSlide label="Escritorio 3" slides={Escritorio3} />
                <ImageSlide label="Escritorio 4 " slides={Escritorio4} />
            </div>
            <div className="FinalCTAsection">
                <div className="FinalCTAcard">
                    <h2 className="FinalCTAtitle">Vamos criar o seu projeto</h2>
                    <p className="FinalCTAsubtitle">Conte um pouco sobre o que você sonha para o seu espaço.</p>
                    <Link to="/Contato" className="FinalCTAbutton">Agendar conversa</Link>
                </div>
            </div>
        </>
    );
}

export default Escritorio;