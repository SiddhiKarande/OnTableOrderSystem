"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderedItemSchema = void 0;
const zod_1 = require("zod");
exports.orderedItemSchema = zod_1.z.object({
    // table_number: z.number(),
    orderDetails: zod_1.z.array(zod_1.z.object({
        item_name: zod_1.z.string(),
        quantity: zod_1.z.number(),
    })),
    // status: z.enum(["new", "started", "complete"]),
});
