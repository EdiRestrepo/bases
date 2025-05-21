(()=>{
       type Hero = {
        name: string;
        age?: number;
        powers: string[];  
        getNombre?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Hello world';     
    console.log(typeof myCustomVariable);

    myCustomVariable = 123;
    console.log(typeof myCustomVariable);


    myCustomVariable = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super strength', 'Flight'],
        getNombre(this: Hero) {
            return this.name;
        }
    }

})();