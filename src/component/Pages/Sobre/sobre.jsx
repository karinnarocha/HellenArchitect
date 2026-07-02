import React from "react";
import "./sobre.css";
import Hero from "../../Hero/hero";
import { Link } from "react-router-dom";

const Hero_Sobre = [
    { src: "../../images/Sobre/Hero_Sobre.webp", title: "Arquiteta Hellen Rocha em ambiente residencial clássico-contemporâneo" }
];

const Sobre = () => {
    return (
        <>
            <Hero
                image={Hero_Sobre[0]}
                title="Sobre Hellen Rocha"
                subtitle="Arquiteta especializada em projetos residenciais e comerciais guiados pela sensibilidade, pela matéria e por escolhas conscientes."
            />

            <div className="sobreContainer">

                <div className="credentialsStrip">
                    <div className="credentialItem">
                        <span className="credentialNumber">17</span>
                        <span className="credentialLabel">anos de experiência</span>
                    </div>
                    <div className="credentialDivider"></div>
                    <div className="credentialItem">
                        <span className="credentialNumber">5</span>
                        <span className="credentialLabel">edições da CASACOR</span>
                    </div>
                    <div className="credentialDivider"></div>
                    <div className="credentialItem">
                        <span className="credentialNumber">+</span>
                        <span className="credentialLabel">inúmeras mostras de lojas</span>
                    </div>
                </div>

                <div className="sobreTitleContainer">
                    <h2>Olá, seja bem-vindo ao meu universo!</h2>
                </div>

                <div className="ContentContainer">
                    <div className="sobreContentRow">
                        <div className="textSobre">
                            Meu nome é Hellen Rocha, atuo na área de arquitetura e interiores há 17 anos, já participei de 5 edições de CASACOR e inúmeras mostras de lojas.
                            <br /><br />
                            Ao longo dos anos entendi que é importante trazer a memória afetiva do cliente para esse novo lar e desde então me dedico intensamente a criar lares que emocionam.
                            <br /><br />
                            Isso aconteceu comigo também! Todas as férias eu ia para casa da minha avó, uma casa simples, mas na sala dela existiam duas poltronas e um sofá clássicos. Eu ficava encantada com os capitonê, o couro, que as poltronas tinham, daí surge minha paixão pelo clássico (graças a vovó!). Hoje o clássico me serve como base das criações, mas acrescento uma pitada de contemporâneo.
                        </div>
                        <img className="photosSobre" src="../../images/Sobre/Hellen_photo1.webp" alt="Hellen Rocha em ambiente residencial" />
                    </div>

                    <div className="signatureCallout">
                        <p className="signatureLabel">É o que eu chamo de</p>
                        <p className="signaturePhrase">"estilo clássico-contemporâneo"</p>
                        <p className="signatureSub">que aplico em todos os meus projetos.</p>
                    </div>

                    <div className="sobreContentRow">
                        <img className="photosSobre" src="../../images/Sobre/Hellen_photo2.webp" alt="Hellen Rocha analisando projeto de interiores" />
                        <div className="textSobre">
                            Mas vamos destacar aqui duas coisas que não abro mão: praticidade e identidade, que, para mim, estão nos detalhes! Sou uma pessoa observadora, com o olhar treinado! Gosto de fazer uma leitura das pessoas antes de começar qualquer projeto, porque assim consigo transmitir o que o cliente realmente precisa.
                            <br /><br />
                            Sempre vou bater na tecla que o nosso comportamento, roupas, como falamos, para onde gostamos de viajar e descansar mostram mais da gente do que podemos imaginar, e, para conseguir entender essa linguagem não verbal, me aprofundei no estudo de coach, comportamento e conexão!
                            <br /><br />
                            Em cada reunião, vamos trazendo clareza e construindo o que realmente o cliente quer e precisa dentro de casa. Projetos únicos que conectam e emocionam!
                        </div>
                    </div>



                </div>

            </div>
            <div className="FinalCTAsection">
                <div className="FinalCTAcard">
                    <h2 className="FinalCTAtitle">Vamos criar o seu projeto juntos</h2>
                    <p className="FinalCTAsubtitle"> Conte um pouco sobre o que você sonha para o seu espaço.</p>
                    <Link to="/Contato" className="FinalCTAbutton">Agendar conversa</Link>
                </div>
            </div>
        </>
    )
};

export default Sobre;