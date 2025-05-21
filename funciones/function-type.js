"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saving the world`;
    let myFunction;
    // * myFunction = 10;
    // *  console.log(myFunction);
    //? myFunction = addNumbers;
    //? console.log(myFunction(1, 2));
    //? myFunction = greet;
    //? console.log(myFunction('Clark Kent'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
