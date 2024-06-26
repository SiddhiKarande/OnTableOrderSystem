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
const menu_schema_1 = __importDefault(require("./menu.schema"));
//used to display all items on menu
const getMenu = () => menu_schema_1.default.find();
//used to increase the count of item
const increaseCounter = (itemId) => {
    return menu_schema_1.default.updateMany({ _id: itemId }, { $inc: { counter: 1 } });
};
//create
const createMenuItem = (menuItemData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItem = new menu_schema_1.default(menuItemData);
        const savedItem = yield newItem.save();
        return savedItem.toObject();
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    getMenu,
    createMenuItem,
    increaseCounter,
};
