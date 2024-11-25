//Tipos de variables y su scope
//Gloal scope: se declara fuera de cualquier funcion

let nombre = "carlos";
function saludar() {
  console.log(nombre); //se puede acceder a la variable global dentro de la fncion
}

saludar();

//Funcion scope : se decalara dentro de una funcion, y solo es accesible dentro de esa funcion

function miFuncion() {
  let edad = 30;
  console.log(edad);
}
miFuncion();
//console.log(edad); //ERROR EDAD IS NOT DEFINED

//BLOCKScope usando let y const las variables tiene alcance limitado al bloque de codigo en el que fue declarados

if (true) {
  let numero = 5; //bloque scope
  const texto = "Hola"; //block scope
  console.log(numero);
}
//console.log(numero); //error 'numero' is no defined
//console.log(texto); //error 'text' is not defined

/**
 * Ejercicio
 */
let miNombre = "Pedro";
function Saludar2() {
  let miNombre2 = "Juan"; //esta variable esta detro dela funcion
  console.log(miNombre2);
}
Saludar2();
//console.log(miNombre2);

/**
 * Ejercicio 2: Variables con var, let y const
Dado el siguiente código, ¿cuál es la salida? Explica por qué.
 */
function testScope() {
    if (true) {
      var a = 1; // var tiene scope de función
      let b = 2; // let tiene block scope
      const c = 3; // const tiene block scope
    }
    console.log(a); // ¿Qué valor se imprimirá?
    console.log(b); // ¿Qué valor se imprimirá?
    console.log(c); // ¿Qué valor se imprimirá?
  }
  
  testScope();
  