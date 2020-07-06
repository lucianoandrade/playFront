import React from 'react';
import {withRouter} from "react-router-dom";
import { API, Auth } from "aws-amplify";
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import { withAlert } from 'react-alert';
import * as Yup from 'yup';
import CPF from "cpf-check";
import * as PropTypes from "prop-types";
import MaskedInput from 'react-text-mask';
import moment from 'moment';
import PageContainer from "../../components/features/PageContainer";
import config from "../../config/constants";
import AlertMessage from '../../components/elements/AlertMessage';
import TimelineCadastro from '../../components/features/TimelineCadastro';

import './styles.scss';


const onlyNumbers = (_text) => {
    const replaced = _text ? _text.replace(/[^\d]/g, "") : ""
    return replaced
}

function test_cpf(message) {
    if (message === void 0) {
      message = "CPF inválido";
    }
  
    return this.test({
      message: message,
      name: "cpf",
      exclusive: true,
      test: function test(value) {
        const replaced = onlyNumbers(value);
        return CPF.validate(replaced);
      }
    });
  }
  
Yup.addMethod(Yup.string, "cpf", test_cpf);

const dateMax = moment(Date.now() - 567648000000).format('YYYY-MM-DD');
const dateMin = moment(Date.now() - 2838240000000).format('YYYY-MM-DD');

const CadastroForm = (props) =>  {
    
    return(
    <>
    <PageContainer cadastro={true}>
        <TimelineCadastro current={2} />
        <section className="telaCompleteCadastro">
            <div className="completeCadastro">
                    <Form className="dadosPessoais">
                        <div className="blocoDadosPessoais">
                            <h3 className="titleH3">Dados pessoais</h3>
                            <ErrorMessage className="error" component="span" name="nome"/>
                            <fieldset>
                                <Field id="nome" type="text" name="nome" required/>
                                <label className="label" htmlFor="nome">Nome completo</label>
                            </fieldset>
                            <ErrorMessage className="error" component="span" name="nascimento"/>
                            <ErrorMessage className="error" component="span" name="cpf"/>
                            <div className="doisCampos">
                                <fieldset>
                                    <Field 
                                        name="nascimento" 
                                        id="nascimento" 
                                        type="date"
                                        max={dateMax}
                                        min={dateMin}
                                        required 
                                    />                
                                    <label className="label" htmlFor="nascimento">Nascimento</label> 
                                </fieldset>
                                <fieldset> 
                                    <Field name="cpf" render={({ field }) => {
                                        return <MaskedInput mask={[/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/, /\d/]}
                                        {...field}
                                        id="cpf" 
                                        type="text" 
                                        name="cpf" 
                                        required />
                                        }} /> 
                                    <label className="label" htmlFor="cpf">CPF</label>
                                </fieldset>
                            </div>
                            <ErrorMessage className="error" component="span" name="nickname"/>
                            <fieldset>   
                                <Field id="nickname" type="text" name="nickname" required/>
                                <label className="label" htmlFor="nickname">Nickname</label>
                            </fieldset>
                        </div>
                        <button className="continuar" disabled={!props.isValid} style={atv()} type="submit">Continuar</button>
                    </Form>
            </div>
        </section>
        </PageContainer>
    </>
    )
    function atv() { const x = props.isValid; 
        if (x === true) {return({background: `#000`})} else {return({background: `#BBB`}) }
    };
}
    
CadastroForm.propTypes = {
    values: PropTypes.any,
    errors: PropTypes.any
}

const date = value => {
    return moment(value).format('DD/MM/YYYY');
};

const FormikForm = withRouter(withFormik({
    mapPropsToValues({
      nome,
      nascimento,
      cpf,
      nickname
    }) {
      return {
        nome: nome || '',
        nascimento: nascimento || '',
        cpf: cpf || '',
        nickname: nickname || ''
      }
    },
    validationSchema: Yup.object().shape({
            nome: Yup.string().required('Digite seu nome completo!'),
            nascimento: Yup.date().required('Digite sua data de nascimento!'),
            cpf: Yup.string().cpf("CPF inválido").required("Campo obrigatório"),
            nickname: Yup.string().required('Digite seu nickname!')
    }),
    handleSubmit(values, { props }) {
      Auth.currentAuthenticatedUser()
          .then(response => {
            console.log("VALUES::: ", values)
                const options = {
                    body: {
                        user: {
                            name: values.nome,
                            email: response.attributes.email,
                            date_birth: date(values.nascimento),
                            street:"-",
                            street_number:"-",
                            street_complement:"-",
                            neighborhood:"-",
                            city:"-",
                            state:"-",
                            country: "Brasil",
                            postal_code:"-",
                            phone_number: "1111111111",
                            cpf:values.cpf,
                            nickname:values.nickname,
                            profile_image: null
                        },
                    }
                }

            API.post(config.APIS.PLAYERSTARS, '/player', options)
                    .then(response => {
                        console.log(" DADOS DO USUARIOS VALUES : ", options)
                        props.history.push('/console')
                    })
                    .catch(error => {
                        console.log('Esse é o retorno das options', options);
                        props.alert.error(AlertMessage.erroSendData);
                    })
          })
          .catch(error => {
              console.log("erro obtendo usuario atual" , error)
          })
    }
  })(CadastroForm));
  
export default withAlert()(FormikForm);
 
