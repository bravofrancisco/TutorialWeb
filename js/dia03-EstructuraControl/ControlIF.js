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
 */
let ageVotate = parseInt(prompt("¿Cual es tu edad?"));
if (ageVotate >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}

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
