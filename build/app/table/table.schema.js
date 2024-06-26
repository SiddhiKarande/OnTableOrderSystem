"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the Mongoose schema
const tableSchema = new mongoose_1.Schema({
    qr: {
        type: Number,
        required: true,
        unique: true,
    },
});
// Create and export the Mongoose model based on the schema
const TableSchema = (0, mongoose_1.model)("Table", tableSchema);
exports.default = TableSchema;
