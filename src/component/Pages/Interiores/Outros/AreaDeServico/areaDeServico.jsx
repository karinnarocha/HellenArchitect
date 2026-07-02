import { Link } from "react-router-dom"
import "./AreaDeServico.css";
import Hero from "../../../../Hero/Hero";
import ImageSlide from "../../../../SlideShow/Slide";

const Hero_Area_de_Servico = [
    { src: "images/interior/Outros/Area_de_servico/04/02.webp", title: "Area de Serviço" },
];

const Area_de_Servico_um = [
    { src: "images/interior/Outros/Area_de_servico/01/01.webp", title: "Escada Pousada", index: 0 },
    { src: "images/interior/Outros/Area_de_servico/01/02.webp", title: "Escada Pousada", index: 1 },
    { src: "images/interior/Outros/Area_de_servico/01/03.webp", title: "Escada Pousada", index: 2 },
];

const Area_de_Servico_two = [
    { src: "images/interior/Outros/Area_de_servico/02/01.webp", title: "Garagem Pousada", index: 0 },
    { src: "images/interior/Outros/Area_de_servico/02/02.webp", title: "Garagem Pousada", index: 1 },
];

const Area_de_Servico_three = [
    { src: "images/interior/Outros/Area_de_servico/03/01.webp", title: "Loft Pousada", index: 0 },
    { src: "images/interior/Outros/Area_de_servico/03/02.webp", title: "Loft Pousada", index: 1 },
];

const Area_de_Servico_four = [
    { src: "images/interior/Outros/Area_de_servico/04/02.webp", title: "Pub Pousada", index: 0 },
    { src: "images/interior/Outros/Area_de_servico/04/03.webp", title: "Pub Pousada", index: 1 },
];

const AreaDeServico = () => {
    return (
        <>
            <Hero image={Hero_Area_de_Servico[0]} />
            <div className="imageGridArea_de_Servico">
                <ImageSlide slides={Area_de_Servico_um} />
                <ImageSlide slides={Area_de_Servico_two} />
                <ImageSlide slides={Area_de_Servico_three} />
                <ImageSlide slides={Area_de_Servico_four} />
            </div>
            <div className="central">
                <Link to='/Contato' className="OrcamentoButton">Orçamento</Link>
            </div>
        </>
    );
};

export default AreaDeServico;
