import React from 'react';

import lol from './img/lol.png';
import csgo from './img/csgo.png';
import hearthstone from './img/hearthstone.png';
import fifa from './img/fifa.png';
import pes from './img/pes.png';
import streetfighter from './img/streetfighter.png';

import './styles.scss';

function SobreJogos () {
    return (
        <section className="jogos">
            <h2 className="jogos-titulo">Jogos Disponíveis</h2>
            <div className="jogos-list">
                <img className="jogos-list-img" src={csgo} alt="csgo"></img>
                <img className="jogos-list-img" src={fifa} alt="fifa"></img>
                <img className="jogos-list-img" src={hearthstone} alt="hearthstone"></img>
                <img className="jogos-list-img" src={lol} alt="lol"></img>
                <img className="jogos-list-img" src={pes} alt="pes"></img>
                <img className="jogos-list-img" src={streetfighter} alt="streetfighter"></img>
            </div>
        </section>
    )
}
export default SobreJogos;