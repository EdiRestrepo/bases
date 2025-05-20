(()=>{
    //Por favor, dime que son los enums
    // Los enums son una forma de definir un conjunto de constantes con nombre en TypeScript.
    // Permiten agrupar valores relacionados y darles un nombre significativo.
    enum Color {
        Red,
        Green,
        Blue
    }

    let c: Color = Color.Green;
    console.log(c); // 1

    enum AudioLevel {
        Low = 1,
        Medium = 2,
        High = 3
    }

    let currentAudioLevel: AudioLevel = AudioLevel.Medium;

    console.log(currentAudioLevel); // 2
    console.log(AudioLevel);    // { '1': 'Low', '2': 'Medium', '3': 'High', Low: 1, Medium: 2, High: 3 }   
})()