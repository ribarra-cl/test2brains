/*
  Author: Richard Ibarra <richard.ibarra@gmail.com>
  Project: 2brains
  Date: 30 Dec 2019
 */

import * as redis from 'redis';
import {REDIS_URL} from "./config";

export const redisClient = redis.createClient(REDIS_URL);

