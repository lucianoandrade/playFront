import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from "aws-amplify";
import moment from 'moment';
import config from '../../config/constants';
import PageContainer from "../../components/features/PageContainer";

import starRed from '../../assets/icons/star-red.svg';
import starGold from '../../assets/icons/star-gold.svg';
import editar from '../../assets/images/editar-perfil-profile.png';
import avatarDefault from '../../assets/icons/avatar-perfil.svg';
import Loader from '../../components/elements/Loader';

import './styles.scss';


function PerfilUsuario () {
    
    const [user, setUser] = useState({});
    const [player, setPlayer] = useState({});
    const [consoles, setConsoles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDadosProfile()
    },[])

   const getDadosProfile = () => {
        API.get(config.APIS.PLAYERSTARS, '/player/get-my-profile')
            .then(response => {
                console.log("RESULTADO DO GET: ", response.data);
                setUser(response.data.player.user);
                setPlayer(response.data.player);
                setConsoles(response.data.consoles);
                setIsLoading(false);
            })
            .catch(error => {
                console.log("ERRO NO GET: ", error)
            })
    }

    return (
        <>
            <PageContainer public={false}>
            {isLoading ? <Loader /> : 
            <section className="containerProfile">
                <div className="containerDadosUser">
                    <div className="headerDadosUser">
                        <div className="containerAvatarUser">
                            <div className="containerAvatar">
                                <div className="avatar" style={{ backgroundImage: `url(${user.profile_image || avatarDefault})` }}></div>
                            </div>
                            <div className="contentUser">
                                <h3 className="nickname">{user.nickname}</h3>
                                <span className="emailUser">{user.email}</span>
                            </div>
                        </div>
                        <div className="containerIconEditProfile">
                            <Link to="editar-perfil"> 
                                <img className="iconEdit" src={editar} alt="Editar perfil" />
                                <span className="editProfile">Editar</span>
                            </Link>
                        </div>
                    </div>
                    <div className="containerConquests">
                        <div className="contentConquest">
                            <img className="iconConquest" src={starGold} alt="StarGold" />
                            <span className="descriptionConquest" alt="StarRed">Gold Star · {player.golden_star_balance}</span>
                        </div>
                        <div className="contentConquest">
                            <img className="iconConquest" src={starRed} alt="StarRed" />
                            <span className="descriptionConquest">Red Star · {player.red_star_balance}</span>
                        </div>
                    </div>

                    <div className="containerDadosAddress">
                        <div className="contentDados">
                            <h3 className="titleDadosAddress">Dados pessoais</h3>
                            <p className="descriptionDados">{user.name}</p>
                            <div className="containerNasCpfTel">
                                <div className="contentNasCpfTel">
                                    <span className="titleNasCpfTel">Nascimento</span>
                                    <span className="descriptionNasCpfTel">{moment(user.date_birth).format('DD/MM/YYYY')}</span>
                                </div>
                                <div className="contentNasCpfTel">
                                    <span className="titleNasCpfTel">CPF</span>
                                    <span className="descriptionNasCpfTel">{user.cpf}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border"></div>
                <div className="containerPlatform">
                    <h2 className="titlePlatform">Minhas Plataformas</h2>
                    <div className="containerIconEditConsole">
                        <Link to="/editar-consoles">
                            <img className="iconEdit" src={editar} alt="Editar console" />
                            <span className="editConsole">Editar</span>
                        </Link>
                    </div>
                    <div className="consoleName">
                        {consoles.map((item, index) => (<div key={index} className="consoleTagname">{item.name} · {item.tag_name}</div>))}                           
                    </div>
                </div>
            </section>
            }       
            </PageContainer>
        </>
    )
    
}

export default PerfilUsuario;