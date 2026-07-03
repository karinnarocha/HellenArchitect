import React, { useState } from "react";
import "./Contato.css";

const heroImage = "/images/mainpage/hero.jpg"; // swap for a real Contato-specific photo

const Contato = () => {
    const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:Hellenrocha.arq@gmail.com?subject=Contato pelo site&body=Nome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0A%0A${formData.mensagem}`;
    };

    return (
        <>
            <div className="Contato-hero">
                <img
                    className="Contato-heroImage"
                    src={heroImage}
                    alt="Escritório de arquitetura Hellen Rocha em Vitória, ES"
                />
                <div className="Contato-heroOverlay">
                    <h1 className="Contato-heroTitle">Fale com Hellen Rocha</h1>
                    <p className="Contato-heroSubtitle">
                        Arquitetura e interiores em Vitória, ES, com atendimento personalizado em todo o Brasil.
                    </p>
                </div>
            </div>

            <section className="Contato-info">
                <p className="Contato-infoLine">
                    <a href="mailto:Hellenrocha.arq@gmail.com" className="Contato-infoLink">
                        Hellenrocha.arq@gmail.com
                    </a>
                </p>
                <p className="Contato-infoLine">
                    R. Manoel Vivácqua, 285 - Jabour, Vitória - ES, 29072-230, Brasil
                </p>
            </section>

            <form className="Contato-formSection" onSubmit={handleSubmit}>
                <h2 className="Contato-formHeading">Entre em contato comigo!</h2>

                <div className="Contato-formFields">
                    <div className="Contato-field">
                        <label className="Contato-label" htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            className="Contato-input"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="Contato-field">
                        <label className="Contato-label" htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="Contato-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="Contato-field">
                        <label className="Contato-label" htmlFor="telefone">Telefone</label>
                        <input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            className="Contato-input"
                            placeholder="(27) 99999-9999"
                            value={formData.telefone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="Contato-field">
                        <label className="Contato-label" htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            className="Contato-textarea"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="Contato-submitButton">Enviar</button>
            </form>
        </>
    );
};

export default Contato;