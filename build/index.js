"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const validate_env_1 = require("./app/utility/validate-env");
(0, validate_env_1.validateENV)();
(0, app_1.startServer)();
