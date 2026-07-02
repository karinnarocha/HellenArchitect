import { Link } from "react-router-dom"

import "./cozinha.css";
import Hero from "../../../Hero/hero";
import ImageSlide from "../../../SlideShow/slide";

const Hero_Cozinha = [
    { src: "/images/interior/Cozinha/Cozinha1/01.webp", title: "Cozinha" },
];

const Cozinha1 = [
    { src: "/images/interior/Cozinha/Cozinha1/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha2/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha3/03.webp", title: "Cozinha Compacta", index: 2 },
];

const Cozinha2 = [
    { src: "/images/interior/Cozinha/Cozinha2/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha2/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha2/03.webp", title: "Cozinha Compacta", index: 2 },
    { src: "/images/interior/Cozinha/Cozinha2/04.webp", title: "Cozinha Compacta", index: 3 },
];

const Cozinha3 = [
    { src: "/images/interior/Cozinha/Cozinha3/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha3/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha3/03.webp", title: "Cozinha Compacta", index: 2 },
];

const Cozinha4 = [
    { src: "/images/interior/Cozinha/Cozinha4/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha4/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha4/03.webp", title: "Cozinha Compacta", index: 2 },
];

const Cozinha5 = [
    { src: "/images/interior/Cozinha/Cozinha5/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha5/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha5/03.webp", title: "Cozinha Compacta", index: 2 },
];
const Cozinha6 = [
    { src: "/images/interior/Cozinha/Cozinha6/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha6/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha6/03.webp", title: "Cozinha Compacta", index: 2 },
];
const Cozinha7 = [
    { src: "/images/interior/Cozinha/Cozinha7/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha7/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha7/03.webp", title: "Cozinha Compacta", index: 2 },
    { src: "/images/interior/Cozinha/Cozinha7/04.webp", title: "Cozinha Compacta", index: 3 },
    { src: "/images/interior/Cozinha/Cozinha7/05.webp", title: "Cozinha Compacta", index: 4 },
];
const Cozinha8 = [
    { src: "/images/interior/Cozinha/Cozinha8/01.webp", title: "Design de Cozinha", index: 0 },
    { src: "/images/interior/Cozinha/Cozinha/02.webp", title: "Cozinha Moderna", index: 1 },
    { src: "/images/interior/Cozinha/Cozinha8/03.webp", title: "Cozinha Compacta", index: 2 },
    { src: "/images/interior/Cozinha/Cozinha8/04.webp", title: "Cozinha Compacta", index: 3 },
];



const Cozinha = () => {
    return (
        <>
            <Hero image={Hero_Cozinha[0]} />
            <div className="imageGridCozinha">
                <ImageSlide label="Cozinha 1" slides={Cozinha1} />
                <ImageSlide label="Cozinha 2" slides={Cozinha2} />
                <ImageSlide label="Cozinha 3" slides={Cozinha3} />
                <ImageSlide label="Cozinha 4" slides={Cozinha4} />
                <ImageSlide label="Cozinha 5" slides={Cozinha5} />
                <ImageSlide label="Cozinha 6" slides={Cozinha6} />
                <ImageSlide label="Cozinha 7" slides={Cozinha7} />
                <ImageSlide label="Cozinha 8" slides={Cozinha8} />
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

export default Cozinha;