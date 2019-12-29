/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

// fetch users from https://randomuser.me/documentation#howto
import * as request from "request";

export const fetchUsers = (callback: (users: any) => any) => {
  const url = `https://randomuser.me/api/?results=100&seed=2brains`;
  request(url, (error, response, body) => {

    // TODO: error handling
    const json : any = JSON.parse(body);
    callback(json.results);
  });
}