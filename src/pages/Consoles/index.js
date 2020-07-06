import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import config from "../../config/constants";
import { useAlert } from "react-alert";
import PageContainer from "../../components/features/PageContainer";
import AlertMessage from "../../components/elements/AlertMessage";
import TimelineCadastro from "../../components/features/TimelineCadastro";

import "./styles.scss";

function ConsoleComponent(props) {

  const alert = useAlert();
  const history = useHistory();
  const is_cadastro = props.history.location.key;
  
  useEffect(() => {
    if (is_cadastro === undefined || null) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  const [consoles, setConsoles] = useState("");
  const [form, setForm] = useState({});
  const [isValid, setValidation] = useState(false);

  useEffect(() => {
    API.get(config.APIS.PLAYERSTARS, "/console/")
      .then((response) => {
        setConsoles(response.data);
      })
      .catch((error) => {
        console.log("ERRO NO GET: ", consoles);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValidation(verifyValid(form));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const handleChangeInput = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: {
        entity_id: ev.target.id,
        tag_name: ev.target.value,
      },
    });
  };

  const verifyValid = (_form) => {
    return !!Object.keys(form).find((key) => {
      return !!form[key].tag_name;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const listConsoles = Object.keys(form).map((key) => {
      return {
        entity_id: form[key].entity_id,
        tag_name: form[key].tag_name,
      };
    });

    Auth.currentAuthenticatedUser()
      .then((response) => {
        const options = {
          body: {
            consoles: listConsoles,
          },
        };
        API.post(config.APIS.PLAYERSTARS, "/player/console-data", options)
          .then((response) => {
            props.history.push("/termos");
          })
          .catch((error) => {
            console.log("Esse é o retorno das options", options);
            alert.error(AlertMessage.errorRegisterConsoles);
          });
      })
      .catch((error) => {
        console.log("Erro obtendo usuario atual", error);
      });
  };

  return (
    <>
      <PageContainer cadastro={true}>
        <section className="telaConsole">
          <TimelineCadastro current={3} />
          <div className="consoles">
            <h3 className="titleH3">Insira a Tagname de suas plataformas</h3>
            <form onSubmit={handleSubmit} className="dadosConsole">
              {consoles.length > 0 ? (
                consoles.map((platform, index) => (
                  <fieldset key={index}>
                    <input
                      onChange={handleChangeInput}
                      id={platform.entity_id}
                      type="text"
                      name={platform.name}
                    />
                    <label className="label" htmlFor={platform.name}>
                      Tagname do {platform.name}
                    </label>
                  </fieldset>
                ))
              ) : (
                <div></div>
              )}
              <button
                className="continuar"
                type="submit"
                style={atv()}
                disabled={!isValid}
              >
                Continuar
              </button>
            </form>
          </div>
        </section>
      </PageContainer>
    </>
  );

  function atv() {
    const x = isValid;
    if (x === true) {
      return { background: `#000` };
    } else {
      return { background: `#BBB` };
    }
  }
}

export default withRouter(ConsoleComponent);