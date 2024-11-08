/**
 * Ejercicio 1: Par o impar Crea un programa que reciba un número y determine si es par o impar. Utiliza el operador % para calcular el residuo.
 */
let numero = 3;
if (numero % 2 === 0) {
  console.log("Es par");
} else {
  console.log("no es par");
}

/**
 * Ejercicio 2: Mayor que 10 Escribe un programa que reciba un número y verifique si es mayor que 10. Si es mayor que 10, imprime "Mayor que 10", de lo contrario imprime "No es mayor que 10".
 */
let numero1 = 12; // Puedes cambiar este valor por el número que quieras verificar
if (numero1 > 10) {
  console.log("Mayor que 10");
} else {
  console.log("No es mayor que 10");
}

/**
 * Ejercicio 3: Número positivo o negativo Crea un programa que reciba un número y determine si es positivo, negativo o cero. Muestra un mensaje adecuado para cada caso.
 */
let numero2 = -10;
if (numero2 === 0) {
  console.log("este es un numero cero");
} else if (numero2 > 0) {
  console.log("numero positivo");
} else {
  console.log("es numero negativo");
}

/***
 * Ejercicio 4: Edad para votar Escribe un programa que reciba la edad de una persona y verifique si puede votar (mayor o igual a 18 años). Si puede votar, imprime "Puedes votar", de lo contrario "No puedes votar".

let ageVotate = parseInt(prompt("¿Cual es tu edad?"));
if (ageVotate >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}
 */
/**
 * Ejercicio 5: Divisible por 3 Crea un programa que reciba un número y determine si es divisible por 3. Si lo es, muestra el mensaje "Divisible por 3", si no, "No es divisible por 3".
 */
let numero3 = 3;
if (numero3 % 3 === 0) {
  console.log("Divisible por 3");
} else {
  console.log("No es divisible por 3");
}

//Ejercicios Intermedios (Nivel 2)
/**
 * Ejercicio 6: Número mayor de tres Escribe un programa que reciba tres números y determine cuál es el mayor de los tres. Muestra el número mayor en la consola.
 */
let n1 = 12,
  n2 = 23,
  n3 = 9;

if (n1 > n2 && n1 > n3) {
  console.log("El número mayor es " + n1);
} else if (n2 > n1 && n2 > n3) {
  console.log("El número mayor es " + n2);
} else {
  console.log("El número mayor es " + n3);
}

/**
 * Ejercicio 7: Alquilar coche Crea un programa que reciba la edad de una persona y determine si puede alquilar un coche. La persona debe tener al menos 21 años para alquilarlo. Si puede, muestra "Puedes alquilar un coche", si no, "No puedes alquilar un coche".
 */
let AgeAlquilar = parseInt(prompt("Ingrese una edad"));
if (AgeAlquilar >= 21) {
  console.log("Puedes alquilar un coche");
} else {
  console.log("No puedes alquilar un coche");
}

/**
 * Ejercicio 8: Determinar el trimestre Escribe un programa que reciba un número de mes (1-12) y determine en qué trimestre del año cae (1-3, 4-6, 7-9, 10-12). Muestra un mensaje como: "Primer trimestre", "Segundo trimestre", etc.
 *
 */
let mes = 4; // Cambia este valor para probar con otros meses

if (mes >= 1 && mes <= 3) {
  console.log("Primer trimestre");
} else if (mes >= 4 && mes <= 6) {
  console.log("Segundo trimestre");
} else if (mes >= 7 && mes <= 9) {
  console.log("Tercer trimestre");
} else if (mes >= 10 && mes <= 12) {
  console.log("Cuarto trimestre");
} else {
  console.log("Número de mes inválido");
}

let MayorEdad = parseInt(prompt("ingrese su edad"));
if (MayorEdad >= 18) {
  console.log("mayor de edad");
} else {
  console.log("no eres mayor de edad");
}

/**
 * Ejercicio 10: Clasificar un número Crea un programa que reciba un número y clasifique si es positivo, negativo o cero. Usa el if para hacer las comparaciones y muestra el mensaje correspondiente.
 */
let clasificarNumero = parseInt(
  prompt("Ingrese un valor para ver si es positivo, negativo o cero")
);

if (clasificarNumero > 0) {
  console.log("Es positivo");
} else if (clasificarNumero < 0) {
  console.log("Es negativo");
} else {
  console.log("Es cero");
}

/**
 * Ejercicio 11: Calificación de examen Escribe un programa que reciba una calificación (número entre 0 y 100) y determine en qué rango de calificación cae:

90 a 100: "A"
80 a 89: "B"
70 a 79: "C"
60 a 69: "D"
Menor a 60: "F"

 */
let clasificacionExamen = 5; // Cambia este valor para probar otras calificaciones

if (clasificacionExamen >= 90 && clasificacionExamen <= 100) {
  console.log("A");
} else if (clasificacionExamen >= 80 && clasificacionExamen <= 89) {
  console.log("B");
} else if (clasificacionExamen >= 70 && clasificacionExamen <= 79) {
  console.log("C");
} else if (clasificacionExamen >= 60 && clasificacionExamen <= 69) {
  console.log("D");
} else {
  console.log("F");
}

/**
 * Ejercicio 12: Comparar dos números Crea un programa que reciba dos números y determine si son iguales, o si el primero es mayor o menor que el segundo. Muestra un mensaje correspondiente como: "Los números son iguales", "El primero es mayor", o "El segundo es mayor".
 */
// Solicitar la entrada del usuario con prompt y convertirla a número
let primerNumero = parseInt(prompt("Ingrese el primer número"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número"));

if (primerNumero === segundoNumero) {
  console.log("Los números son iguales");
} else if (primerNumero > segundoNumero) {
  console.log("El primer número es mayor:", primerNumero);
} else {
  console.log("El segundo número es mayor:", segundoNumero);
}

/**
 * Ejercicio 13: Verificación de año bisiesto Crea un programa que reciba un año y determine si es bisiesto. Un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400.
 */
let anoBiciesto = 1992;

if (
  (anoBiciesto % 4 === 0 && anoBiciesto % 100 !== 0) ||
  anoBiciesto % 400 === 0
) {
  console.log("Es un año bisiesto");
} else {
  console.log("No es un año bisiesto");
}

/**
 * Ejercicio 14: Verificar si un año es múltiplo de 5 y 7 Crea un programa que reciba un año y verifique si es múltiplo de 5 y 7. Si lo es, imprime "El año es múltiplo de 5 y 7", si no, "No es múltiplo de 5 y 7"
 */

let ano = 1992;
if (ano % 5 === 0 && ano % 7 === 0) {
  console.log("es multiplo de 5 y 7");
} else {
  console.log("no es multiplo de 5 y 7");
}

/**
 * Ejercicio 18: Contraseña de acceso Crea un programa que pida una contraseña y verifique si es correcta. La contraseña correcta es "secreta". Si la contraseña es correcta, imprime "Acceso concedido", si no, "Acceso denegado".
 */
let contrasena = prompt("Ingrese contrasena");
if (contrasena === "secreta") {
  console.log("tienes acceso");
} else {
  console.log("No tienes acceso");
}

/**
 * Ejercicio 19: Comparar tres números Escribe un programa que reciba tres números y determine si son todos iguales, si todos son diferentes, o si hay dos iguales. Muestra un mensaje correspondiente.
 */
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));

if (num1 === num2 && num2 === num3) {
  console.log("Todos los números son iguales");
} else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
  console.log("Todos los números son diferentes");
} else {
  console.log("Hay dos números iguales");
}

/**
 * Ejercicio 20: Verificar el rango de edad para un descuento Crea un programa que reciba la edad de una persona y determine si tiene derecho a un descuento en un cine:

Si la persona tiene menos de 12 años o más de 65 años, recibe un descuento.
Si no, no tiene descuento. Muestra un mensaje adecuado.
 */

let descuentoCine = 12;
if (descuentoCine > 12 && descuentoCine <= 65) {
  console.log("Tiene descuento");
} else {
  console.log("no tiene descuento");
}
