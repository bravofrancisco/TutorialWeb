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
let clasificacionExamen = 5;  // Cambia este valor para probar otras calificaciones

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

