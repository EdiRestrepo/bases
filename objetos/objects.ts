(()=>{


    let flash: { name: string, age?: number, powers: string[], getNombre?: ()=> string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Speed', 'Time travel'],
    }

     let superman: { name: string, age?: number, powers: string[], getNombre?: ()=> string } = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super strength', 'Flight'],
    }

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