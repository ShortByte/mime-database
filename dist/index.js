"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = exports.MimeTypes = void 0;
const db_json_1 = __importDefault(require("./db.json"));
exports.MimeTypes = db_json_1.default;
function getType(mimeType) {
    return exports.MimeTypes[mimeType];
}
exports.getType = getType;
//# sourceMappingURL=index.js.map