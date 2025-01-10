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
Object.defineProperty(exports, "__esModule", { value: true });
const entradas_1 = require("./entradas");
const espalindromo_1 = require("./espalindromo");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        let palabra;
        let continuar = true;
        const programa = () => __awaiter(this, void 0, void 0, function* () {
            while (continuar) {
                palabra = yield (0, entradas_1.entra_dato)();
                console.clear();
                if ((0, espalindromo_1.palindromo)(palabra)) {
                    console.log("es una palabra palindroma");
                    yield (0, entradas_1.enter)();
                    console.clear();
                    programa();
                }
                else {
                    console.log("no es una palabra palindroma");
                    yield (0, entradas_1.enter)();
                    console.clear();
                    programa();
                }
            }
        });
        programa();
    });
}
init();
