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
const express_1 = require("express");
const menu_services_1 = __importDefault(require("./menu.services"));
const response_handler_1 = require("../utility/response-handler");
const routes_types_1 = require("../routes/routes.types");
const router = (0, express_1.Router)();
router.get("/allItems", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield menu_services_1.default.displayAllItems();
        //   res.send(new ResponseHandler(result));
        console.log(result);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
}));
router.post("/addItem", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newItemData = req.body; // Assuming the request body contains the new menu item data
        const newItem = yield menu_services_1.default.insertMenuItem(newItemData); // Call the service function to insert the item
        res.send(new response_handler_1.ResponseHandler(newItem)); // Send a response with the inserted menu item
    }
    catch (error) {
        next(error); // Pass any errors to the error handling middleware
    }
}));
router.patch("/increaseCounter/:itemId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itemId = req.params.itemId;
        yield menu_services_1.default.increaseCounterById(itemId);
        res.send(new response_handler_1.ResponseHandler(null));
    }
    catch (error) {
        next(error);
    }
}));
exports.default = new routes_types_1.Route("/menu", router);
