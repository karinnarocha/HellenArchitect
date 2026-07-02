import { Link } from "react-router-dom"
import "./Menina.css";
import Hero from "../../../../Hero/Hero";
import ImageSlide from "../../../../SlideShow/Slide";

const Hero_QuartoMenina = [
    { src: "images/Quartos/Hero_QuartoPage.webp", title: "Quarto Menina" },
];

const QuartoMenina_um = [
    { src: "images/Quartos/Menina/01/QuartoMenina_01_1.webp", title: "QuartoMenina1", index: 0 },
    { src: "images/Quartos/Menina/01/QuartoMenina_01_2.webp", title: "QuartoMenina2", index: 1 },
    { src: "images/Quartos/Menina/01/QuartoMenina_01_3.webp", title: "QuartoMenina3", index: 2 },
];
const QuartoMenina_two = [
    { src: "images/Quartos/Menina/02/QuartoMenina02_1.webp", title: "QuartoMenina1", index: 0 },
    { src: "images/Quartos/Menina/02/QuartoMenina02_2.webp", title: "QuartoMenina2", index: 1 },
    { src: "images/Quartos/Menina/02/QuartoMenina02_3.webp", title: "QuartoMenina3", index: 2 },
];

const QuartoMenina_three = [
    { src: "images/Quartos/Menina/03/QuartoMenina03_1.webp", title: "QuartoMenina1", index: 0 },
    { src: "images/Quartos/Menina/03/QuartoMenina03_2.webp", title: "QuartoMenina2", index: 1 },
    { src: "images/Quartos/Menina/03/QuartoMenina03_3.webp", title: "QuartoMenina3", index: 2 },
];
const QuartoMenina_four = [
    { src: "images/Quartos/Menina/PRAIA/QuartoMenina04_1.webp", title: "QuartoMenina1", index: 0 },
    { src: "images/Quartos/Menina/PRAIA/QuartoMenina04_2.webp", title: "QuartoMenina2", index: 1 },
    { src: "images/Quartos/Menina/PRAIA/QuartoMenina04_3.webp", title: "QuartoMenina3", index: 2 },
];
const QuartoMenina = () => {
    return (
        <>
            <Hero
                image={Hero_QuartoMenina[0]}
                title="Quarto de Menina"
                subtitle="Quartos infantis femininos que unem delicadeza, funcionalidade e personalidade."
            />
            <div className="imageGridQuartoMenina">
                <ImageSlide slides={QuartoMenina_um} />
                <ImageSlide slides={QuartoMenina_two} />
                <ImageSlide slides={QuartoMenina_three} />
                <ImageSlide slides={QuartoMenina_four} />
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
};

export default QuartoMenina;
