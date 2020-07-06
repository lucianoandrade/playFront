import React, { useState } from 'react';
import { Auth } from "aws-amplify";
import { withRouter, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import PageContainer from "../../components/features/PageContainer";
import newsenha from '../../assets/icons/nova-senha.png';

import './styles.scss';
import AlertMessage from '../../components/elements/AlertMessage';

function NovaSenha (props) {

    const [newPassword, setNewPassword] = useState('');
    const [confNewPassword, setConfNewPassword] = useState('');
    const [btn_disabled, setBtn_disabled] = useState(true);
    const [btn_color, setBtn_color] = useState('#BBB');
    const alert = useAlert();
    const history = useHistory();
     
    const on_input = (ev) => {
        if (newPassword.length >= 5 && confNewPassword.length >= 5) {
            setBtn_disabled(false);
            setBtn_color('#000')
        } else {
            setBtn_disabled(true);
            setBtn_color('#BBB')
        }
    }

    const forgotPasswordSubmit = (ev) => {
        ev.preventDefault()
        if (newPassword !== confNewPassword) {
           alert.error(AlertMessage.passwordsAreNotIdentical);
        } else {
            Auth.forgotPasswordSubmit(history.location.state.email, history.location.state.code, newPassword)
            .then(data => {
                console.log('NOVO SENHA', data)
                history.push('/login')
                alert.success(AlertMessage.newPasswordSucess)
            })
            .catch(err => {
                console.log('ERROR', err)
                if(err.code === 'CodeMismatchException') {
                    history.push('/codigo-de-confirmacao', { email: history.location.state.email });
                    alert.error(AlertMessage.CodeMismatchException)
                } else  {
                    alert.error(AlertMessage.tryAgain);
                    history.push('/');
                }
            })
        }
    }

    return (
        <PageContainer public={true}>
        <div className="containerNovaSenha">
            <div className="lightBox">
                <div className="lightBoxContent">
                    <img src={newsenha} alt="Icone Cel" />
                    <h3>Criar nova senha</h3>
                    <p className="paragraph">Agora é só redefinir sua senha!</p>
                    <form className="formConfirm" onSubmit={forgotPasswordSubmit}>
                        <fieldset>
                            <input id="newPassword" type="password" onInput={on_input} onChange={e => setNewPassword(e.target.value)} name="newPassword" required />
                            <label className="label" htmlFor="newPassword">Nova Senha</label>
                        </fieldset>
                        <fieldset>
                            <input id="confNewPassword" type="password" onInput={on_input} onChange={e => setConfNewPassword(e.target.value)} name="confNewPassword" required />
                            <label className="label" htmlFor="confnewpassword">Repetir nova senha</label>
                        </fieldset>

                        <button
                            className="btnDefault"
                            disabled={btn_disabled}
                            style={{ background: `${btn_color}` }}
                        >Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
        </PageContainer>
    )
}

export default withRouter(NovaSenha);