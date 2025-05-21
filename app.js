"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["Flash"] = 5] = "Flash";
        FuerzaHeroes[FuerzaHeroes["Superman"] = 100] = "Superman";
        FuerzaHeroes[FuerzaHeroes["Batman"] = 1] = "Batman";
        FuerzaHeroes[FuerzaHeroes["Acuaman"] = 0] = "Acuaman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    const fuerzaFlash = FuerzaHeroes.Flash;
    const fuerzaSuperman = FuerzaHeroes.Superman;
    const fuerzaBatman = FuerzaHeroes.Batman;
    const fuerzaAcuaman = FuerzaHeroes.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = 4;
    const largoDelPoder = poder.length;
    const largoDelPoder2 = poder.length;
    const largoDelPoder3 = poder.length;
    console.log(largoDelPoder); // 3
    console.log(largoDelPoder2); // 3
    console.log(largoDelPoder3); // 3
    // let vacio: null = undefined
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    console.log(enumeracion.a); // 10
    console.log(enumeracion.b); // 11
    console.log(enumeracion.c); // 9
    console.log(enumeracion.d); // 10
})();
