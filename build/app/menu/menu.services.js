"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_repo_1 = __importDefault(require("./menu.repo"));
const menu_responses_1 = require("./menu.responses");
const displayAllItems = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield menu_repo_1.default.getMenu();
        if (result === null)
            throw menu_responses_1.menuResponses.ITEM_NOT_FOUND;
        return result;
    }
    catch (e) {
        throw e;
    }
});
const insertMenuItem = (menuItemData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if required fields are present in the data
        if (!menuItemData.itemName ||
            !menuItemData.itemPrice ||
            !menuItemData.recipe) {
            throw new Error("Missing required fields for menu item");
        }
        const newItem = yield menu_repo_1.default.createMenuItem(menuItemData);
        return newItem;
    }
    catch (error) {
        throw error;
    }
});
const increaseCounterById = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield menu_repo_1.default.increaseCounter(itemId);
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    displayAllItems,
    insertMenuItem,
    increaseCounterById,
};
