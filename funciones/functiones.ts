(()=>{
    const hero: string = "Superman";


    function returnHero(): string {
        return hero;
    }

    const activateBatSignal = (message: string): string => {
        console.log(message);
        return 'Batisignal activated';
    }

    console.log(typeof activateBatSignal);

    const heroName: string = returnHero();
})()