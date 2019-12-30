/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as axios from "axios";

export const get = (url: string) => {
  return axios.default.get(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const post = (body: any) => {
  return axios.default.post('/api/users/login', body, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
