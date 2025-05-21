"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Speed', 'Time travel'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super strength', 'Flight'],
        getNombre() {
            return this.name;
        }
    };
    // flash = {
    //     name: 'Clark Kent',
    //     age: 30,
    //     powers: ['Super strength', 'Flight'],
    //     getNombre() {
    //         return this.name;
    //     }
    // }
    // console.log(flash.getNombre?.());
})();
