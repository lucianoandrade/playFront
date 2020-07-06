import React from 'react'
import starGold from '../../../assets/icons/star-gold.svg';
import starRed from '../../../assets/icons/star-red.svg';
import win from '../../../assets/images/vitoria.svg';
import review from '../../../assets/images/review.svg';
import tie from '../../../assets/images/empate.svg';

import './styles.scss';


function Card (props) {

    const renderTitle = props => {
        let text = ` ${props.platform} · ${props.matchTitle}`
        if(props.matchTitle === "Duelo Individual") {
            text = ` ${props.platform} · Individual`
        return text 
        } else {
            text = ` ${props.platform} · Entre Times`
        }
    }
    
    const renderStarType = props => {
        let starType = `${props.starType}`
        if(props.starType === "RED_STAR") {
            starType = `Red Star`
            return starType
        } else {
            starType = `Gold Star`
            return starType
        }
    }
    
    const renderWinner = props => {
        const { winner = {}} = props
        let textWinner = `${winner && winner.i_am_winner}`
        if(winner && winner.i_am_winner === true){
            textWinner = `você venceu ${props.opponentName.split(' ', 1)}!`
            return textWinner
        } else if (winner && winner.i_am_winner === false) {
            textWinner = `Vitoria de ${props.opponentName.split(' ', 1)}`
            return textWinner
        } else {
            textWinner = `Empate com ${props.opponentName.split(' ', 1)}`
            return textWinner
        }
    }

    const iconStatus = (status) => {
        switch (status) {
            case "UNDER_REVIEW":
                return <img src={review} alt="Em apuração"/>
            case "FINISHED_BY_TIE":
                return <img src={tie} alt="Empate"/>
            default:
                return <img src={win} alt="Vitória"/>
        }
    }


    return (
            <div className="containerCard">
                {/* Primeira coluna */}
                <div className="containerImage">
                    <img className="imageGame" src={props.imageGame} alt="Game"></img>
                </div>
                {/* Final da primeira coluna */}

                {/* Segunda coluna */}
                <div className="containerInfo">
                    <div className="headerInfo">
                        <h3 className="nameGame">{props.nomeGame}</h3>
                        <span className="typeMatch">{renderTitle(props)}</span>
                    </div>
                    <div className="contentInfo">
                        <div className="containerBetPremium">
                            <div className="containerBet">
                                <div className="contentBet">
                                    <span className="contentTextInfo">{ props.status === "UNDER_REVIEW" ? "Aguardando apuração" :renderWinner(props)}</span>
                                </div>
                            </div>
                            <div className="containerPremium">
                                <img src={props.starType === "RED_STAR" ? starRed : starGold} alt="Star Gold"></img>
                                <div className="contentPremium">
                                    <span className="subTextInfo">Prêmio</span>
                                    <span className="contentTextInfo">{props.premium} {renderStarType(props)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="containerDataDuration">
                            <div className="contentData">
                                <span className="subTextInfo">Data</span>
                                <span className="contentTextInfo">{props.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Final da segunda coluna */}

                {/* Terceira coluna  */}               
                <div className="containerWin">
                    {iconStatus(props.status)}
                </div>           
                {/* Final Terceira coluna */}
            </div>
            
        ) 
}
export default Card;