"use strict";
(() => {
    const hero = "Superman";
    function returnHero() {
        return hero;
    }
    const activateBatSignal = (message) => {
        console.log(message);
        return 'Batisignal activated';
    };
    console.log(typeof activateBatSignal);
    const heroName = returnHero();
})();
