(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum FuerzaHeroes {
    Flash = 5,
    Superman = 100,
    Batman = 1,
    Acuaman = 0
  }
  const fuerzaFlash: FuerzaHeroes = FuerzaHeroes.Flash;
  const fuerzaSuperman: FuerzaHeroes = FuerzaHeroes.Superman;
  const fuerzaBatman: FuerzaHeroes = FuerzaHeroes.Batman;
  const fuerzaAcuaman: FuerzaHeroes = FuerzaHeroes.Acuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any | string = 4;
  const largoDelPoder: number = poder.length;
  const largoDelPoder2: number = (poder as string).length;
  const largoDelPoder3: number = (<string>poder).length;

  console.log(largoDelPoder); // 3
  console.log(largoDelPoder2); // 3
  console.log(largoDelPoder3);  // 3

  let vacio: null = undefined

  enum enumeracion {
    a = 10,
    b,
    c = 9,
    d
  }

  console.log(enumeracion.a); // 10
  console.log(enumeracion.b); // 11
  console.log(enumeracion.c); // 9
  console.log(enumeracion.d); // 10

})()

