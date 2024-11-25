/**
 * Sintaxis Básica
1. async en Funciones
Cuando una función es declarada con async, automáticamente devuelve una promesa. Si la función retorna un valor, esa promesa se resuelve con ese valor. Si la función lanza un error, la promesa se rechaza con ese error.
 */
async function saludo() {
  return "Hola Mundo";
}
saludo().then((mensaje) => {
  console.log(mensaje); // Salida: "Hola, Mundo!"
});

async function obtenerDatos() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const datos = await respuesta.json();
  console.log(datos);
}
obtenerDatos();

/**
 * Ejemplo de uso de Promesas con async/await
Veamos cómo podemos reescribir un ejemplo con promesas usando async/await.

Con promesas (sin async/await):
 */
function obtenerDatos2() {
  return fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((respuesta2) => respuesta2.json())
    .then((datos2) => {
      console.log(datos2);
    })
    .catch((error) => {
      console.error("error", error);
    });
}
obtenerDatos2();

/**
 * Ejemplo de uso de Promesas con async/await
Veamos cómo podemos reescribir un ejemplo con promesas usando async/await.
sin promesa (con async/await):
 */

async function obtenerDatos3() {
  try {
    const respuesta3 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const datos3 = await respuesta3.json();
    console.log(datos3);
  } catch (error) {
    console.error("Error", error);
  }
}
obtenerDatos3();
/**
 * Ejemplo de múltiples promesas
Si tienes varias promesas que deseas esperar antes de continuar, puedes usar await para esperar todas las promesas en secuencia.
 * 
 */
async function obtenerVariasPublicaciones() {
  const respuesta1 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const respuesta2 = await fetch(
    "https://jsonplaceholder.typicode.com/posts/2"
  );

  const datos1 = await respuesta1.json();
  const datos2 = await respuesta2.json();

  console.log(datos1);
  console.log(datos2);
}
obtenerVariasPublicaciones();

/**
   * jercicio 1: Usar async/await para obtener datos
Imagina que tienes una API que devuelve una lista de usuarios. Crea una función obtenerUsuarios que obtenga los datos de esta API usando async/await.
   */
async function getAllUsers() {
  try {
    const respuesta4 = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (!respuesta4.ok) {
      throw new Error("Error al obtener los datos" + respuesta4.status);
    }
    //convertimos la respuesta a formato JSON
    const usuarios4 = await respuesta4.json();

    //MOSTRAMOS los usuarios obtenidos
    console.log(usuarios4);
  } catch (error) {
    console.error("error", error);
  }
}
getAllUsers();

/**
 * Ejercicio 2: Manejo de errores con try/catch
Reescribe el siguiente código usando async/await y maneja los posibles errores con un bloque try/catch.
 */
console.log("+++Obtener datos!!+++");

async function obtenerPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.status}`);
    }

    const getPost = await response.json();
    console.log(getPost);
  } catch (error) {
    console.log("Error del codigo", error);
  }
}

obtenerPost(3);
