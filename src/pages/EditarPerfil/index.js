import React, { useState, useEffect } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { withAlert } from 'react-alert';
import { useSelector, useDispatch } from 'react-redux';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { API } from "aws-amplify";
import config from '../../config/constants';
import PageContainer from "../../components/features/PageContainer";
import AlertMessage from '../../components/elements/AlertMessage';
import {setUserImage} from "../../store/actions/user.action";
import moment from 'moment';
import avatarDefault from "../../assets/icons/avatar-perfil.svg";
import iconremove from '../../assets/images/icon-remove-profile.png';
import iconedit from '../../assets/images/editar-perfil-profile.png';

import './styles.scss';

const convertBase64 = (image) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            resolve(reader.result)
        };
    })
};

function EditarPerfil(props) {
    const dispatch = useDispatch()
    const [thumbnailFile, setThumbnailFile] = useState("");
    const [preview, setPreview] = useState("")
    const [user, setUser] = useState([]);
    const userOld = useSelector(state => state.user.data.user);
    const profile_image = userOld ? userOld.profile_image : avatarDefault;
    const [change, setChange] = useState(false);

    useEffect(() => {
        setPreview(thumbnailFile ? URL.createObjectURL(thumbnailFile) : profile_image);
    }, [thumbnailFile, profile_image])

    useEffect(() => {
        API.get(config.APIS.PLAYERSTARS, '/player/get-my-profile')
            .then(response => {
                setUser(response.data.player.user);
            })
            .catch(error => {
                console.log("ERRO NO GET: ", error)
            })
    }, []);

    console.log(user)

    useEffect(() => {
        props.setValues(userOld)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userOld])


    const onChangeFile = async (e) => {
        setChange(true)
        setThumbnailFile(e.target.files[0])
        if (e.target.files[0] !== "") {
            const imgBase64 = await convertBase64(e.target.files[0])
            console.log("::::::::BASE64::", imgBase64)
            props.setFieldValue("profile_image", imgBase64)
        }   
    }

    const removePreview = () => {
        setChange(true)
        setThumbnailFile("")
        dispatch(setUserImage(""))
    }

    return (
        <>
        <PageContainer public={false}>
            <section className="containerEditProfile">
                <div className="contentEditProfile">
                    <h2 className="titleEditProfile">Editar Perfil</h2>
                    <div className="containerEditAvatar">
                        <div className="containerAvatar">
                            <div id="thumbnail"
                                style={{ backgroundImage: `url(${preview || avatarDefault})`}}
                                className="thumbnail"
                            ></div>
                        </div>
                        <div className="containerEditRemove">
                            <label className="containerPutAvatar">
                                <img className="iconEdit" src={iconedit} alt="Icon editar" />
                                <span className="textEdit">Alterar imagem</span>
                                <input className="inputAvatar" type="file" accept="image/*" onChange={onChangeFile} />
                            </label>
                            <label className="containerPutAvatar" onClick={removePreview}>
                                <img className="iconEdit" src={iconremove} alt="Icon remover" />
                                <span className="textEdit">Excluir</span>
                            </label>
                        </div>
                    </div>
                    {EditForm(user, change)}
                </div>
            </section>
            </PageContainer>
        </>
    )
}

function EditForm(user, change) {
    const [redirect, setRedirect] = useState(false);
    const [btn_color, setBtn_color] = useState("#bbb");
    const dateMax = moment(Date.now() - 567648000000).format('YYYY-MM-DD');
    const dateMin = moment(Date.now() - 2838240000000).format('YYYY-MM-DD');
    
    return (
        <>
            {redirect && <Redirect to='/perfil' />}
            <Form className="dadosPessoais" onChange={() => setBtn_color('#000')}>
                <div className="blocoDadosPessoais">
                    <h3 className="titleH3">Dados pessoais</h3>
                    <ErrorMessage className="error" component="span" name="nome" />
                    <fieldset>
                        <Field id="nome" type="text" name="name" required />
                        <label className="label" htmlFor="nome" >Nome completo</label>
                    </fieldset>
                    <fieldset>
                        <Field id="email" type="text" name="email" required />
                        <label className="label" htmlFor="email" >E-mail</label>
                    </fieldset>
                    <ErrorMessage className="error" component="span" name="nascimento" />
                    <ErrorMessage className="error" component="span" name="nickname" />
                    <div className="doisCampos">
                        <fieldset>
                            <Field 
                                name="date_birth" 
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
                    <fieldset>
                        <Field id="nickname" type="text" name="nickname" required />
                        <label className="label" htmlFor="nickname" >Nickname</label>
                    </fieldset>
                </div>
                <div className="containerBtn">
                    <button className="btnCancel" type="button" onClick={() => setRedirect(true)}>Cancelar</button>
                    <button className="btnSave" type="submit" style={{ background: `${change ? '#000' : btn_color}` }}>Salvar alterações</button>
                </div>
            </Form>
        </>
    )
}

const SaveEdit = withRouter(withFormik({
    mapPropsToValues({
        name,
        date_birth,
        nickname,
        profile_image
    }) {
        return {
            name: name || '',
            date_birth: date_birth || '',
            nickname: nickname || '',
            profile_image: profile_image || ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Digite seu nome completo!'),
        date_birth: Yup.date().required('Digite sua data de nascimento!'),
        nickname: Yup.string().required('Digite seu nickname!')
    }),
    handleSubmit(values, { props, setValues }) {
        const options = {
            body: {
                user: {
                    name: values.name,
                    email: values.email,
                    date_birth: values.date_birth,
                    street: values.street,
                    street_number: values.street_number,
                    street_complement: values.street_complement,
                    neighborhood: values.neighborhood,
                    city: values.city,
                    state: values.state,
                    country: "Brasil",
                    postal_code: values.postal_code,
                    phone_number: values.phone_number,
                    cpf: values.cpf,
                    nickname: values.nickname,
                    profile_image: values.profile_image
                }
            }
        }
        API.put(config.APIS.PLAYERSTARS, '/player', options)
            .then(response => {
                console.log(":::::::OPTIONS:::::::", options)
                window.location.href = '/perfil'
            })
            .catch(error => {
                console.log(":::::::OPTIONS:::::::", options)
                props.alert.error(AlertMessage.erroEditDataUser);
            })
    }
})(EditarPerfil));

export default withAlert()(SaveEdit)