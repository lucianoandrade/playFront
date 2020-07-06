import React from "react";
import PropTypes from "prop-types";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, Form } from "formik";
import { withAlert } from "react-alert";

import PageContainer from "../../components/features/PageContainer";
import FormField from "../../components/elements/FormField";

import "./styles.scss";
import AlertMessage from "../../components/elements/AlertMessage";

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const Signup = (props) => {
  return (
    <PageContainer register={true}>
      <section className="telaCadastro">
        <div className="cadastro">
          <h2 className="tituloPage">Crie sua conta</h2>
          <h3 className="subTitulo">Olá! Vamos começar seu cadastro?</h3>
          <Form className="dados">
            <div className="inputInline" name="email">
              <FormField id="email" name="email" type="text" label="Email" />
            </div>
            <div className="inputInline" name="senha">
              <FormField
                id="senha"
                name="senha"
                type="password"
                label="Senha"
              />
            </div>
            <div className="inputInline" name="senha2">
              <FormField
                id="senha2"
                name="senha2"
                type="password"
                label="Confirme a senha"
              />
            </div>
            <button
              className="continuar"
              type="submit"
              style={atv()}
              disabled={!props.isValid}
              required={props.isSubmitting}
            >
              Continuar
            </button>
          </Form>
        </div>
      </section>
    </PageContainer>
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

const SignupForm = withRouter(
  withFormik({
    mapPropsToValues({ email, senha, senha2 }) {
      return {
        email: email || "",
        senha: senha || "",
        senha2: senha2 || "",
      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Campo obrigatório").email("Email inválido"),
      senha: Yup.string()
        .required("Campo obrigatório")
        .min(8, "Mínimo 8 caracteres"),
      senha2: Yup.string().required("Campo obrigatório"),
    }),

    handleSubmit(
      { email, senha, senha2 },
      { props, setFieldError, setSubmitting }
    ) {
      console.log(props);
      if (senha !== senha2) {
        setFieldError("senha", "As senhas digitadas não estão idênticas.");
        setFieldError("senha2", "As senhas digitadas não estão idênticas.");
        return;
      }
      setSubmitting(true);

      Auth.signUp(email, senha)
        .then((result) => {
          console.log("Resultado do signup: ", result);
          console.log("funcionou");
          props.history.push("/codigo-de-confirmacao", {
            email: email,
            senha: senha,
          });
          console.log("Minhas props no inicio do cadastro:", props);
        })
        .catch((error) => {
          switch (error.code) {
            case "UsernameExistsException":
              setFieldError("email", "Email já está em uso.");
              break;
            default:
              console.log("Erro fazendo signup: ", error);
              props.alert.error(AlertMessage.erroSignup);
              break;
          }
          setSubmitting(false);
        });
    },
  })(Signup)
);

export default withAlert()(SignupForm);
