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