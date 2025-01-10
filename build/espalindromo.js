"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindromo = void 0;
const palindromo = (palabra) => {
    let longitud = palabra.length - 1;
    for (let i = 0; i < palabra.length; i++) {
        if (i == longitud) {
            if (palabra[i].toLowerCase != palabra[longitud].toLowerCase) {
                return false;
            }
            return true;
        }
        if (palabra[i].toLowerCase != palabra[longitud].toLowerCase) {
            return false;
        }
        longitud -= 1;
    }
};
exports.palindromo = palindromo;
