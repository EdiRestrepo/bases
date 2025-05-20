"use strict";
//Funcion Anonima autoinvocada, esto se hace para que 
// mis variables no caigan en el scope del objeto global window y no choquen con los 
// demas archivos
(() => {
    const a = 10;
    console.log(a);
})();
