//#region Ejercicio 1: Sumar los números de un array Enunciado: Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.

// function sumarArray(arr) {
//   let contador = 0;
//   for (let i = 0; i < arr.length; i++) {
//     contador += arr[i];
//   }
//   return contador;
// }
// console.log(sumarArray([1, 2, 3, 4, 5]));

//#endregion

//#region Ejercicio 2: Encontrar el menor número en un arrayEnunciado: Crea una función que reciba un array de números y devuelva el número más pequeño.

// function minimoArray(arr) {
//   let minimo = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minimo) {
//       minimo = arr[i];
//     }
//   }
//   return minimo;
// }
// console.log(minimoArray([-1, 1, 2, 3, 4, 5]));

//#endregion

/**
 * 1. Suma de dos números
Crea una función que reciba dos números y retorne su suma.
 */

function Sumar(numero1, numero2) {
  return numero1 + numero2;
}
console.log("la suma total es" + Sumar(1, 2));

/**
 * 2. Verificar si un número es par o impar
Crea una función que reciba un número y determine si es par o impar. La función debe devolver "par" o "impar".
 */

function PareImpar(n1) {
  if (n1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(PareImpar(2));

/**
 * Calcular factorial
 *
 */
function factorial(n) {
  let resultado = 1;
  for (let i = 0; i <= n; i++) {
    return (resultado *= i);
  }
  return resultado;
}
console.log(factorial(5));

/**
 * Arreglo
 */
function contarelemento(arreglo, valor) {
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === valor) {
      contador++;
    }
  }
  return contador;
}
console.log(contarelemento([1, 2, 3, 4, 2, 2]));

/**
 * Funcion invertir una cadena
 */
function InvertirCadena(str) {
  //paso .1
  let separarcadena = str.split("");
  //paso.2
  let invertirString = separarcadena.reverse();
  //paso 3.
  let unirArreglo = invertirString.join("");

  return unirArreglo;
}
console.log(InvertirCadena("hola"));

/**
 * function Palindromo
 */
function esPalindromo(palabra) {
  const palabraInvertida = palabra.split("").reverse().join("");
  return palabra === palabraInvertida;
}
console.log(esPalindromo("radar"));
console.log(esPalindromo("hola"));

/**
 * 8. Encontrar el número mayor en un arreglo
Crea una función que reciba un arreglo de números y retorne el número mayor.
 */
function EncontrarMayor(areglo) {
  return Math.max(...areglo);
}
console.log(EncontrarMayor([5, 6, 12, 7, 9]));
