import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../../../../assets/images/logo-menu.png';
import avatarDefault from '../../../../../assets/icons/avatar-menu-dropdown.svg';

import './styles.scss';

const MenuMobile = (props) => {

    const user = useSelector(state => state.user.data.user);
    let MenuClass = "menuMobile";
    if (props.isOpen) {
        MenuClass += " open";
    }

    return (
        <nav className={MenuClass}>
            {console.log("::::::::::::::::::::::::::::USER_DATA::::", user)}
            <div className="headerContainer">
                {props.isLogged && user !== undefined? (
                    <div className="contentHeader">
                        <img className="avatar" src={ user.profile_image || avatarDefault } alt="Imagem de perfil" />
                        <div className="user">
                            <div className="nameUser">{user.nickname}</div>
                            <div className="emailUser">{user.email}</div>
                        </div>
                    </div>
                ) : (
                        <img src={logo} alt="Logo" />
                    )}
            </div>
           
            {props.isLogged ? (<Link className="mobileLinks" to="/perfil">Meu Perfil</Link>) : (<span></span>)}
            {props.isLogged ? (<Link className="mobileLinks" to="/converter-stars">Converter Stars</Link>) : (<span></span>)}
            {props.isLogged ? (<Link className="mobileLinks" to="/historico-de-duelos">Meus Duelos</Link>) : (<span></span>)}
            {props.isLogged ? (<span className="logado"/>) : (<span></span>)}
            
            <Link className="mobileLinks" to="/como-funciona">Como Funciona</Link>
            <Link className="mobileLinks" to="/regras">Regras</Link>
            <Link className="mobileLinks" to="/sobre-stars">Sobre as Stars</Link>
            {props.isLogged ? <Link className="mobileLinks" to="/ranking">Ranking</Link> : (<span></span>)}
            <Link className="mobileLinks" to="/contato">Contato</Link>            
            
            {props.isLogged ? (<Link className="mobileLinks" to="/logout">Sair</Link>) : (<Link className="mobileLinks" to="/login">Entrar</Link>)}
        </nav>
    );
};


MenuMobile.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

export default MenuMobile;