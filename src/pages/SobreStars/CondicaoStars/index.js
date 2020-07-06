import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './styles.scss'


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
            <div className="containerTermosStars">
                    <div className="termos"  onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">1.1</span>
                        </div>
                        <p className="titleTermos">Fusce vitae tces justo ac</p>
                        <div 
                            className="tab" 
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">1.2</span>
                        </div>
                        <p className="titleTermos">Fusce ultrices justo ac</p>
                        <div 
                            className="tab" 
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">1.3</span>
                        </div>
                        <p className="titleTermos">Fusce vitae es justo ac</p>
                        <div 
                            className="tab"                   
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
    )
}

const RenderPoliticaSaques = (props) => {
    return(
        <div>
            <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">2.1</span>
                        </div>
                        <p className="titleTermos" >Fusce vitae feugiat ac</p>
                        <div 
                            className="tab"                           
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">2.2</span>
                        </div>
                        <p className="titleTermos">Fusce vitae justo ac</p>
                        <div 
                            className="tab"                           
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">2.3</span>
                        </div>
                        <p className="titleTermos">Fusce vitae ac</p>
                        <div 
                            className="tab"                           
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
    )
}


const RenderTermosCondicoes = (props) => {
    return(
        <div>
            <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">3.1</span>
                        </div>
                        <p className="titleTermos">Fusce vitae feugia</p>
                        <div 
                            className="tab"                          
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">3.2</span>
                        </div>
                        <p className="titleTermos">Fusce vitae justo ac</p>
                        <div 
                            className="tab"                           
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
                <div className="containerTermosStars">
                    <div className="termos" onClick={(e)=>props.handleClick(e)}>
                        <div className="indiceTermos">
                            <span className="indice">3.3</span>
                        </div>
                        <p className="titleTermos">Fusce vitae justo ac</p>
                        <div 
                            className="tab"                            
                        >
                            <span className="btnTab"></span>
                            <span className="btnTab"></span>
                        </div>
                        <div className="contentIndice">
                            <p className="paragrafyTermos">uheuehueheuheuh euehu ehue uheuehueh euheuh euehu ehueuhe uehu heuheuheuehuehue
                            uheue huehe uheuheuehuehueuh euehueheuhe heuehuehue uheueh uehe uhe heueh uehue
                            uhe ueh ueheuheuheu ehuehu euheuehue heuheuh euehuehueu heuehue heuheuhe uehuehue
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
    )
}


class CondicaoStars extends Component {

    state = {selecionado: 'termosdeposito'}

    select_btn(who) {
        this.setState({selecionado: who})
        console.log(this.state.selecionado)
        
    } 

    select_this(e) {
    console.log("ola")
    let parent = e.target.closest(".containerTermosStars");
    let targetActive = e.target.closest(".active");

    if(parent) {
        if(!targetActive) {
            parent.classList.remove("active");
        }
    }

    parent.classList.toggle("active");
    
}
    

    
    render() {

        return (
        <React.Fragment>
            <section className="containerCondicaoStars">
                <div className="contentTermos">
                    <h1>
                    Vamos as regras do Jogo?
                    </h1>
                    <p>
                        Como em qualquer esporte, as partidas aqui no PlayerStars também têm suas regras para que o jogo
                        seja justo. Confira abaixo!
                    </p>
                    <div className="containerBtn">
                        <Botao title="DEPÓSITOS E SAQUES" selecionado={this.state.selecionado === 'termosdeposito'} onClick={()=>this.select_btn('termosdeposito')}/>
                        <Botao title="POLÍTICA DE SAQUES" selecionado={this.state.selecionado === 'termospolitica'} onClick={()=>this.select_btn('termospolitica')}/>
                        <Botao title="TERMOS E CONDIÇÕES" selecionado={this.state.selecionado === 'termoscondicoes'} onClick={()=>this.select_btn('termoscondicoes')}/>
                    </div>  
                    { this.state.selecionado === 'termosdeposito' && <RenderDepositosSaques handleClick={this.select_this}/> }
                    { this.state.selecionado === 'termospolitica' && <RenderPoliticaSaques handleClick={this.select_this}/> }
                    { this.state.selecionado === 'termoscondicoes' &&  <RenderTermosCondicoes handleClick={this.select_this}/> }
                </div>
            </section>
        </React.Fragment>
        )
    }
}


export default CondicaoStars;