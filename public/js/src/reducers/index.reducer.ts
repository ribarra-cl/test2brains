/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import {combineReducers} from 'redux';
import profileReducer from "./profile.reducer";
import loginReducer from "./login.reducer";

let reducers = combineReducers({
  login: loginReducer,
  profile: profileReducer,
})

export default reducers;