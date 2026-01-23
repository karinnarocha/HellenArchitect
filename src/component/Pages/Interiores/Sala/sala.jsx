import "./sala.css";
import Hero from "../../../Hero/hero";
import ImageSlide from "../../../SlideShow/slide";

const Hero_Sala = [
    {src:"/images/interior/Sala/01/02.webp", title: "Sala de Estar"},
];

const Sala1 = [
    {src: "/images/interior/Sala/01/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/01/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/01/03.webp", title: "Sala Compacta", index:2},
    {src: "/images/interior/Sala/01/04.webp", title: "Sala Aconchegante", index:3},
];

const Sala2 = [
    {src: "/images/interior/Sala/02/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/02/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/02/03.webp", title: "Sala Compacta", index:2},
    {src: "/images/interior/Sala/02/04.webp", title: "Sala Aconchegante", index:3},
    {src: "/images/interior/Sala/02/05.webp", title: "Sala Aconchegante", index:4},
];

const Sala3 = [
    {src: "/images/interior/Sala/03/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/03/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/03/03.webp", title: "Sala Compacta", index:2},
    {src: "/images/interior/Sala/03/04.webp", title: "Sala Aconchegante", index:3},
];
const Sala4 = [
    {src: "/images/interior/Sala/04/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/04/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/04/03.webp", title: "Sala Compacta", index:2},
    {src: "/images/interior/Sala/04/04.webp", title: "Sala Aconchegante", index:3},
];

const Sala5 = [
    {src: "/images/interior/Sala/05/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/05/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/05/03.webp", title: "Sala Compacta", index:2},
    {src: "/images/interior/Sala/05/04.webp", title: "Sala Aconchegante", index:3},
];

const Sala6 = [
    {src: "/images/interior/Sala/06/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/06/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/06/03.webp", title: "Sala Compacta", index:2},
    {src: "/images/interior/Sala/06/04.webp", title: "Sala Aconchegante", index:3},
    {src: "/images/interior/Sala/06/05.webp", title: "Sala Aconchegante", index:4},
];

const Sala7 = [
    {src: "/images/interior/Sala/07/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/07/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/07/03.webp", title: "Sala Compacta", index:2},
];
const Sala8 = [
    {src: "/images/interior/Sala/08/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/08/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/08/03.webp", title: "Sala Compacta", index:2},
    {src: "/images/interior/Sala/08/04.webp", title: "Sala Aconchegante", index:3},
    {src: "/images/interior/Sala/08/05.webp", title: "Sala Aconchegante", index:4},
];

const Sala9 = [
    {src: "/images/interior/Sala/09/01.webp", title: "Design de Sala", index:0},
    {src: "/images/interior/Sala/09/02.webp", title: "Sala Moderna", index:1},
    {src: "/images/interior/Sala/09/03.webp", title: "Sala Compacta", index:2},
];


const Sala = () => {
    return (
        <>
        <Hero image={Hero_Sala[0]}/>
        <div className="imageGridSala">
            <ImageSlide label="" slides={Sala1}/>
            <ImageSlide label="" slides={Sala2}/>
            <ImageSlide label="" slides={Sala3}/> 
            <ImageSlide label="" slides={Sala4}/>
            <ImageSlide label="" slides={Sala5}/>
            <ImageSlide label="" slides={Sala6}/>
            <ImageSlide label="" slides={Sala7}/>
            <ImageSlide label="" slides={Sala8}/>
            <ImageSlide label="" slides={Sala9}/>
        </div>
        </>
    );
}

export default Sala;    