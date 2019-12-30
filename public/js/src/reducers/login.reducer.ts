/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import {ILoginState, LOGIN_CLEAR, LOGIN_SETUP_TOKEN, LoginReduxAction} from "../actions/login.action";

const initialState: ILoginState = {
  token: ''
}

let loginReducer = (state = initialState, action: LoginReduxAction): ILoginState => {
  switch(action.type) {
    case LOGIN_SETUP_TOKEN:
      return {
        ...state,
        token: action.payload.token
      }
    case LOGIN_CLEAR:
      return {
        ...state,
        token: ''
      }
    default:
      return state
  }
}

export default loginReducer;