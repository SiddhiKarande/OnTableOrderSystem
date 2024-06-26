"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const menuItemSchema = new mongoose_1.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    counter: {
        type: Number,
        default: 0, // Default value  = 0
    },
    estimatedTime: {
        type: Number,
        required: true,
    },
    recipe: {
        type: String,
        required: true,
    },
});
const MenuItemModel = (0, mongoose_1.model)("Menu", menuItemSchema);
exports.default = MenuItemModel;
