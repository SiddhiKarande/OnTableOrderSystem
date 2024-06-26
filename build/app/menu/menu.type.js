"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const menuItemSchema = zod_1.z.object({
    itemName: zod_1.z.string(),
    itemPrice: zod_1.z.number(),
    counter: zod_1.z.number(),
    estimatedTime: zod_1.z.number(),
    recipe: zod_1.z.string(),
});
