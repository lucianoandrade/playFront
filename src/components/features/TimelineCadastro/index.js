import React from 'react';

import './styles.scss';

import Check from '../../../assets/icons/check.png';

import Current2 from '../../../assets/icons/2-foco.png';
import Current3 from '../../../assets/icons/3-foco.png';
import Current4 from '../../../assets/icons/4-foco.png';

import Disabled3 from '../../../assets/icons/3-inativo.png';
import Disabled4 from '../../../assets/icons/4-inativo.png';

const images = {
    check: Check,
    current: {
        2: Current2,
        3: Current3,
        4: Current4
    },
    disabled: {
        3: Disabled3,
        4: Disabled4
    }
}

function TimelineCadastro (props) {
    
    const getImg = (step, current) => {
        if ( step < current )
            return images.check
        if ( step === current)
            return images.current[step]
        return images.disabled[step]
    }

    return (
        <div className="containerTimeline">
            <div className="contentTimeline">
                <div className="containerState">
                    <span className="stateContent" style={ {backgroundImage: `url(${getImg(1 , props.current)})` } }></span>
                    <p className="paragrafy">Seu Número</p>
                </div>
                <div className="containerState">
                    <span className="stateContent" style={ {backgroundImage: `url(${getImg(2 , props.current)})` } }></span>
                    <p className="paragrafy">Seus Dados</p>
                </div>
                <div className="containerState">
                    <span className="stateContent" style={ {backgroundImage: `url(${getImg(3 , props.current)})` } }></span>
                    <p className="paragrafy">Suas Plataformas</p>
                </div>
                <div className="containerState">
                    <span className="stateContent" style={ {backgroundImage: `url(${getImg(4 , props.current)})` } }></span>
                    <p className="paragrafy">Termos de Uso</p>
                </div>
            </div>
        </div>
    )    
}

export default TimelineCadastro;