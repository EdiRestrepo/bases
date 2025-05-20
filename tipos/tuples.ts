(()=>{
    // Tuples are a special type of array that have a fixed number of elements and can have different types
    // They are defined using square brackets and can be used to represent a fixed structure of data

    // Example of a tuple
    let tuple: [string, number, boolean] = ['Hello', 42, true];

    // Accessing tuple elements
    console.log(tuple[0]); // Hello
    console.log(tuple[1]); // 42
    console.log(tuple[2]); // true

    // Tuples can also be used to return multiple values from a function
    function getUser(): [string, number] {
        return ['John Doe', 30];
    }

    const user = getUser();
    console.log(user); // ['John Doe', 30]


})()