"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const table_schema_1 = __importDefault(require("./table.schema"));
const getTable = (query) => table_schema_1.default.findOne(query);
exports.default = { getTable };
