import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import PoliticaPrivacidade from "./politica";
import Termos from "./termos";
import logo from '../../../assets/images/logo-footer.svg';
import './styles.scss';



function Footer () {
    const user = useSelector(state => state.user.data.user)
        return (
        <footer className="footer">
            <nav className="list-footer">
                <img className="logo-footer" src={logo} alt="Logo PlayerStarts" />
                    <ul>
                        <li><Link to="/">PlayerStars</Link></li>
                        <li><Link to="/regras">Regras</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                        {user ? "" : <li><Link to="/cadastro">Participe</Link></li>}
                    </ul>
                    <ul>
                        <li><Termos className="lightBox"/></li>
                        <li><PoliticaPrivacidade className="lightBox"/></li>
                        <li><Link to="/como-funciona">Jogo Responsável</Link></li>
                    </ul>
            </nav>
            <p className="copy">PlayerStars &copy; 2019 Todos os direitos reservados.</p>
        </footer>
        
        )
}

export default Footer;