import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Auth, API, Hub } from "aws-amplify";
import { connect } from "react-redux";
import { setUserData, setConsoles } from "../../../store/actions/user.action";
import config from "../../../config/constants";
import Loader from "../../elements/Loader";
import Menu from "../Header/Menu";
import Footer from "../Footer";

function PageContainer(props) {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [user_data, setUser_data] = useState(undefined);
  const [to, setTo] = useState("");

  const redirect_to_error = (error_message) => {
    setRedirect(true);
    setLoading(false);
    setTo("/", { state: { message: error_message } });
  };

  const redirect_to_login = () => {
    setRedirect(true);
    setLoading(false);
    setTo("/login");
  };

  const redirect_to_cadastro = () => {
    setRedirect(true);
    setLoading(false);
    setTo("/seus-dados");
  };

  const redirect_to_home = () => {
    setRedirect(true);
    setLoading(false);
    setTo("/");
  };

  const get_user_data = (cognito_response) => {
    const user_id = cognito_response.username;

    if (props.user.data.entity_id) {
      setLoading(false);
      setUser_data({ cognito_user: cognito_response, data: props.user });
      return;
    }

    API.get(config.APIS.PLAYERSTARS, `/player/${user_id}`, {})
      .then((response) => {
        console.log("get user data bem sucedido. Response: ", response);
        props.setUserData(response.data);
        setUser_data({ cognito_user: cognito_response, data: response.data });
      })
      .catch((error) => {
        console.log("get user data falhou: ", error);
        if (error.response && error.response.status === 404) {
          redirect_to_cadastro();
        } else {
          redirect_to_error("Erro obtendo dados do usuário");
          console.log("Erro obtendo dados o usuário: ", error.response);
        }
      });

    API.get(config.APIS.PLAYERSTARS, "/console/")
      .then((response) => {
        props.setConsoles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERRO NO GET: ", error);
      });
  };

  const get_authenticated_user = () => {
    if (!has_user_data()) {
    Auth.currentAuthenticatedUser()
      .then((response) => {
        console.log("get_authenticated_user, response:", response);
        if (props.register) {
          redirect_to_home();
        }
        if (!props.cadastro) {
          get_user_data(response);
        } else {
          setLoading(false);
          setUserData({ cognito_user: response });
        }
      })
      .catch((error) => {
        if (props.register) {
          setLoading(false);
          setRedirect(false);
        } else {
          if (!props.public) {
            if (error === "not authenticated") {
              redirect_to_login();
            } else {
              redirect_to_error(error);
            }
          } else {
            setLoading(false);
          }
        }
      });
    }
  };

  const has_user_data = () => {
    return props.user_data !== undefined;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    get_authenticated_user();
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "signIn") {
        get_authenticated_user();
      }
    });
    // eslint-disable-next-line
  }, []);

  const renderLoading = () => {
    return (
      <div className="Loading">
        <Loader />
      </div>
    );
  };

  const renderContent = () => {
    const children = React.Children.map(props.children, (child) =>
      React.cloneElement(child, { user_data: user_data })
    );
    return <>{children}</>;
  };

  const content = loading ? renderLoading() : renderContent();

  if (redirect) {
    return <Redirect to={to} />;
  }

  return (
    <>
      <Menu user_data={user_data} />
      {content}
      <Footer user_data={user_data} />
    </>
  );
}

PageContainer.propTypes = {
  background: PropTypes.any,
  backgroundHeight: PropTypes.string,
  public: PropTypes.bool,
  cadastro: PropTypes.bool,
};

export default connect(
  (state) => {
    const user = state.user;
    return {
      user,
    };
  },
  {
    setUserData,
    setConsoles,
  }
)(PageContainer);
