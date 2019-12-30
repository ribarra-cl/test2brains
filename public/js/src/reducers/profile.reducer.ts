/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import IUser from "../../../../src/models/user.model";
import {PROFILE_LOAD, ProfileReduxAction} from "../actions/profile.action";

export interface IProfileState
{
  user: IUser
}

const initialState: IProfileState = {
  user: {
    name: {
      title: '',
      first: '',
      last: ''
    },
    login: {
      uuid: '',
      username: ''
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    },
    email: ''
  }
}

let profileReducer = (state = initialState, action: ProfileReduxAction): IProfileState => {
  switch(action.type) {
    case PROFILE_LOAD:
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state
  }
}

export default profileReducer;