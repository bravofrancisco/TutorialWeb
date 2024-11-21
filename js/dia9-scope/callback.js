/**
 * Sintaxis básica de un Callback
Un callback es una función que se pasa como argumento y se ejecuta dentro de otra función. Por ejemplo:
 */
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}!`);
  callback();
}
function despedir() {
  console.log("Hasta luego");
}
saludar("francisco", despedir);

/**
 * tareas asincrónicas
En JavaScript, una de las situaciones más comunes en las que usamos callbacks es cuando estamos trabajando con tareas asincrónicas, como la lectura de archivos o solicitudes HTTP.

Por ejemplo, usando setTimeout:
 */

function HacerAldoDespuesDeTiempo(callback) {
  setTimeout(() => {
    console.log("Tiempo cumplido");
    callback();
  }, 2000);
}
function accionFinal() {
  console.log("Accion Final");
}
HacerAldoDespuesDeTiempo(accionFinal);

/**
 * Callbacks con Parámetros
A veces, quieres que el callback reciba parámetros. Esto es posible pasando argumentos al callback cuando lo invocas:
 */
function obtenerDatos(callback) {
  const datos = { nombre: "Ana", edad: 23 };
  callback(datos);
}
function procesarDatos(datos) {
  console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`);
}
obtenerDatos(procesarDatos);

/**
 * Ejemplo de Callback con Promesas
Una mejora en la gestión de callbacks, especialmente para operaciones asincrónicas, es el uso de promesas. A veces, cuando tienes múltiples callbacks, puedes encontrarte con lo que se llama "callback hell" (infierno de callbacks), donde las funciones de callback se anidan unas dentro de otras. Usar promesas ayuda a evitar este problema, pero aquí te muestro un ejemplo de cómo usar un callback en combinación con una promesa.
 */
function obtenerDatosConPromesa() {
  return new Promise((resolve, reject) => {
    const datos = { nombre: "Carlos", edad: 30 };
    const exito = true; // Cambiar a false para ver el caso de error

    setTimeout(() => {
      if (exito) {
        resolve(datos); // Resolviendo la promesa con los datos
      } else {
        reject("Error al obtener los datos"); // Rechazando la promesa
      }
    }, 2000);
  });
}

function procesarDatos(datos) {
  console.log(`Nombre: ${datos.nombre}, Edad: ${datos.edad}`);
}

obtenerDatosConPromesa()
  .then(procesarDatos) // Procesar los datos si la promesa se resuelve
  .catch((error) => console.error(error)); // Manejar el error si ocurre

/**
Ejercicio 1: Crear un Callback Simple
Escribe una función llamada multiplicar que reciba un número y un callback. La función debe multiplicar el número por 2 y luego pasar el resultado al callback.
*/
function multiplicar(numero, callback) {
  const resultado = numero * 2;
  callback(resultado);
}

multiplicar(5, (res) => {
  console.log("el resultadoes", res);
});

/**
 * Ejercicio 2: Simular una operación asincrónica
Crea una función simularOperacion que simule un proceso que toma 3 segundos. La función debe recibir un callback que se ejecutará después de que el proceso termine.
 */
function simularOperation(callback) {
  //simula un proceso que tarde 3 segundos
  setTimeout(() => {
    console.log("proceso completado despues de 3 segundos!!!!");
    callback(); //llama al callback despues de que termine la operacion
  }, 3000);
}
//ejemplo de uso
simularOperation(() => {
  console.log("callback ejecutado despues de la operacion asincronica");
});
