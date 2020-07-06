import React from 'react';

import Moment from "react-moment";
import "moment/locale/pt-br";
import "moment-timezone";

import './styles.scss';
import redStar from '../../../assets/images/red-star.png';
import goldStar from '../../../assets/images/gold-star.png';

const CardCompra = (props) => {

    return (
        <>
            <div className="containerCardCompras">
                {props.starType === 'blue' ?
                    <img src={redStar} className="image" alt="Red Star" /> :
                    <img src={goldStar} className="image" alt="Gold Star" />
                }

                {/* Bloco do meio */}
                <div className="contentCard">
                    {/* Total de Stars com o tipo de plano */}
                    <div className="containerStarMensalDate">
                        <div className="contentStarMensal">
                            <p className="descriptionStarMensal">{props.price} Stars {props.starType} <i>· {props.starType === 'gold' ? 'Pacote' : 'Mensalidade'} </i></p>
                        </div>
                        {/* Bloco da hora e data de compra */}
                        <div className="containerDate">
                            <p className="date">
                                <Moment
                                    format="DD/MM/YY, HH:mm"
                                    locale="pt-br"
                                    date={props.date}
                                />
                            </p>
                        </div>
                    </div>

                    {/* Dados de baixo, preso, status... */}
                    <div className="containerDadosCompra">
                        <div className="contentDado">
                            <p className="titleDado">Valor Pago</p>
                            <p className="descriptionDado">R$ {props.price},00</p>
                        </div>
                        <div className="contentDado">
                            <p className="titleDado">Pago via</p>
                            <p className="descriptionDado">{props.payment === 'PAGSEGURO' ? 'PagSeguro' : props.payment }</p>
                        </div>
                        <div className="contentDado">
                            <p className="titleDado">Status</p>
                            <p className="descriptionDado">{props.status}</p>
                        </div>
                        {props.duration ?
                            <div className="contentDado">
                                <p className="titleDado">Validade</p>
                                <p className="descriptionDado">{props.duration} meses</p>
                            </div>
                            : (<div></div>)
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCompra;