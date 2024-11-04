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
function invertirString(str){
    return
}
const inverString = invertirString('hola');
console.log(inverString);

//#endregion