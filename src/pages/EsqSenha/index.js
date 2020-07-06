import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useAlert } from "react-alert";

import PageContainer from "../../components/features/PageContainer";
import AlertMessage from "../../components/elements/AlertMessage";
import EmailIcon from "../../assets/icons/email.png";

import "./styles.scss";

function EsqSenha(props) {
  const [email, setEmail] = useState("");
  const [btn_disabled, setBtn_disabled] = useState(true);
  const [btn_color, setBtn_color] = useState("#BBB");
  const alert = useAlert();

  const on_input = () => {
    if (email.length >= 5) {
      setBtn_disabled(false);
      setBtn_color("#000");
    } else {
      setBtn_disabled(true);
      setBtn_color("#BBB");
    }
  };

  const forgotPassword = ev => {
    ev.preventDefault();
    Auth.forgotPassword(email)
      .then((data) => {
        props.history.push("/codigo-de-confirmacao", { email, pathname: props.location.pathname });
      })
      .catch((err) => {
        console.log("ERROR", err);
        alert.error(AlertMessage[err.code] || AlertMessage.tryAgain);
    });
  };

  return (
    <PageContainer public={true}>
      <div className="containerEsqSenha">
        <div className="lightBox">
          <div className="lightBoxContent">
            <img src={EmailIcon} alt="Icone e-mail" />
            <h3>Esqueceu sua senha?</h3>
            <p className="paragraph">
              Insira o e-mail que usa para entrar no PlayerStars.
            </p>
            <form
              className="formConfirm"
              autoComplete="off"
              onSubmit={forgotPassword}
            >
              <fieldset>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={email.length >= 1 ? "invalid" : ""}
                  onInput={on_input}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <label className="label" htmlFor="email">
                  Email
                </label>
              </fieldset>
              <button
                className="btnDefault"
                disabled={btn_disabled}
                style={{ background: `${btn_color}` }}
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default withRouter(EsqSenha);
