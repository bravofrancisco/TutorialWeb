// // si el codigo sigue siendo true se sigue ejecutando
// let contadorPrincipal = 0;
// while (contadorPrincipal < 5) {
//   console.log("el contador es" + contadorPrincipal);
//   contadorPrincipal++;
// }
// console.log("el ciclo a terminado");

// let suma = 0;
// let contador = 0;

// while (contador < 5) {
//   let numero = parseInt(prompt("Introduce un número:"));
//   suma += numero; // Acumulamos la suma
//   contador++; // Incrementamos el contador
// }

// console.log("La suma total de los números es: " + suma);

// /**
//  *
// 1. Contador de números positivos
// Problema: Escribe un programa que pida al usuario que ingrese números y los acumule en una suma total. El programa debe seguir pidiendo números hasta que el usuario ingrese un número negativo. Al final, el programa debe mostrar la suma de los números positivos ingresados.

// Pistas:

// Usa un ciclo while para pedir números hasta que el usuario ingrese un número negativo.
// Asegúrate de no sumar los números negativos.
//  *
//  */
// let sumaTotal = 0;

// while (true) {
//     // Pedimos al usuario que ingrese un número
//     let numero = parseFloat(prompt("Ingresa un número (un número negativo para terminar):"));

//     // Si el número es negativo, terminamos el bucle
//     if (numero < 0) {
//         break;
//     }

//     // Si el número es positivo, lo sumamos a la suma total
//     sumaTotal += numero;
// }

// // Mostramos el resultado final
// alert("La suma total de los números positivos ingresados es: " + sumaTotal);

/**
 * 4. Número más grande
Problema: Escribe un programa que pida al usuario ingresar números y determine el número más grande ingresado. El ciclo debe continuar hasta que el usuario ingrese un 0. Al final, debe mostrar el número más grande ingresado.

Pistas:

Mantén una variable para almacenar el número más grande.
Si el número ingresado es mayor que el más grande, actualiza la variable.
 */
let numeroMayor = -Infinity;  // Iniciamos con un valor muy pequeño

while (true) {
    // Pedimos al usuario que ingrese un número
    let numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));

    // Si el número es 0, terminamos el bucle
    if (numero === 0) {
        break;
    }
    
    // Si el número ingresado es mayor que el número mayor actual, lo actualizamos
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
}

// Mostramos el número más grande al final
alert("El número más grande ingresado es: " + numeroMayor);