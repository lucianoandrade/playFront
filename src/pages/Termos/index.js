import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import config from "../../config/constants"
import { API } from "aws-amplify";
import { useAlert } from 'react-alert';
import PageContainer from "../../components/features/PageContainer";
import TimelineCadastro from '../../components/features/TimelineCadastro';

import './styles.scss';
import AlertMessage from '../../components/elements/AlertMessage';

function Termos (props) {

    const [btn_disabled, setBtn_disabled] = useState(true);
    const [btn_color, setBtn_color] = useState('#BBB');
    const [redirect, setRedirect] = useState(false);
    const [scrollBox, setScrollBox] = useState(true);
    const [terms, setTerms] = useState("");
    const alert = useAlert()

    const on_scroll = (s) => {
        const target = s.target;

        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            setBtn_disabled(false)
            setBtn_color('#000')
            setScrollBox(false)
        } else if (target.scrollHeight - target.scrollTop !== target.clientHeight) {
            setScrollBox(true)
        }
    }

    const acceptTerms = () => {
        const options = {
            body:{
                terms: true
            }
        }

        API.post(config.APIS.PLAYERSTARS, '/player/accept-terms', options)
            .then(response => {
                setRedirect(true)
            })
            .catch(error => {
                console.log('Esse é o retorno das options', options);
                alert.error(AlertMessage.errorRegister);
            })
    };

    useEffect(() => {
    API.get(config.APIS.PLAYERSTARS, "/terms-and-conditions", {})
        .then((response) => {
        console.log("get terms bem sucedido :", response);
        setTerms(response.data[0].terms);
        })
        .catch((error) => {
        console.log("get terms falhou: ", error);
        });
    }, []);


    return (
        <>
        <PageContainer cadastro={true}>
            {redirect ? <Redirect to='/' /> : <div/>}
            <section className="Termos">
            <TimelineCadastro current={4} />
                <div className="containerTermos">
                    <h3>Quase Pronto!</h3>
                    <p >Leia nossos Termos e Condições de Uso para finalizar o Cadastro.</p>
                    <div className={`${scrollBox ? "boxTermo" : "boxTermoScroll" }`} onScroll={on_scroll}>
                        <div className="boxContent">
                            {<div dangerouslySetInnerHTML={{ __html: terms }}></div>}
                        </div>
                    </div>
                    <button
                        className="criarConta"
                        type="submit"
                        disabled={btn_disabled}
                        style={{ background: `${btn_color}` }}
                        onClick={acceptTerms}>
                        Criar conta
                    </button>
                </div>
            </section>
            </PageContainer>
        </>
    )
    
}

export default Termos;