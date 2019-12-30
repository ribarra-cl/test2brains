/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import IUser from "../../../../src/models/user.model";

export const PROFILE_LOAD = '/PROFILE/LOAD';

export interface IProfileLoad
{
  type: '/PROFILE/LOAD',
  payload: {
    user: IUser,
  }
}

export function loadProfileDataAction(user: IUser): IProfileLoad {
  return {
    type: PROFILE_LOAD,
    payload: {
      user,
    }
  }
}

export type ProfileReduxAction =
  IProfileLoad;
