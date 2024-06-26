"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    // table_number: {
    //   type: Number,
    //   required: true,
    // },
    orderDetails: [
        {
            item_name: { type: String, required: true },
            quantity: { type: Number, required: true },
            // total_price: { type: Number, required: true },
        },
    ],
    // },
    // status: {
    //   type: String,
    //   enum: ["new", "started", "complete"],
    //   default: "new",
    // },
});
const OrderModel = (0, mongoose_1.model)("Order", orderSchema);
exports.default = OrderModel;
