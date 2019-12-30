"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("redis");
const config_1 = require("./config");
exports.redisClient = redis.createClient(config_1.REDIS_URL);
//# sourceMappingURL=redis-client.js.map