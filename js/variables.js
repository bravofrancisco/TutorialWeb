/***
 * Variables
 * string cadena
 * number numero
 * boolean true o false
 * object objtos
 * function
 *
 * null- valor nuloññ
 * undefined - valor sin definir
 */
//#region
const resultado = 4 + 4;
const nombre = "francisco";
const apellido = "bravo";
const resultado1 = nombre + " " + apellido;

let mivariable = "texto";
mivariable = 10;
console.log(typeof resultado1);
console.log(typeof mivariable);
//#endregion

//#region
let names = "francisco";
console.log(names);
//#endregion

//#region
let age = 10;
console.log(age);
//#endregion

//#region
let IsStudent = false;
console.log(IsStudent);
//#endregion

//#region
const ObjPerson = {
  nombre: "Francisco",
  edad: 23,
  esEstudiante: true,
  cursos: ["JavaScript", "Java", "PHP", "Spring"], // Uso consistente de mayúsculas
};

const resultado2 = ObjPerson.cursos;
resultado2.push("GO");
console.log(resultado2);
//#endregion

//#region
let numero1 = 10,
  numero2 = 20,
  resultadoFinal;
resultadoFinal = numero1 + numero2;
console.log(resultadoFinal);
//#endregion

//#region
let n1 = 10;
let n2 = 10;
if (n1 === n2) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}
//#endregion

//#region
function bienvenida() {
  return "hello world.";
}
console.log("el resultado es.:", bienvenida());

//#endregion

//#region
let numeroString = "42";
let numeroN = parseInt(numeroString);
console.log(typeof numeroString);
console.log(typeof numeroN);
//#endregion

//#region
let number = 10;
let string = "palabra";
let booleans = true;
let objet = {};
let nulls = null;
let undefinedVar;

console.log("****tipos de variables*****");

console.log(typeof number);
console.log(typeof string);
console.log(typeof booleans);
console.log(typeof objet);
console.log(typeof nulls);
console.log(typeof undefinedVar);
//#endregion

//#region
const arryFrutas = ["peras", "manzana", "platano", "naranja", "kiwi"];
for (let i = 0; i < arryFrutas.length; i++) {
  //   arryFrutas.push("uva");
  console.log("mis frutas favoritas son:", arryFrutas[i]);
}
//#endregion

//#region
function calcularEdad(anioNacimineto) {
  let anioActual = 2024;
  return anioActual - anioNacimineto;
}
const resultadoedad = calcularEdad(1992);
console.log(resultadoedad);
//#endregion

//#region
function esMayorDeEdad(tomarEdad) {
  if (tomarEdad > 18) {
    return true;
  } else {
    return false;
  }
}
const edads = esMayorDeEdad(19);
console.log(edads);

//#endregion

//#region
function invertirString(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }
  return str.split("").reverse().join("");
}
const inverString = invertirString("francisco2024");
console.log(inverString);

//#endregion

//#region
function contarVocales(str) {
  const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (vocales.includes(str[i])) {
      contador++;
    }
  }
  return contador;
}
const contarVocales1 = contarVocales("Moana");
console.log(contarVocales1);

//#endregion

//#region
function filtrarPares(array) {
  const array_pares = array.filter((num) => num % 2 === 0);
  return array_pares;
}
const filtrar = filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(filtrar);

//#endregion

//#region
function EncontrarMayorYContarMayores(arrMayor, valor) {
  let acumadorMayor = arrMayor[0]; // Inicializamos el mayor con el primer valor
  let contador = 0; // Inicializamos el contador

  // Recorremos el arreglo
  for (let i = 0; i < arrMayor.length; i++) {
    // Encontramos el mayor número
    if (arrMayor[i] > acumadorMayor) {
      acumadorMayor = arrMayor[i];
    }

    // Contamos cuántos números son mayores que el valor especificado
    if (arrMayor[i] > valor) {
      contador++;
    }
  }

  // Retornamos el mayor número y el contador de números mayores que el valor
  return {
    mayor: acumadorMayor,
    cantidadMayoresQueValor: contador,
  };
}

// Llamamos a la función con el arreglo y el valor para comparar
const resultador = EncontrarMayorYContarMayores(
  [11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  5
);

console.log("El mayor número es:", resultador.mayor); // Imprime el mayor número
console.log(
  "Cantidad de números mayores que 5:",
  resultador.cantidadMayoresQueValor
); // Imprime la cantidad de números mayores que 5
//#endregion

//#region Palindromo
function Palindromo(str) {
  //1.-normalizar convertir minuscula y eliminar  espacio vacio
  let normalizar = str.toLowerCase().replace(/\s/g, "");

  //2.-invertir la cadena
  let invertir = normalizar.split("").reverse().join("");

  //3.- comprar la cadena normalizada con la invertida
  return normalizar === invertir;
}
// const resultadoPalindromo = Palindromo("Anita lava la tina");
console.log(Palindromo("Luz azul"));
console.log(Palindromo("Somos o no somos"));

//#endregion

//#region
function SumarArreglo(arr) {
  let acumador = 0;
  for (let i = 0; i < arr.length; i++) {
    acumador += arr[i];
  }
  return acumador;
}
console.log(SumarArreglo([1, 2, 3, 4, 5]));

//#endregion

//#region
function crearUsuario(nombre, edad) {
  const usaurios = {
    nombre: nombre,
    edad: edad,
  };
  return usaurios;
}
console.log(crearUsuario("Juan", 32));
console.log(crearUsuario("Feña", 32));
console.log(crearUsuario("Camilo", 32));
console.log(crearUsuario("Karol", 32));
console.log(crearUsuario("Mama", 32));
console.log(crearUsuario("Papa", 32));

//#endregion

//#region
function buscarElemento(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return true; // Si el elemento se encuentra en el arreglo, devuelve true
    }
  }
  return false; // Si el elemento no se encuentra, devuelve false
}

const arreglo = [1, 2, 3, 4, 5];
console.log(buscarElemento(arreglo, 3)); // true
console.log(buscarElemento(arreglo, 5));

//#endregion

//#region Declaración de una variable: Crea una variable llamada edad y asígnale el valor 25.
let edad = 25;
console.log(edad);
//#endregion

//#region Asignación de una constante: Declara una constante llamada PI y asígnale el valor 3.1416.
const PI = 3.1416;
console.log(PI);
//#endregion

//#region Suma de enteros: Declara dos variables a y b, asígnales los valores 5 y 10, respectivamente, y muestra el resultado de su suma.

let a = 5;
let b = 10;

let resultadoSuma = a + b;
console.log(resultadoSuma);

//#endregion

//#region Concatenación de cadenas: Declara dos variables nombre y apellido, asignales los valores "Juan" y "Pérez", y muestra su concatenación.

let nombr = "francisco";
let lastname = "bravo";
console.log(nombr + " " + lastname);

//#endregion

//#region Operación con flotantes: Declara dos variables x y y como números decimales (float) y muestra el resultado de su división.
let x = 1.0;
let y = 5.0;
let resultadoDivision = x / y;
console.log(resultadoDivision);
//#endregion

//#region Cambio de valor de variable: Declara una variable temperatura con un valor inicial de 20, luego cambia su valor a 25.
let temperatura = 20;
temperatura = 25;

console.log(temperatura);
//#endregion

//#region Operaciones con booleanos: Declara dos variables booleanas isStudent y isEmployee y asignales los valores true y false, respectivamente. Muestra el resultado de isStudent && isEmployee.
let isStudent = true;
let isEmployee = false;

console.log(isStudent);
console.log(isEmployee);
//#endregion

//#region Verificación de paridad: Declara una variable numero y asignale un valor cualquiera. Verifica si es par o impar usando el operador módulo.

let numbers = 88;
if (numbers % 2 === 0) {
  console.log("es par");
} else {
  console.log("no es par");
}
//#endregion

//#region Longitud de una cadena: Declara una variable frase y asignale un valor de tu elección. Muestra la longitud de esa cadena usando un método adecuado.
let frase = "anita lava la loza";
console.log(frase.length);
//#endregion

//#region Condicional con booleanos: Declara una variable isRaining con el valor true. Usa un if para mostrar "Llevar paraguas" si isRaining es verdadero.

let IsRaining = false;
if (IsRaining) {
  console.log("llevar paragua");
} else {
  console.log("no va a lluver estara bonito");
}
//#endregion

//#region  Multiplicación de enteros: Declara dos variables a y b con los valores 7 y 3, respectivamente. Muestra el resultado de su multiplicación.

let a1 = 7;
let a2 = 3;
let resultadoMultiplicacion = a1 * a2;
console.log(resultadoMultiplicacion);
//#endregion

//#region Suma de flotantes: Declara dos variables x y y con valores decimales y muestra la suma de ambas.
let 
//#endregion
