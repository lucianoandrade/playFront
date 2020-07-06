import React from "react";
import { Link } from "react-router-dom";
import credito from "./img/stars.png";
import ranking from "./img/ranking.png";
import plataformas from "./img/plataformas.png";
import desafios from "./img/desafios.png";
import torneios from "./img/torneios.png";

import './styles.scss';

function SobreDesafios () {
    return (
        <section className="desafios">
            <h1 className="desafios-titulo">Aperte start e conquiste a sua vitória</h1>
            <div className="list-desafio">
                <div className="list-desafio-item">
                    <img className="list-desafio-item-img" src={desafios} alt="Desafios"></img>
                    <p className="list-desafio-item-titulo">Desafios entre os usuários</p>
                </div>
                <div className="list-desafio-item">
                    <img className="list-desafio-item-img" src={ranking} alt="Ranking"></img>
                    <p className="list-desafio-item-titulo">Time PlayerStars formado pelo Ranking</p>
                </div>
                <div className="list-desafio-item">
                    <img className="list-desafio-item-img" src={torneios} alt="Torneios"></img>
                    <p className="list-desafio-item-titulo">Torneios abertos e fechados</p>
                </div>
                <div className="list-desafio-item">
                    <img className="list-desafio-item-img" src={plataformas} alt="Plataformas"></img>
                    <p className="list-desafio-item-titulo">PC, XBOX e PlayStation 4</p>
                </div>
                <div className="list-desafio-item">
                    <img className="list-desafio-item-img" src={credito} alt="Credito"></img>
                    <p className="list-desafio-item-titulo">Compre Stars e desafie seus oponentes</p>
                </div>
            </div>
            <p className="desafios-texto">Disputas épicas, estrelas em jogo e ganhar só depende de você. <br/>Aceita o desafio?</p>
            <Link to="/como-funciona"><button className="btn-desafios">Como Funciona</button></Link>
        </section>
    )
}

export default SobreDesafios;