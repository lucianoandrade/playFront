import React from 'react'
import './styles.scss';

function Banner (props) {
    return (
        <div className="banner" style={{backgroundImage: `url(${props.imagemBanner})`}}>
            { props.imagem ? (
                <img className="logo" src={props.imagem } alt="Logo PlayerStars"></img>
            ) : (<div></div>)
        }
            <h1 className="titleH1">{props.text}</h1>
        </div>
    )
}

export default Banner;