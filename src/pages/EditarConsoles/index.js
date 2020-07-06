import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API, Auth } from "aws-amplify";
import { useAlert } from 'react-alert';
import config from "../../config/constants";
import PageContainer from "../../components/features/PageContainer";
import AlertMessage from '../../components/elements/AlertMessage';
import Loader from "../../components/elements/Loader";
import './styles.scss';
import { Link } from 'react-router-dom';

function EditarConsoles(props) {

    const consolesAll = useSelector(state => state.user.consoles);
    const currentConsoles = useSelector(state => state.user.data.consoles);
    const [loading, setLoading] = useState(true);
    const [userConsole, setUserConsole] = useState([]);
    const alert = useAlert();

    useEffect(() => {
        if(consolesAll && currentConsoles) {
        setUserConsole(consolesAll.map(item => {
            return currentConsoles.find(myConsole => myConsole.console_id === item.entity_id) || item
        }))
            setLoading(false)
        } else {
            setLoading(true)
        }
        // eslint-disable-next-line
    },[consolesAll, currentConsoles])
        
    const findConsole = (consoles, platformConsoleId) => {
        const _console = consoles.find(item => item.console_id === platformConsoleId)
        return _console ? _console.tag_name : ''   
    }


    const handleChangeInput = (ev, index) => {
        const copyConsoles = Object.assign([], userConsole)
        copyConsoles[index] = {
            ...copyConsoles[index],
            tag_name: ev.target.value
        }
        console.log("copyConsoles :: ", copyConsoles)
        setUserConsole(copyConsoles)
    }
    const handleSubmit = (ev) => {
        ev.preventDefault()
        const userConsoleNotNull = userConsole.filter(item => !!item.tag_name)
        
        const consolesSend = userConsoleNotNull.map(item => (  
            {
            "entity_id": item.console_id || item.entity_id,
            "tag_name": item.tag_name
            }
        ))

        console.log(consolesSend)

        Auth.currentAuthenticatedUser()
        .then(response => {
            const options = {
                body: {
                    consoles: consolesSend
                }
            }
                API.put(config.APIS.PLAYERSTARS, '/player', options)
                    .then(response => {
                        window.location.href = '/perfil'
                    })
                    .catch(error => {
                        console.log('Esse é o retorno das options', options);
                        alert.error(AlertMessage.erroEditDataUser);
                    })
            })
            .catch(error => {
                console.log("Erro obtendo usuario atual", error)
            })
    }


  return (
    <PageContainer public={false}>
        {loading ? <Loader /> :
        <section className="containerEditConsole">
            <div className="contentEditConsole">
                <h2 className="titleEditConsole">Editar plataformas</h2>
                <p className="subTitleEditConsole">Quais plataformas você usa?</p>
                <form onSubmit={handleSubmit} className="dadosConsole">
                    {userConsole.length > 0 ?
                        userConsole.map((platform, index) => {
                            const consoleName = platform.name || consolesAll.map(item => item.entity_id === platform.console_id ? item.name : "")
                            return (
                            <fieldset key={index}>
                                <input 
                                    id={consoleName} 
                                    type="text" 
                                    name={consoleName}
                                    onChange={ event => handleChangeInput(event, index)} 
                                    defaultValue={findConsole(currentConsoles, platform.console_id)}
                                    />
                                <label className="label" htmlFor={consoleName}>Tagname do {consoleName}</label>
                            </fieldset>
                            )
                     }) : <div></div>
                    }
                    <div className="containerBtn">
                        <Link to="/perfil"><button className="btnCancel" type="button">Cancelar</button></Link>
                        <button className="btnSave" type="submit" >Salvar alterações</button>
                    </div>
                </form>
            </div>
        </section>
        }
    </PageContainer>
  );
}

export default EditarConsoles;