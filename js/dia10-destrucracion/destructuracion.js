const objeto = {
  nombre: "juan",
  apellido: "becerra",
  edad: 30,
  ciudad: "Madrid",
};

//desestruuturacion del objeto
const { nombre, edad, ciudad } = objeto;

console.log(nombre);
console.log(edad);
console.log(ciudad);
//asignacion a variables con nombres distinto
const { apellido: n } = objeto;
console.log(n);

/**
 * Desestructuración de arreglos
La desestructuración de arreglos se realiza de manera similar a la de los objetos, pero usando corchetes [] en lugar de llaves {}. La idea es extraer los elementos del arreglo y asignarlos a variables.
 * 
 */
console.log("******Destructuracion arreglo***");

const arreglo = [10, 20, 30, 40];
//destruturacion del arreglo
const [a, b, c, d] = arreglo;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

/**
 * Desestructuración de arreglos con valores predeterminados
Puedes asignar valores predeterminados en caso de que el arreglo no tenga elementos o los valores sean undefined:
 */
console.log("*******Destruturacion con valor por defecto*********");

const arreglo1 = [10, 20];

// Desestructuración con valores predeterminados
const [a1, b1, c1 = 30] = arreglo;

console.log(a1);
console.log(b1);
console.log(c1);

/**
 * Desestructuración de arreglos con el operador "rest" (...)
Si solo te interesa obtener una parte de los elementos del arreglo y agrupar el resto, puedes usar el operador "rest" (...):
 */
const arreglo2 = [10, 20, 30, 40];

//usnado rest para recoger el resto de los elementos
const [a2, b2, ...resto] = arreglo2;
console.log(a2);
console.log(b2);
console.log(resto);

/**
 * Desestructuración en funciones
Puedes usar la desestructuración directamente en las funciones para extraer valores de objetos o arreglos que recibes como parámetros.
 */
function saludar({ nombre, edad }) {
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}
const persona = {
  nombre: "Manuel",
  edad: 30,
};
saludar(persona);

/**
 * Desestruturacion de un arreglo en una funcion
 */
const numeros = [5, 10];
function sumar([a, b]) {
  return a + b;
}
console.log(sumar(numeros));

/**
 * Desestructuración anidada
Cuando tienes objetos o arreglos dentro de otros objetos o arreglos, puedes hacer desestructuración anidada.
 */
console.log("******Desctruturacion anidada*******");

const persona2 = {
  nombrex: "Juan",
  direccion: {
    calles: "Calle Falsa 123",
    ciudades: "Madrid",
  },
};

// Desestructuración anidada
const {
  nombrex, // Corregí el nombre de la propiedad
  direccion: { calles, ciudades },
} = persona2; // Usé persona2 en lugar de persona

console.log(nombrex); // Debería mostrar "Juan"
console.log(calles); // Debería mostrar "Calle Falsa 123"
console.log(ciudades); // Debería mostrar "Madrid"

/**
 * Desestructuración de un arreglo anidado
 *
 */
const numeros3 = [1, 2, [3, 4]];

// Desestructuración anidada
const [a3, b3, [c3, d3]] = numeros;

console.log(a3); // 1
console.log(b3); // 2
console.log(c3); // 3
console.log(d3); // 4
