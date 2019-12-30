
export const LOGIN_SETUP_TOKEN = '/LOGIN/SETUP_TOKEN';
export const LOGIN_CLEAR = '/LOGIN/CLEAR';

export interface ILoginState {
  token: string;
}

interface ILoginSetupToken {
  type: '/LOGIN/SETUP_TOKEN',
  payload: {
    token: string
  }
}

export function loginSetupTokenAction(token: string): ILoginSetupToken
{
  return {
    type: LOGIN_SETUP_TOKEN,
    payload: {
      token
    }
  }
}

interface ILoginClear {
  type: '/LOGIN/CLEAR'
}

export function loginClearAction(): ILoginClear
{
  return {
    type: LOGIN_CLEAR
  }
}


export type LoginReduxAction =
  ILoginSetupToken |
  ILoginClear;