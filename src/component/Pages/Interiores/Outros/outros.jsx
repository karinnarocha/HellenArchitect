import "./outros.css"
import Hero from "../../../Hero/hero";
import ImagesGrid from "../../../ImagesGrid/imagesGrid";
import ImageSlide from "../../../SlideShow/slide";

import { Link } from "react-router-dom";

const Hero_Outros = [
    { src: "/images/interior/Outros/Garagem/03.webp", title: "Outros" },
];

const Area_de_Servico = [
    { src: "/images/interior/Outros/Area_de_servico/01/03.webp", title: "Area de Serviço", link: "/Area_de_Servico" },
];

const Escada = [
    { src: "images/interior/Outros//Escada/01.webp", title: "Escada Pousada", index: 0 },
    { src: "images/interior/Outros//Escada/02.webp", title: "Escada Pousada", index: 1 },
    { src: "images/interior/Outros//Escada/03.webp", title: "Escada Pousada", index: 2 },
    { src: "images/interior/Outros//Escada/04.webp", title: "Escada Pousada", index: 3 },
];

const Garagem = [
    { src: "images/interior/Outros/Garagem/01.webp", title: "Garagem Pousada", index: 0 },
    { src: "images/interior/Outros/Garagem/02.webp", title: "Garagem Pousada", index: 1 },
    { src: "images/interior/Outros/Garagem/03.webp", title: "Garagem Pousada", index: 2 },
    { src: "images/interior/Outros/Garagem/04.webp", title: "Garagem Pousada", index: 3 },
];

const Loft = [
    { src: "images/interior/Outros/Loft/01.webp", title: "Loft Pousada", index: 0 },
    { src: "images/interior/Outros/Loft/02.webp", title: "Loft Pousada", index: 1 },
    { src: "images/interior/Outros/Loft/03.webp", title: "Loft Pousada", index: 2 },
    { src: "images/interior/Outros/Loft/04.webp", title: "Loft Pousada", index: 3 },
];

const Pub = [
    { src: "images/interior/Outros/Pub/01.webp", title: "Pub Pousada", index: 0 },
    { src: "images/interior/Outros/Pub/02.webp", title: "Pub Pousada", index: 1 },
    { src: "images/interior/Outros/Pub/03.webp", title: "Pub Pousada", index: 2 },
];





const Outros = () => {
    return (
        <>
            <Hero image={Hero_Outros[0]} />
            <div className="imageGridOutros">
                <ImagesGrid label="Area de Serviço" images={Area_de_Servico} />
                <ImageSlide label="Escada" slides={Escada} />
                <ImageSlide label="Garagem" slides={Garagem} />
                <ImageSlide label="Loft" slides={Loft} />
                <ImageSlide label="Pub" slides={Pub} />
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

export default Outros;