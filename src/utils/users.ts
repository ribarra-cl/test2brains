/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 29 Dec 2019
 */

import * as request from 'request';
import {Response} from 'request';
import {redisClient} from "../redis-client";
import {REQUEST_FAILURE} from "../config";

const CACHE_KEY = 'users-6';
const CACHE_TIMEOUT = 60;

export const requestUsers = (callback: (users: any) => void) => {

  // fetch users from https://randomuser.me/documentation#howto
  const url = `https://randomuser.me/api/?results=100&seed=2brains`;
  const fallibleRequest = () => {
    const rnd = Math.random();
    request.get(url, (error: any, response: Response, body: any) => {

      if (rnd < REQUEST_FAILURE) // dit it fail?
      {
        console.log("--did fail", rnd);
        setTimeout(() => {
          // timeout to avoid blocking
          fallibleRequest();
        }, 500);

      } else {
        console.log("--did not fail", rnd);
        // TODO: check errors
        const json = JSON.parse(body);
        const users = json.results;
        callback(users);
      }
    })
  }
  fallibleRequest();

}


export const fetchUsers = (callback: (users: any) => void) => {

  redisClient.get(CACHE_KEY, (error: Error, users: string) => {
    if(users)
    {
      // TODO: check data integrity
      // got from cache
      console.log("--got from cache");
      callback(JSON.parse(users));
    }
    else
    {
      // no cache (try to) get from API
      requestUsers((users) => {
        // save to cache
        redisClient.setex(CACHE_KEY, CACHE_TIMEOUT, JSON.stringify(users), (error, result) => {

        });
        callback(users);
      });
    }
  });
}

export const findUser = (uuid: string, callback: (user: any) => void) => {
  fetchUsers((users) => {
    const user = users.find((user: any) => user.login.uuid = uuid);
    callback(user);
  })
}