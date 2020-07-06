import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuMobile from './MenuMobile';
import BtnMenu from './BtnMenu';

import logo from '../../../../assets/images/logo-menu.svg';
import iconLogin from '../../../../assets/icons/avatar-branco-header.svg';
import avatarDefault from '../../../../assets/icons/avatar-menu-dropdown.svg';

import './styles.scss';

function Menu (props) {
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { user } = props;

    const Dropdown = () => {
        return (
            <div>
                <div className="headerUser">
                    <div className="nicknameUser">{user.nickname}</div>    
                    {user.profile_image ?
                        <img className="avatarUser" src={user.profile_image} alt="Imagem de perfil" /> :
                        <div className="avatarInitial" />
                    }
                    <div className="isdrop">
                        <div className="dropUser">
                            <div className="contentHeader">
                                <img className="avatar"src={ user.profile_image ? user.profile_image : avatarDefault } alt="Imagem de perfil" />
                                <div className="user">
                                    <span className="nameUser">{user.nickname}</span>
                                    <div className="emailUser">{user.email}</div>
                                </div>
                            </div>
    
                            <div className="linksUser">
                                <span className="border" />
                                <Link className="userLinks" to="/perfil">Meu Perfil</Link>
                                <Link className="userLinks" to="/converter-stars">Converter Stars</Link>
                                <Link className="userLinks" to="/historico-de-duelos">Meus Duelos</Link>
                                <Link to="/logout" className="userLinks">Sair</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
    const location = props.history.location.pathname;
    return (
        <>
            <MenuMobile isLogged={props.user_data !== undefined} isOpen={menuIsOpen} />
            <BtnMenu onClick={() => setMenuIsOpen(!menuIsOpen)} isOpen={menuIsOpen}/>
            <div className="menu">
                <nav className="menu-navegacao">
                    <Link to="/"><img className="menu-logo" src={logo} alt="Logo PlayStarts" /></Link>
                    <div className="menu-navegacao-itens">
                        <Link className="menu-navegacao-item" to="/como-funciona" style={location === "/como-funciona" ? {borderBottom: "White solid 2px"} : {}}>Como Funciona</Link>
                        <Link className="menu-navegacao-item" to="/regras" style={location === "/regras" ? {borderBottom: "White solid 2px"} : {} }>Regras</Link>
                        <Link className="menu-navegacao-item" to="/sobre-stars" style={location === "/sobre-stars" ? {borderBottom: "White solid 2px"} : {}}>Sobre as Stars</Link>
                        <Link className="menu-navegacao-item" to="/contato" style={location === "/contato" ? {borderBottom: "White solid 2px"} : {}}>Contato</Link>
                        {props.user_data !== undefined && user ? ( 
                        <Link className="menu-navegacao-item" to="/ranking" style={location === "/ranking" ? {borderBottom: "White solid 2px"} : {}}>Ranking</Link> 
                        ) : ( <Link className="menu-navegacao-item" to="/cadastro" style={location === "/cadastro" ? {borderBottom: "White solid 2px"} : {}}>Participe</Link> )}                        
                    </div>
                    <div className="menu-login">
                        <div className="autenticacao">
                            {props.user_data !== undefined && user ? (
                                Dropdown()
                            ) : (
                                    <div>
                                        <Link to="/login" className="autenticacao-login">Entrar</Link>
                                        <img className="menu-login-icon-login" src={iconLogin} alt="Icone Login" />
                                    </div>
                                )}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.data.user,
    }
}

export default connect(
    mapStateToProps, null
)(withRouter(Menu))