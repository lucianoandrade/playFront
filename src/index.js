import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config/constants';
import Amplify, { Auth } from 'aws-amplify';
import { Provider } from 'react-redux';
import store from './store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "./components/elements/AlertTemplate";

const COMMON = {
  region: config.COGNITO.REGION,
  custom_header: async () => {
    return {
      Authorization: (await Auth.currentSession()).idToken.jwtToken
    };
  }
};

const options = {
  position: positions.MIDDLE,
  timeout: 2500,
  offset: '30px',
  transition: transitions.FADE
}


Amplify.configure({
  Auth: {
    region: config.COGNITO.REGION,
    userPoolId: config.COGNITO.USER_POOL_ID,
    userPoolWebClientId: config.COGNITO.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: config.APIS.PLAYERSTARS,
        endpoint: config.DOMAIN,
        ...COMMON
      },
      {
        name: config.APIS.PLAYERSTARS_PUBLIC,
        endpoint: config.DOMAIN
      }
    ]
  }
});
const oauth = {
  domain: config.COGNITO_DOMAIN,
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  redirectSignIn: config.REDIRECT_SIGN_IN,
  redirectSignOut: config.REDIRECT_SIGN_OUT,
  responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
};

Auth.configure({ oauth });
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
