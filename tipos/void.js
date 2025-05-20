"use strict";
(() => {
    //que hace el void
    //El void es un tipo de dato que indica que una función no devuelve ningún valor.
    function logMessage(message) {
        console.log(message);
    }
    let a = logMessage("Hola mundo");
    console.log(a); //undefined
})();
