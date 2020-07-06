import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import { API } from "aws-amplify"
import config from '../../config/constants';
import AlertMessage from '../../components/elements/AlertMessage';
import PageContainer from "../../components/features/PageContainer";
import Banner from '../../components/features/Header/Banner';

import imgBanner from '../../assets/images/compre-suas-stars-1280.png'
import imgRedStars from "../../assets/icons/star-red.svg";
import imgStarGold from "../../assets/icons/star-gold.svg";
import seta from "../../assets/icons/seta.svg";

import './styles.scss';

const Converter = (props) => {
    
    const data = useSelector(state => state.user.data); 
    const alert = useAlert()

    const [quantidadeGold, setQuantidadeGold] = useState("");
    const [quantidadeRed, setQuantidadeRed] = useState("");
    const [taxa, setTaxa] = useState("");
    const [btn_color, setBtn_color] = useState("#bbb");
    const [goldStars, setGoldStar] = useState(0);
    
    useEffect(() => {
        API.get(config.APIS.PLAYERSTARS, '/convert-rate')
            .then(response => {
                console.log("ESSE É O RESPONSE: ", response.data[0].convert_rate)
                setTaxa(response.data[0].convert_rate)
            })
            .catch(error => {
                console.log("ERRO NO GET: ", error)
            })
    }, [ ])

    const postConvert = () => {
        
        const options = {
            body:{
                red_stars: parseInt(quantidadeGold * taxa),
                gold_stars: parseInt(quantidadeGold) 
            }
        }

        API.post(config.APIS.PLAYERSTARS, '/player/convert-stars', options)
        .then(response => {
            console.log(response)
            alert.success(AlertMessage.convertStarsSucess);
            props.history.push('/converter-stars');
            setGoldStar((goldStars || data.golden_star_balance) - quantidadeGold)
            setQuantidadeGold("")
            setQuantidadeRed("")
        })
        .catch(error => {
            console.log(error)
            alert.error(AlertMessage.tryAgain);
        })
    }

    const converterStars = () => {
        if (quantidadeGold > (goldStars || data.golden_star_balance)) {
            alert.error(AlertMessage.insufficientStars);
          return;
        }
        if (quantidadeGold === '0' || !quantidadeGold)  {
            alert.error(AlertMessage.invalidValueStars);
          return;
        }
        if (quantidadeGold * taxa > quantidadeGold) {
            postConvert();
        }
    };
    const contentBanner = "In tempor lectus eros, in tempor augue aliquam in";        
    return (
        <PageContainer public={false}>
        <Banner imagemBanner={imgBanner} text={contentBanner} />
            <section className="containerConverter">       
                <div className="contentConverter" onChange={() => setBtn_color('#000')}>                   
                    <div className="infoConverter"> 
                        <h1>Converter Stars</h1>
                        <p className="saldo">Seu saldo de Star Gold é de: {goldStars || data.golden_star_balance}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam vestibulum, mi vel placerat auctor, tellus sapien congue ex, id ornare mi sem sit amet ex.</p>
                    </div>
                    <div className="converterStars">
                        <img className="img-star" src={imgStarGold} alt="Stars Gold"></img>
                        <fieldset>
                            <input 
                            id="GoldStars" 
                            value={parseInt(quantidadeGold)}
                            onChange={(e) => {setQuantidadeGold(e.target.value); 
                                setQuantidadeRed(e.target.value && e.target.value * taxa)}}
                            type="number" 
                            required/>
                            <label className="label" htmlFor="GoldStars">Gold Stars</label>
                        </fieldset>
                        <img className="seta" src={seta} alt="conversao"></img>
                        <fieldset>
                            <input 
                            id="RedStars"
                            value={parseInt(quantidadeRed)}
                            onChange={(e) => {setQuantidadeRed(e.target.value)
                                setQuantidadeGold(e.target.value && e.target.value / taxa)}}        
                            type="number" 
                            required/>
                            <label className="label" htmlFor="RedStars">Red Stars</label>
                        </fieldset>
                        <img className="img-star" src={imgRedStars} alt="Red Stars"></img>
                    </div>
                        <button className="btnDefault" onClick={converterStars} style={{ background: `${btn_color}` }}>Converter</button>
                </div>
            </section>
        </PageContainer>       
    )
}

export default Converter;