import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Banner from '../../components/features/Header/Banner';
import imgBanner from '../../assets/images/destaque-regras1280.png';
import PageContainer from "../../components/features/PageContainer";

import './styles.scss';

function Botao(props) {
    const classe = "btn" + (props.selecionado ? " selecionado" : "");
    return (
      <div className="buttonContainer">
        <div>
          <span className={classe} onClick={()=>props.onClick()}>{props.title}</span>
        </div>
      </div>
    )
}
  
Botao.propTypes = {
    selecionado: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


const RenderDepositosSaques = (props) => {
    return(
        <div>
            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">1.1</span>
                    </div>
                    <div className="tab">
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
                    <div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                    </div>
                </div>
            </div> 

            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">1.2</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
                    <div className="contentIndice">
                        <div className="topicRegras">
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                    </div>
                </div>
            </div> 

            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">1.3</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
                    <div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                    </div>
                </div>
            </div> 

            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">1.4</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                    </div>
                </div>
            </div> 

            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">1.5</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                    </div>
                </div>
            </div> 

            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">1.6</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                    </div>
                </div>
            </div>       
        </div>
    )
}

const RenderPoliticaSaques = (props) => {
    return(
        <div>
            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">2.1</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div>  
                    </div>
                </div>
            </div> 
            
            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">2.2</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div> 
                        <div className="topicRegras">
                            <p className="paragrafyTitleRegras">Fusce vitae turpis feugia</p>
                            <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>
                        </div>  
                    </div>
                </div>
            </div> 
        </div>
    )
}

const RenderTermosCondicoes = (props) => {
    return(
        <div>
            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">3.1</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>  
                    </div>
                </div>
            </div>

            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">3.2</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>  
                    </div>
                </div>
            </div>  

            <div className="containerTermosRegras">
                <div className="regras" onClick={(e)=>props.handleClick(e)}>
                    <div className="indiceRegras">
                        <span className="indice">3.3</span>
                    </div>
                    <div className="tab" >
                        <span className="btnTab"></span>
                        <span className="btnTab"></span>
                    </div>
                    <p className="titleTermosRegras">Fusce vitae turpis feugia</p>
<div className="contentIndice">
                    <div className="topicRegras">
                        <p className="paragrafyTermosRegras">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                        uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                        uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                        </p>
                    </div>  
                    </div>
                </div>
            </div>      
        </div>
    )
}

function Regras () {
    const [selecionado, setSelecionado] = useState('termosdeposito');

    const select_this = (e) => {
    let parent = e.target.closest(".containerTermosRegras");
    let targetActive = e.target.closest(".active");

    if(parent) {
        if(!targetActive) {
            parent.classList.remove("active");
        }
    }
    parent.classList.toggle("active");
}


    const contentBanner = "Conheça as regras do jogo"
    return (
      <PageContainer public={true}>
        <Banner imagemBanner={imgBanner} text={contentBanner}/>
        <section className="containerRegras">
            <div className="contentRegras">
                <h1 className="titleRegras">Regras</h1>
                <p className="paragrafyRegras">Como em qualquer esporte, as partidas aqui no PlayerStars também têm suas regras para que o jogo seja justo. Confira abaixo!</p>
                <div className="containerBtn">
                    <Botao title="AUCTOR LIBERO" selecionado={selecionado === 'termosdeposito'} onClick={()=> setSelecionado('termosdeposito')}/>
                    <Botao title="RUTRUM LACUS" selecionado={selecionado === 'termospolitica'} onClick={()=> setSelecionado('termospolitica')}/>
                    <Botao title="ETIAM PRETIUM EST" selecionado={selecionado === 'termoscondicoes'} onClick={()=> setSelecionado('termoscondicoes')}/>
                </div>  
                { selecionado === 'termosdeposito' && <RenderDepositosSaques handleClick={select_this}/> }
                { selecionado === 'termospolitica' && <RenderPoliticaSaques handleClick={select_this}/> }
                { selecionado === 'termoscondicoes' &&  <RenderTermosCondicoes handleClick={select_this}/> }
            </div>
        </section>
    </PageContainer>
    )
}


export default Regras;