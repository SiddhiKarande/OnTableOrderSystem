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
const order_schema_1 = __importDefault(require("./order.schema"));
const saveOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = yield order_schema_1.default.create(order);
        return newOrder;
    }
    catch (error) {
        throw error; // Handle errors appropriately in your application
    }
});
//to display orders
const getOrder = () => order_schema_1.default.find();
//increment order counter
const increaseCounter = (itemId) => {
    return order_schema_1.default.updateMany({ _id: itemId }, { $inc: { counter: 1 } });
};
exports.default = {
    saveOrder,
    getOrder,
    increaseCounter,
};
