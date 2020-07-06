import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import './styles.scss';

export default function SobreDescricao () {  
    const user = useSelector(state => state.user.data.user)
        return (
            <>
                <section className="sobre">
                    <div className="container-sobre">
                        <h1 className="sobre-titulo">
                            <p>O PlayerStars é o lugar onde duelos épicos acontecem.</p>
                            <p>Onde o que define o jogo é sua habilidade de vencer.</p>
                            <p>E onde quem conquista o universo dos games ganha na vida real.</p>
                        </h1>
                        <div className="div-descricao">
                            <p className="descricao-sobre">
                                Sua missão? Desafiar, duelar e conquistar a vitória na primeira Plataforma Digital para Duelo 
                                de Games do mundo: aperte start e conheça o PlayerStars.
                            </p>
                            <p className="descricao-sobre">
                                Para adicionar mais emoção nas partidas dos jogos que você já domina, a estratégia é simples: 
                                entre na disputa, desafie outros gamers, vença batalhas acirradas e a vitória é sua.
                            </p>
                            <p className="descricao-sobre" style={{textTransform: 'uppercase'}}>
                                <b>O mais importante é que no PlayerStars you Win é pra valer: Aqui tem grande lucros na jogada.</b> 
                            </p>
                            <p className="descricao-sobre">
                                Com habilidade e vontade de vencer, no PlayerStars você pode se tornar um jogador profissional, 
                                integrar times vencedores de cada jogo, participar de campeonatos com premiações, duelar com 
                                amigos e faturar resgatando em dinheiro as golden stars acumuladas nas disputas.
                            </p>
                            {user ?
                                <Link to="/sobre-stars"><button className="btn-participe">Sobre as Stars</button></Link> :
                                <Link to="/cadastro"><button className="btn-participe">Quero ser um PlayerStar</button></Link>
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }