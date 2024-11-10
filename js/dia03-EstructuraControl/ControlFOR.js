/**
 * Imprimir los números del 1 al 10.
 */
for (let i = 1; i <= 10; i++) {
  console.log("lista de numeros es: ", i);
}
/**
 * Calcular la suma de los primeros 20 números naturales.
 */
let contador = 0;
for (let i = 1; i <= 20; i++) {
  contador += i;
}
console.log(contador);

/**
 * Mostrar los números impares del 1 al 30.
 */

for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log("pares son", i);
  }
}

/**
 * Calcular el producto de los primeros 5 números naturales.
 */

let producto = 1;
for (let i = 1; i <= 5; i++) {
  producto *= i;
}
console.log(producto);

/**
 * Imprimir los primeros 10 múltiplos de 3.
 */
for (let i = 1; i < 10; i++) {
  if (i % 3 === 0) {
    console.log("son multiplo de ", i);
  }
}

/**
 * Imprimir la tabla de multiplicar del 2 (hasta 10).
 */
console.log("++++Tabla de multiplicar++++++");

for (let i = 0; i <= 10; i++) {
  console.log("2  " + i + " " + " = " + 2 * i);
}

console.log("****verificar si es par o impar*");

/**
 *Verificar si un número dado es par o impar.
 */
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("es par:", i);
  } else if (i % 2 !== 0) {
    console.log("no par :", i);
  }
}
/**
 * Contar cuántas veces aparece el número 5 en un arreglo.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];
let contar = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 5) {
    contar++;
  }
  console.log(`El número 5 aparece ${contar} veces en el arreglo.`);
}

/**
 * Imprimir los números del 1 al 100 que sean divisibles por 7.
 */
for (let i = 0; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("numeros divisible x 7", i);
  }
}

/**
 * Imprimir la secuencia Fibonacci hasta el número 50.
 */
console.log("xxxx");

let a = 0,
  b = 1,
  siguiente;

console.log(a); // imprime 0
while (b <= 50) {
  console.log(b); // imprime el número actual en la secuencia
  siguiente = a + b; // calcula el siguiente número en la secuencia
  a = b; // actualiza a al valor de b
  b = siguiente; // actualiza b al siguiente número en la secuencia
}

/**
 * Ejercicio 1: Nivel Básico (Imprimir números del 1 al 5)
Instrucciones: Escribe un ciclo for que imprima los números del 1 al 5 en la consola
 */

for (let i = 1; i <= 5; i++) {
  console.log("los numeros.", i);
}

/**
 * Ejercicio 2: Nivel Intermedio (Suma de los números del 1 al 10)
Instrucciones: Escribe un ciclo for que calcule la suma de los números del 1 al 10 y luego imprima el resultado.
 */
console.log("*******siguiente ejercico*********");

let acumulador = 0;
for (let i = 1; i <= 10; i++) {
  acumulador += i;
}
console.log("el resultado es:", acumulador);

/**
 * Ejercicio 3: Nivel Avanzado (Contar los números pares entre 1 y 20)
Instrucciones: Escribe un ciclo for que cuente cuántos números pares hay entre 1 y 20.
 */
console.log("****ciclo for pares**");

let acum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    acum++;
  }
}
console.log("valor final", acum);

/**
 * Ejercicio 4: Nivel Experto (Media de los primeros 50 números impares)
Problema: Estás trabajando con una base de datos que te proporciona una secuencia de números y necesitas calcular la media (promedio) de los primeros 50 números impares. Debes utilizar un ciclo for para resolver este problema de manera eficiente.

Instrucciones: Escribe un ciclo for que recorra los primeros 50 números impares y calcule su media.
 */
let sumaImpares = 0;
let contadorx = 0;
for (let i = 1; contadorx < 50; i += 2) {
  sumaImpares += i;
  contadorx++;
}
let mediaImpares = sumaImpares / 50;
console.log(mediaImpares);

/**
 * Ejercicio con Descripción Completa:
Problema: Estás diseñando un sistema para gestionar las calificaciones de una clase de estudiantes. El sistema debe calcular el promedio de las calificaciones de los estudiantes y determinar cuántos estudiantes aprobaron (calificación >= 6) y cuántos reprobaron (calificación < 6). Para esto, debes utilizar un ciclo for.

Instrucciones: Supongón que tienes un arreglo de calificaciones y necesitas calcular cuántos estudiantes aprobaron, cuántos reprobaron y cuál es el promedio de las calificaciones.
 */
let calificaciones = [7, 8, 4, 6, 3, 9, 10, 5, 7, 8];
let totalEstudiantes = calificaciones.length;
let sumaCalificaciones = 0;
let estudiantesAprobados = 0;
let estudiantesReprobados = 0;
for (let i = 0; i < totalEstudiantes; i++) {
  sumaCalificaciones += calificaciones[i];
  if (calificaciones > [i] >= 6) {
    estudiantesAprobados++;
  } else {
    estudiantesReprobados++;
  }
}
let promedio = sumaCalificaciones / totalEstudiantes;
console.log("promedio", promedio);
console.log("aprobado", estudiantesAprobados);
console.log("reprobado", estudiantesReprobados);
