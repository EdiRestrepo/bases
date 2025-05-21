"use strict";
(() => {
    let myCustomVariable = 'Hello world';
    console.log(typeof myCustomVariable);
    myCustomVariable = 123;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super strength', 'Flight'],
        getNombre() {
            return this.name;
        }
    };
})();
