(()=>{
    const addNumbers = (a: number, b: number): number =>  a + b;

    const greet = (name: string): string => `Hello ${name}`;

    const saveTheWorld = (): string => `The world is saving the world`;

    let myFunction: () => string;

    // * myFunction = 10;
    // *  console.log(myFunction);

    //? myFunction = addNumbers;
    //? console.log(myFunction(1, 2));

    //? myFunction = greet;
    //? console.log(myFunction('Clark Kent'));


     myFunction = saveTheWorld;
    console.log(myFunction());

})();