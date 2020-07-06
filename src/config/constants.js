const COGNITO = {
  REGION: 'us-east-1',
  USER_POOL_ID: 'us-east-1_kOuqOxe1b',
  APP_CLIENT_ID: '4rsvc75ra5l090h1bcfem9al55'
};

const APIS = {
  PLAYERSTARS: 'playerstars-api',
  PLAYERSTARS_PUBLIC: 'playerstars-public-api'
};

const STAGES = {
  dev: {
    COGNITO,
    APIS,
    DOMAIN: 'https://mb45dn63b2.execute-api.us-east-1.amazonaws.com/dev',
    COGNITO_DOMAIN: 'playerstars.auth.us-east-1.amazoncognito.com',
    REDIRECT_SIGN_IN: 'https://dev.playerstars.com/',
    REDIRECT_SIGN_OUT: 'https://dev.playerstars.com/'
  },
  stg: {
    COGNITO,
    APIS,
    DOMAIN: 'https://sgag9twe0k.execute-api.us-east-1.amazonaws.com/stg',
    COGNITO_DOMAIN: 'playerstars.auth.us-east-1.amazoncognito.com',
    REDIRECT_SIGN_IN: 'https://stg.playerstars.com/',
    REDIRECT_SIGN_OUT: 'https://stg.playerstars.com/'
  },
  prd: {
    COGNITO,
    APIS,
    DOMAIN: 'https://mb45dn63b2.execute-api.us-east-1.amazonaws.com/dev'
  }
};

const env = process.env.REACT_APP_STAGE || 'stg';
const config = STAGES[env];

export default config; 
