//#region Ejercicio 1: Sumar los números de un array Enunciado: Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.

function sumarArray(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    contador += arr[i];
  }
  return contador;
}
console.log(sumarArray([1, 2, 3, 4, 5]));

//#endregion

//#region Ejercicio 2: Encontrar el menor número en un arrayEnunciado: Crea una función que reciba un array de números y devuelva el número más pequeño.

function minimoArray(arr) {
  let minimo = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimo) {
      minimo = arr[i];
    }
  }
  return minimo;
}
console.log(minimoArray([-1, 1, 2, 3, 4, 5]));

//#endregion
