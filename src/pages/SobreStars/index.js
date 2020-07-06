import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import TermosStars from './CondicaoStars';
import Banner from '../../components/features/Header/Banner';
import PageContainer from "../../components/features/PageContainer";

import imgBanner from '../../assets/images/compre-suas-stars-1280.png';
import redstar from '../../assets/images/star-red.png';
import goldstar from '../../assets/images/star-gold.png';
import converter from '../../assets/images/converter.png';
import resgatar from '../../assets/images/resgatar.png';

import './styles.scss';
import { useSelector } from 'react-redux';

function SobreStars (props) {
    
    const [redirect, setRedirect] = useState('');
    const contentBanner = "Consquiste o universo dos Games e ganhe na vida real";
    
    return (
        <PageContainer public={true}>
        <Banner imagemBanner={imgBanner} text={contentBanner} />
            {redirect ? <Redirect to={redirect}/> : <div/>}
            <section className="containerSobreStars">
                <div className="contentSobreStars">
                    <div className="containerDescricao">
                        <h1>Sobre as stars</h1>
                        <p>No PlayerStars o YOU WIN é pra valer: nossa plataforma traz duas modalidades para você entrar no
                            jogo com ainda mais vontade de vencer.</p>
                        <p>Desde duelos com os amigos ou conquistando as melhores posições no Ranking, vencer disputas em
                            jogos que você já domina aqui no PlayerStars é um ótimo negócio: seja participando de torneios com
                            premiações, seja entrando no hall de gamers profissionais ou ainda acumulando golden stars que
                            você resgata em dinheiro.</p>
                    </div>
                    <div className="containerIcons">
                    <div>
                            <img src={goldstar} alt="Star Gold" />
                            <h1>GOLD STAR</h1>
                        </div>
                        <div>
                            <img src={redstar} alt="Star Blue" />
                            <h1>RED STAR</h1>
                        </div>
                        <div>
                            <img src={converter} alt="Conversao" />
                            <h1>Converta Stars</h1>
                        </div>
                        <div>
                            <img src={resgatar} alt="Resgatar" />
                            <h1>Resgate gold star</h1>
                        </div>
                        
                    </div>
                </div>

                <div className="containerStars">
                    <div className="contentHeader">
                        <img className="logoHeader" src={goldstar} alt="logo"></img>
                        <div>
                            <h1 className="titleHeader">Gold Star</h1>
                            <p className="textHeader">
                                Jogador que é jogador sabe o quanto vale uma disputa.
                                Na modalidade Gold Star, os gamers adquirem suas stars, definem quanto vale cada duelo e
                                convidam seus adversários para desafios que podem ser 1x1, times e até campeonatos.
                                E o vencedor da partida leva todas as stars que entraram em jogo!
                            </p>
                        </div>
                    </div>
                    <div className="containerValues">
                            <div className="contentValue">
                                <p className="titleValue">20 Gold stars</p>
                                <p className="cash">R$ 100</p>
                                {useSelector(state => state.user.data.user) !== undefined ? (
                                    <button className="btnValue">{"Em breve"}</button>
                                ) : (
                                        <button className="btnValue" onClick={() => setRedirect('/cadastro')}>Participe</button>
                                    )}
                            </div>
                            <div className="contentValue">
                                <p className="titleValue">70 Gold stars</p>
                                <p className="cash">R$ 300</p>
                                {useSelector(state => state.user.data.user) !== undefined ? (
                                    <button className="btnValue">{"Em breve"}</button>
                                ) : (
                                        <button className="btnValue" onClick={() => setRedirect('/cadastro')}>Participe</button>
                                    )}
                            </div>
                            <div className="contentValue">
                                <p className="titleValue">130 Gold stars</p>
                                <p className="cash">R$ 500</p>
                                {useSelector(state => state.user.data.user) !== undefined ? (
                                    <button className="btnValue">{"Em breve"}</button>
                                ) : (
                                        <button className="btnValue" onClick={() => setRedirect('/cadastro')}>Participe</button>
                                    )}
                            </div>
                    </div>
                </div>

                <div className="containerStars">
                    <div className="contentHeader">
                        <img className="logoHeader" src={redstar} alt="logo"></img>
                        <div>
                            <h1 className="titleHeader">Red Star</h1>
                            <p className="textHeader">
                                Quer participar de times vencedores, se tornar um gamer profissional e ser o PlayerStar N0 1?
                                Na modalidade Red Star, sua principal missão é ganhar stars em duelos randômicos e conquistar as
                                melhores posições no Ranking. Quem chegar no topo, participa de torneios abertos com premiações
                                e garante um lugar no hall de gamers profissionais.
                            </p>
                        </div>
                    </div>
                    <div className="containerValues">
                            <div className="contentValue">
                                <p className="titleValue">3 Meses</p>
                                <p className="cash"><span className="vezes">3x</span>R$ 40</p>
                                <p className="cashAvista">ou R$120 à vista</p>
                                {useSelector(state => state.user.data.user) !== undefined ? (
                                    <button className="btnValue">Em breve</button>
                                ) : (
                                        <button className="btnValueRed" onClick={() => setRedirect('/cadastro')}>Participe</button>
                                    )}
                            </div>
                            <div className="contentValue">
                                <p className="titleValue">6 Meses</p>
                                <p className="cash"><span className="vezes">6x</span>R$ 30</p>
                                <p className="cashAvista">ou R$180 à vista</p>
                                {useSelector(state => state.user.data.user) !== undefined ? (
                                    <button className="btnValue">Em breve</button>
                                ) : (
                                        <button className="btnValueRed" onClick={() => setRedirect('/cadastro')}>Participe</button>
                                    )}
                            </div>
                    </div>
                </div>

                <div className="containerStars">
                    <div className="contentHeader">
                        <img className="logoHeader" src={converter} alt="logo"></img>
                        <div className="subContainerHeader">
                            <h1 className="titleHeader">Converta Stars</h1>
                            <p className="textHeader">Praesent velit ipsum, faucibus a ante vitae, aliquam viverra leo. Integer porttitor accumsan nisi vehicula convallis. Donec venenatis id est sit amet laoreet.</p>
                            {useSelector(state => state.user.data.user) !== undefined ? (
                                <button className="btnValueLoged" onClick={() => setRedirect("/converter-stars")}>Converter</button>
                            ) : (
                                    <div />
                                )}
                        </div>
                    </div>
                </div>

                <div className="containerStars">
                    <div className="contentHeader">
                        <img className="logoHeader" src={resgatar} alt="logo"></img>
                        <div className="subContainerHeader">
                            <h1 className="titleHeader">Resgate gold star</h1>
                            <p className="textHeader">Praesent velit ipsum, faucibus a ante vitae, aliquam viverra leo. Integer porttitor accumsan nisi vehicula convallis. Donec venenatis id est sit amet laoreet.</p>
                            {props.user_data !== undefined ? (
                                <button className="btnValueLoged" onClick={() => setRedirect('/')}>Resgatar</button>
                            ) : (
                                    <div />
                                )}
                        </div>
                    </div>
                </div>
            </section>
            <TermosStars />
        </PageContainer>
    );
}

export default SobreStars;