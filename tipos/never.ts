(()=>{
   //que hace el never
   //El never es un tipo de dato que indica que una función nunca devuelve un valor.
   function throwError(message: string): never {
       throw new Error(message);
   }

   let a = throwError("Nuevo Error");
   console.log(a); // nunca se alcanzará
   console.log("Esto no se ejecutará");
   //El never se utiliza para indicar que una función no tiene un valor de retorno válido.


})()