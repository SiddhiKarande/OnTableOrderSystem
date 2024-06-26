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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_repo_1 = __importDefault(require("./order.repo"));
const order_responses_1 = require("./order.responses");
const placeOrder = (
// table_number: number,
orderDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = {
            // table_number,
            orderDetails,
            // status: "new", //for now
        };
        // Use the repository function to save the order
        const savedOrder = yield order_repo_1.default.saveOrder(order);
        const { _id } = savedOrder, formattedOrder = __rest(savedOrder, ["_id"]);
        console.log(formattedOrder);
        return formattedOrder;
    }
    catch (error) {
        throw error; // Handle errors appropriately in your application
    }
});
const displayAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_repo_1.default.getOrder(); // Assuming getAllOrders() is the correct method in your repository
        if (!orders)
            throw order_responses_1.orderResponses.ORDER_NOT_FOUND;
        // Remove _id field from each order before returning
        const ordersWithoutIds = orders.map((_a) => {
            var { _id } = _a, order = __rest(_a, ["_id"]);
            return order;
        });
        console.log(orders);
        return ordersWithoutIds;
    }
    catch (e) {
        throw e;
    }
});
const increaseCounterById = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield order_repo_1.default.increaseCounter(itemId);
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    placeOrder,
    displayAllOrders,
    increaseCounterById,
};
