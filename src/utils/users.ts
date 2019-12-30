/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as request from 'request';
import {Response} from 'request';
import {redisClient} from "../redis-client";

const CACHE_KEY = 'users';
const CACHE_TIMEOUT = 60;

// fetch users from https://randomuser.me/documentation#howto
export const fetchUsers = (callback: (users: any) => any) => {

  const url = `https://randomuser.me/api/?results=100&seed=2brains`;

  redisClient.get(CACHE_KEY, (error: Error, users: string) => {
    if(users)
    {
      // TODO: check data integrity
      // got from cache
      callback(JSON.parse(users));
    }
    else
    {
      // no cache get from API
      request.get(url, (error: any, response: Response, body: any) => {
        // TODO: check erros
        const json = JSON.parse(body);
        const users = json.results;

        // save to cache
        redisClient.setex(CACHE_KEY, CACHE_TIMEOUT, JSON.stringify(users), (error, result) => {

        });
        callback(users);
      })
    }
  });
}

export const findUser = (uuid: string, callback: (user: any) => any) => {
  fetchUsers((users) => {
    const user = users.find((user: any) => user.login.uuid = uuid);
    callback(user);
  })
}