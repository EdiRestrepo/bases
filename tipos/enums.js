"use strict";
(() => {
    //Por favor, dime que son los enums
    // Los enums son una forma de definir un conjunto de constantes con nombre en TypeScript.
    // Permiten agrupar valores relacionados y darles un nombre significativo.
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Green;
    console.log(c); // 1
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Low"] = 1] = "Low";
        AudioLevel[AudioLevel["Medium"] = 2] = "Medium";
        AudioLevel[AudioLevel["High"] = 3] = "High";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudioLevel = AudioLevel.Medium;
    console.log(currentAudioLevel); // 2
    console.log(AudioLevel); // { '1': 'Low', '2': 'Medium', '3': 'High', Low: 1, Medium: 2, High: 3 }   
})();
