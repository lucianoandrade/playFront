import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useAlert } from "react-alert";
import PageContainer from "../../components/features/PageContainer";
import iconFacebook from "../../assets/icons/facebook.svg";
// import iconGoogle from "../../assets/icons/google_plus.svg";
import "./styles.scss";
import Loader from "../../components/elements/Loader";
import AlertMessage from "../../components/elements/AlertMessage";

function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [btn_disabled, setBtn_disabled] = useState(true);
  const [btn_color, setBtn_color] = useState("#bbb");
  const alert = useAlert()

  const on_input = () => {
    if (email.length >= 5 && senha.length >= 5) {
      setBtn_disabled(false);
      setBtn_color("#000");
    } else {
      setBtn_disabled(true);
      setBtn_color("#bbb");
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    Auth.signIn(email, senha)
      .then((response) => {
        props.history.push("/");
      })
      .catch((error) => {
        console.log("Erro fazendo login: ", error);
        if (error.code === "UserNotConfirmedException") {
          props.history.push("/codigo-de-confirmacao", { email });
        } else {
          setLoading(false);
          alert.error(AlertMessage.erroSignin);
        }
      });
  };

  const renderForm = () => {
    return (
      <PageContainer register={true}>
        <section className="tela-de-login">
          <div className="login">
            <h2 className="titulo-page">Acesse sua conta</h2>
            <form className="acesso" onSubmit={handleSubmit}>
              <fieldset>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={email.length >= 1 ? "invalid" : ""}
                  onInput={on_input}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label" htmlFor="email">
                  E-mail
                </label>
              </fieldset>
              <fieldset>
                <input
                  id="senha"
                  type="password"
                  name="senha"
                  onInput={on_input}
                  required
                  onChange={(e) => setSenha(e.target.value)}
                />
                <label className="label" htmlFor="senha">
                  Senha
                </label>
              </fieldset>
              <input
                className="btnEntrar"
                type="submit"
                disabled={btn_disabled}
                style={{ background: `${btn_color}` }}
                value="Entrar"
              />
            </form>
            <div className="esqueci-senha">
              <Link to="/esqueci-senha">Esqueci minha senha</Link>
            </div>
            <div className="redes-sociais">
              <img
                className="facebook-icon"
                src={iconFacebook}
                alt="Icone Facebook"
                onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}
              ></img>
                {/* <img
                  className="google-icon"
                  src={iconGoogle}
                  alt="Icone Google plus"
                  onClick={() => Auth.federatedSignIn({provider: 'Google'})}
                ></img> */}
            </div>
            <div className="sem-conta">
              <Link to="/cadastro">Ainda não tenho conta</Link>
            </div>
          </div>
        </section>
      </PageContainer>
    );
  };

  const renderLoading = () => (
    <div className="tela-de-login">
      <Loader />
    </div>
  );

  const content = loading ? renderLoading() : renderForm();

  return <span>{content}</span>;
}

const LoginForm = withRouter(Login);

export default LoginForm;
