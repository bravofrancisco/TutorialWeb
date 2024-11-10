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
console.log('xxxx');

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
