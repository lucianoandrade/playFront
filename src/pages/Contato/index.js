import React, { useState } from "react";
import { API } from "aws-amplify";
import config from "../../config/constants";
import PageContainer from "../../components/features/PageContainer";
import { useAlert } from "react-alert";
import "./styles.scss";
import AlertMessage from "../../components/elements/AlertMessage";
import { useSelector } from "react-redux";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [btn_disabled, setBtn_disabled] = useState(true);
  const [btn_color, setBtn_color] = useState("#BBB");
  const userData = useSelector(state => state.user.data.user);
  const alert = useAlert();

  const on_input = () => {
    if (assunto.length >= 3 && mensagem.length >= 3) {
      setBtn_disabled(false);
      setBtn_color("#000");
    } else {
      setBtn_disabled(true);
      setBtn_color("#BBB");
    }
  };

  const sendContact = (e) => {
    e.preventDefault();
    const options = {
      body: {
        sender_name: userData ?  userData.name : nome,
        sender_mail: userData ?  userData.email : email,
        subject: assunto,
        contact_message: mensagem,
        data: "",
      },
    };

    API.post(
      userData ? config.APIS.PLAYERSTARS : config.APIS.PLAYERSTARS_PUBLIC,
      `/contact-email/${userData ? "send" : "public/send"}`,
      options
    )
      .then((response) => {
        console.log("RESPONSE: ", response);
        alert.success(AlertMessage.sendMensage);
        setNome("");
        setEmail("");
        setAssunto("");
        setMensagem("");
      })
      .catch((error) => {
        console.log("ERROR: ", error);
        alert.error(AlertMessage.tryAgain);
      });
  };
  return (
    <PageContainer public={true}>
      <section className="containerContato">
        <div className="contentContato">
          <h1 className="titleContato">Contato</h1>
          <p className="paragrafyContato">
            Mollis nisl. Maecenas pulvinar turpis at faucibus posuere. Maecenas
            ut nibh non mauris dictum.
          </p>
          <form className="formContato">
            <fieldset>
              <input
                id="nome"
                type="text"
                name="nome"
                value={userData ?  userData.name : nome}
                disabled={userData ? true : false}
                onChange={(e) => setNome(e.target.value)}
                onInput={on_input}
                required
              />
              <label className="label" htmlFor="nome">
                Nome
              </label>
            </fieldset>
            <fieldset>
              <input
                id="email"
                type="email"
                name="email"
                className={email.length >= 1 ? "invalid" : ""}
                value={userData ?  userData.email : email}
                disabled={userData ? true : false}
                onChange={(e) => setEmail(e.target.value)}
                onInput={on_input}
                required
              />
              <label className="label" htmlFor="email">
                E-mail
              </label>
            </fieldset>
            <fieldset>
              <input
                id="assunto"
                type="text"
                name="assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                onInput={on_input}
                required
              />
              <label className="label" htmlFor="assunto">
                Assunto
              </label>
            </fieldset>
            <fieldset>
              <textarea
                id="mensagem"
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                onInput={on_input}
                required
              ></textarea>
              <label className="label" htmlFor="mensagem">
                Mensagem
              </label>
            </fieldset>
            <button
              className="btnEnviar"
              type="submit"
              onClick={sendContact}
              disabled={btn_disabled}
              style={{ background: `${btn_color}` }}
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </PageContainer>
  );
}

export default Contato;
