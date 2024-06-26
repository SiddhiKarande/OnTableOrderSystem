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
const table_repo_1 = __importDefault(require("./table.repo"));
const table_response_1 = require("./table.response");
const findTable = (qrCode) => __awaiter(void 0, void 0, void 0, function* () {
    const qr = parseInt(qrCode); // Parse QR code as number directly
    if (isNaN(qr)) {
        throw new Error("Invalid QR code");
    }
    try {
        const table = yield table_repo_1.default.getTable({ qr });
        if (table === null)
            throw table_response_1.tableResponses.TABLE_NOT_FOUND;
        return table;
    }
    catch (error) {
        console.error("Error finding table:", error);
        throw error;
    }
});
exports.default = {
    findTable,
};
