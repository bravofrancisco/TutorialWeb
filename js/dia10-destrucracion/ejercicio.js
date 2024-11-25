const persona = {
  nombre: "francisco",
  edad: 20,
  profesion: "Ingeiero en Informatica",
};

function Saludar({ nombre, edad, profesion }) {
  console.log(
    `Hola, me llamo ${nombre} y tengo ${edad} años. y soy de profesion ${profesion}`
  );
}

Saludar(persona);
console.log("--------------------------------");

/**
 * Desestructura un arreglo de números y calcula su promedio.
 */
const arr = [1, 2, 3, 4, 5];
let suma = 0;

const [n1, n2, n3, n4, n5] = arr;

for (let i = 0; i < arr.length; i++) {
  suma += arr[i];
}
const promedio = suma / arr.length;

console.log("****PROMEDIO FINAL**");
console.log(promedio);
console.log("--------------------------------");

console.log("**destruturacion anidada****");

const datosPersonas = {
  name: "francisco",
  direccion: {
    calle: "mario",
    cuidad: "region de los rios",
  },
};

const {
  nombre,
  direccion: { calle, cuidad },
} = datosPersonas;

console.log(nombre);
console.log(calle);
console.log(cuidad);

/**
 * Consolidadr conocimientos
 */

/**
 * Ejercicios para practicar
Ejercicio 1: Desestructuración de objetos con valores predeterminados
Tienes el siguiente objeto de una persona:
 */
console.log("Ejericicios de practica");

const persona3 = {
  nombre3: "Manuel",
  edad3: 29,
  cuidad3: "valdivia",
};

const { nombre3, edad3, ciudad3 = "santiago" } = persona3;
console.log(nombre3);
console.log(edad3);
console.log(ciudad3);

console.log("*ejercicio de practica 2****");

//#region  Ejercicio 2: Desestructuración de arreglos Tienes el siguiente arreglo con 4 números:
const numeros = [1, 2, 3, 4, 5];
const [primerNumero, segundoNumero, ...resto] = numeros;

console.log(primerNumero, segundoNumero);
console.log(resto);

//#endregion

/**
 * Ejercicio 3
 * Crea una función llamada informacionProducto que reciba un objeto con las propiedades nombre, precio, y stock. La función debe imprimir un mensaje con los datos del producto.
 */
const producto = {
  nombre4: "Camisa",
  precio4: 1000,
  stock4: 100,
};
function InformacionProductos({ nombre4, precio4, stock4 }) {
  console.log(
    `Hola, producto ${nombre4} y el precio es.: ${precio4} y hay un stock de ${stock4}.`
  );
}
InformacionProductos(producto);

/**
 * Ejercicio 4: Desestructuración anidada
Tienes el siguiente objeto que describe un usuario con su dirección y los productos que ha comprado:
 */

console.log("****Ejercicio 4****");

let Laptop;
let iphon;
const usuario = {
  nombres: "Laura",
  direccion: {
    calle5: "Avenida Siempre Viva 742",
    ciudad5: "Springfield",
    pais5: "EE.UU.",
  },
  productos: ["Laptop", "Teléfono", "Auriculares"],
};

const {
  nombres,
  direccion: { calle5, cuidad5, pais5 },
  productos: [prodcuto1, producto2],
} = usuario;
console.log(nombres);
console.log(calle5);
console.log(pais5);
console.log(prodcuto1);
console.log(producto2);

console.log("++++++ejercicio 5+++++++");

/**
 * Ejercicio 5: Desestructuración de arreglos con elementos faltantes
 */
const colores = ["rojo", "verde", "azul"];

const [primerColor = "red", SegundoColor = "green", tercerColor = "Azul"] =
  colores;
console.log(primerColor);
console.log(SegundoColor);
console.log(tercerColor);

/**
 * Ejercicio 6: Desestructuración con funciones y valores predeterminados
Imagina que tienes una función crearCuenta que recibe un objeto con las propiedades usuario, email, y activo. Si alguna de estas propiedades no se pasa, debes asignar valores predeterminados:
 */

const cuenta = {
  usuario: "Juan",
  activo: false,
};

function crearCuenta({
  usuario = "Invitado",
  email = "sinemail@gmail.com",
  activo = true,
}) {
  console.log(`Usuario: ${usuario}, Email: ${email}, Activo: ${activo}`);
}

// Llamada a la función pasando el objeto 'cuenta'
crearCuenta(cuenta); // Debe mostrar "Usuario: Juan, Email: sinemail@dominio.com, Activo: false"

/**
 * PRUEBA TECNICA
 * Desestructura el objeto empleado para obtener nombre, edad, ciudad, y el primer trabajo (Programadora).
Si no existen, asigna valores predeterminados como:
ciudad como 'Desconocida'
El trabajo como 'Sin trabajo'.
 */
console.log("****PRUEBA TECNICA**");

const empleado = {
  nombre6: "FB",
  edad6: 20,
  direccion6: {
    calle6: "call del sol",
    ciudad6: "barcelona",
  },
  trabajos6: ["programadora", "diseñador"],
};

const {
  nombre6 = "sin nombre",
  edad6 = 0,
  direccion6: { calle6 = "NO HAY CALLE", ciudad6 = "Desconocida" },
  trabajos6: [programadora = "sin trabajo", diseñador = "sin trabajo"],
} = empleado;
console.log(nombre6);
console.log(edad6);
console.log(calle6);
console.log(ciudad6);
console.log(programadora);
console.log(diseñador);

/**
 * Pregunta 2: Desestructuración de arreglo con el operador rest Tienes el siguiente arreglo de números:
 */
const numbers = [100, 200, 300, 400, 500];

// Desestructuración: Primer valor, último valor, y el resto de los valores.
const [primerNumeros, ...otrosNumeros] = numbers;
const ultimoNumero = otrosNumeros.pop();
console.log(primerNumeros);   // 100
console.log(ultimoNumero);   // 500
console.log(otrosNumeros);   // [200, 300, 400]
