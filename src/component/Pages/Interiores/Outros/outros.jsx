import "./outros.css"
import Hero from "../../../Hero/hero";  
import ImagesGrid from "../../../ImagesGrid/imagesGrid";
import ImageSlide from "../../../SlideShow/slide";

const Hero_Outros =[
    {src:"/images/interior/Outros/Garagem/03.webp", title: "Outros"},
];

const Area_de_Servico = [
    {src:"/images/interior/Outros/Area_de_servico/01/01.webp", title: "Area de Serviço", link:"/Area_de_Servico" },
];

const Escada = [
    {src: "images/interior/Escada/01.webp", title: "Escada Pousada", index: 0},
    {src: "images/interior/Escada/02.webp", title: "Escada Pousada", index: 1},
    {src: "images/interior/Escada/03.webp", title: "Escada Pousada", index: 2},
    {src: "images/interior/Escada/04.webp", title: "Escada Pousada", index: 3},
];



const Outros = () => {
    return (
        <>
            <Hero image={Hero_Outros[0]} />
            <div className="imageGridOutros">
                <ImagesGrid images={Area_de_Servico} />
                <ImageSlide slides={Escada} />
            </div>
        </>
    );
}   

export default Outros;