import React from "react";
import { withRouter } from "react-router-dom";
import { withAlert, useAlert } from 'react-alert';
import { Auth } from "aws-amplify";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import PageContainer from "../../components/features/PageContainer";
import AlertMessage from "../../components/elements/AlertMessage";
import Email from "../../assets/icons/email.png";
import FormField from "../../components/elements/FormField";

import "./styles.scss";

const ConfirmSignUp = (props) => {
  const alert = useAlert();
  const resendCode = ev => {
    ev.preventDefault()
    Auth.forgotPassword(props.history.location.state.email)
    .then(data => {
        alert.success('Codigo enviado');
    })
    .catch(err => {
        console.log('ERROR', err);
        return alert.error(AlertMessage[err.code] || AlertMessage.defaultErrorMessageCode);
    });
  }

  return (
    <>
      <PageContainer register={true}>
        <div className="containerCodConfirm">
          <div className="lightBox">
            <div className="lightBoxContent">
              <img src={Email} alt="Icone email" />
              <h3>Confirme seu e-mail</h3>
              <p className="paragraph">
                Enviamos um código de confirmação por e-mail para você. Por favor, digite-o abaixo.
              </p>
              <Form className="formConfirm">
                <div className="inputInline">
                  <FormField
                    id="codConfirm"
                    type="text"
                    name="codigo"
                    label="Código de confirmação"
                  />
                </div>
                <button
                  className="btnDefault"
                  type="submit"
                  style={atv()}
                  disabled={!props.isValid}
                  required={props.isSubmitting}
                >
                  Confirmar
                </button>
                <button 
                className="btnSecundary" 
                type="submit"
                onClick={resendCode}
                >
                  Reenviar Código
                </button>
              </Form>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
  function atv() {
    const x = props.isValid;
    if (x === true) {
      return { background: `#000` };
    } else {
      return { background: `#BBB` };
    }
  }
};

const ConfirmSignupForm = withRouter(
  withFormik({
    mapPropsToValues({ codigo }) {
      return {
        codigo: codigo || "",
      };
    },
    validationSchema: Yup.object().shape({
      codigo: Yup.string()
        .required("Campo obrigatório")
        .length(6, "Codigo inválido"),
    }),
    handleSubmit({ codigo }, { props, setFieldError, setSubmitting }) {
      setSubmitting(true);
      
      if(props.location.state.pathname === "/esqueci-senha") {
        props.history.push("/nova-senha", {email: props.history.location.state.email, code: codigo})
      } else {
      Auth.confirmSignUp(props.history.location.state.email, codigo.toString())
        .then((result) => {
          setSubmitting(false);
          Auth.signIn(
            props.history.location.state.email,
            props.history.location.state.senha
          )
            .then((response) => {
              props.alert.success(AlertMessage.codeValid);
              props.history.push("/seus-dados", {
                initCadastro: props.history.location.state.email,
                senha: props.history.location.state.senha,
                codigoconfimacao: codigo,
              });
              console.log(
                "Minhas props no codigo de confirmação são",
                props.history.location
              );
            })
            .catch((error) => {
              console.log("Erro ", error);
              return props.alert.error(AlertMessage[error.code] || AlertMessage.messageDefault);
            });
        })
        .catch((error) => {
          console.log("Erro confirmando assinatura: ", error);
          props.alert.error(AlertMessage.codeInvalid);
          setSubmitting(false);
        });
      }
    },
  })(ConfirmSignUp)
);

export default withAlert()(ConfirmSignupForm);
