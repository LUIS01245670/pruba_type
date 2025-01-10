"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enter = exports.entra_dato = void 0;
const process_1 = require("process");
const readline_1 = __importDefault(require("readline"));
const entra_dato = () => {
    return new Promise((resolve) => {
        const read = readline_1.default.createInterface({
            input: process_1.stdin,
            output: process_1.stdout
        });
        read.question('introduce una palabra:', (res) => {
            read.close();
            resolve(res);
        });
    });
};
exports.entra_dato = entra_dato;
const enter = () => {
    return new Promise(resolve => {
        const readlin = readline_1.default.createInterface({
            input: process_1.stdin,
            output: process_1.stdout
        });
        readlin.question('', () => {
            readlin.close();
            resolve();
        });
    });
};
exports.enter = enter;
