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
