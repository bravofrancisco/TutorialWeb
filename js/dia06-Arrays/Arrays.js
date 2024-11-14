let number = [1, 2, 3, 4, 5];
console.log(number);

//acceder un elemento del arreglo por su indice

let fruits = ["manzana", "platano", "pina", "durazno"];

console.log(fruits[1]);

//modificar un elemento del arreglo

//Objetivo: Cambiar el valor del segundo elemento del arreglo a otro valor y luego imprimir el arreglo.

let colors = ["rojo", "verde", "azul"];
colors[0] = "amarillo";
console.log(colors);

//obtener la longitud de un arreglo
let animals = ["gato", "perro", "elefante", "tortuga"];
console.log(animals.length);

//recorrer un arreglo con un bucle for
console.log("*recorriendo un arreglo*");

let numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/**
 * Agregar un elemento al final del arreglo
 * Objetivo: Usar el método .push() para agregar un elemento al final de un arreglo.
 */
let animals2 = ["gato", "perro"];
animals2.push("iguana");
console.log(animals2);

/**
 * Eliminar el último elemento de un arreglo
Objetivo: Usar el método .pop() para eliminar el último elemento de un arreglo.
 */
let fruits2 = ["manzana", "naranja", "arandano", "kiwi"];
console.log("antes de eliminar", fruits2);
fruits2.pop();
console.log(fruits2);

/**
 * Agregar un elemento al principio del arreglo
Objetivo: Usar el método .unshift() para agregar un elemento al principio de un arreglo.
 */
let components = ["mouse", "keyboard", "monitor"];
components.unshift("pendrive");
console.log(components);

/**
 *  Eliminar el primer elemento de un arreglo
Objetivo: Usar el método .shift() para eliminar el primer elemento de un arreglo
 */
let cities = ["santiago", "concepcion", "temuco"];
cities.shift();
console.log(cities);

/**
 * Buscar un elemento en un arreglo
Objetivo: Usar el método .indexOf() para buscar el índice de un elemento en un arreglo. Si no se encuentra, debe devolver -1
 */
let colors3 = ["rojo", "verde", "azul"];
let indice = colors3.indexOf("azul");
console.log(indice);

/**
 * Verificar si un arreglo contiene un elemento
Objetivo: Usar el método .includes() para verificar si un arreglo contiene un valor específico.
 */

let fruits4 = ["manzana", "banana", "cereza"];
console.log(fruits4.includes("banana"));
console.log(fruits4.includes("kiwi"));

/**
 * Unir dos arreglos
Objetivo: Usar el método .concat() para unir dos arreglos.
 */
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log(combined);

/**
 * 13. Copiar un arreglo
Objetivo: Usar el método .slice() para hacer una copia superficial de un arreglo.
 */
let arr = [1, 2, 3, 4];
let copy = arr.slice();
console.log(copy);

/**
 * 14. Invertir un arreglo
Objetivo: Usar el método .reverse() para invertir el orden de los elementos de un arreglo.
 */

let array = [1, 2, 3, 4];
array.reverse();
console.log(array);

/**
 * 15. Filtrar los elementos de un arreglo
Objetivo: Usar el método .filter() para filtrar todos los números mayores que 10 de un arreglo.
 */
let numbersFilter = [5, 12, 8, 130, 44];
let filtered = numbersFilter.filter((num) => num > 101);
if (filtered.length === 0) {
  console.log("No se encontraron valores");
} else {
  console.log(filtered);
}

/**
 * 16. Transformar los elementos de un arreglo
Objetivo: Usar el método .map() para multiplicar cada elemento del arreglo por 2.
 */
let numbersMap = [1, 2, 3, 4];
let multiplicarnumbersMap = numbersMap.map((num) => num * 2);
console.log(multiplicarnumbersMap);

/**
 * 17. Sumar todos los elementos de un arreglo
Objetivo: Usar el método .reduce() para sumar todos los elementos de un arreglo.
 */
let numbers3 = [1, 2, 3, 4];
let max = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(max);

//Estudiar Metodo Reduce

/**
 * 19. Convertir un arreglo en una cadena
Objetivo: Usar el método .join() para convertir los elementos de un arreglo en una cadena separada por comas.
 */
let arr3 = ["rojo", "verde", "azul"];
let str = arr3.join(",");
console.log(str);

/**
 * 20. Verificar si un arreglo está vacío
Objetivo: Usar una condición para verificar si un arreglo está vacío.
 */
let ArregloVacio = [];
if (ArregloVacio.length === 0) {
  console.log("El arreglo esta vacio");
} else {
  console.log("El arreglo tiene valor");
}

/**
 * 1. Encontrar el valor más pequeño en un arreglo (sin usar Math.min)
Objetivo: Escribe una función que reciba un arreglo de números y devuelva el número más pequeño, sin utilizar Math.min().

Pistas: Usa un bucle para recorrer el arreglo y compara cada valor.
 */
console.log("****practicando arreglo****");

function findMinValue(ar) {
  let min = ar[0];
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] < min) {
      min = ar[i];
    }
  }
  return min;
}
console.log("El valor minimo:" + findMinValue([1, 12, 3, 4, 56, 6]));

/**
 * 2. Multiplicar todos los elementos de un arreglo
Objetivo: Escribe una función que multiplique todos los números de un arreglo y devuelva el resultado.

Pistas: Puedes usar .reduce() para multiplicar los elementos del arreglo.
 */
function multiplicarArray(armultiplicacion) {
  return armultiplicacion.reduce((acc, num) => acc * num, 2);
}
console.log(multiplicarArray([2]));

/**
 * 3. Encontrar el segundo valor más grande en un arreglo
Objetivo: Escribe una función que reciba un arreglo y devuelva el segundo valor más grande (sin usar .sort()).

Pistas: Itera por el arreglo para encontrar el valor más grande y el segundo más grande.
 */
function secondLargest(arrSecond) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arrSecond) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([1, 2, 3, 5, 3])); // Imprime 3

/**
 * 4. Crear un arreglo de números del 1 al 100
Objetivo: Escribe una función que cree un arreglo con los números del 1 al 100 (sin usar un arreglo predefinido).
 */

function createArray() {
  let creaArray = [];
  for (let i = 1; i <=100; i++) {
    creaArray.push(i);
  }
  return creaArray;
}
console.log(createArray());

/**
 * 
 */
