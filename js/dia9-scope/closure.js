function crearContador() {
  let contador = 0; // Esta variable pertenece al scope de la función crearContador

  // La función interna es un closure, ya que accede a la variable 'contador'
  return function () {
    contador++; // Accede a 'contador' aunque la función 'crearContador' haya terminado
    console.log(contador);
  };
}
const contador1 = crearContador();
contador1(); // 1
contador1(); // 2
contador1(); // 3

const contador2 = crearContador();
contador2(); // 1
contador2(); // 1
contador2(); // 1

/**
 * Ejemplo de privacidad con Closures
Veamos cómo se pueden usar closures para crear variables privadas.
 */
console.log("***variable privada**");

function crearContadorPrivado() {
  let contador = 0; // Esta variable es privada

  return {
    incrementar: function () {
      contador++;
      console.log(contador);
    },
    decrementar: function () {
      contador--;
      console.log(contador);
    },
    obtenerValor: function () {
      return contador;
    },
  };
}

const contadorPrivado = crearContadorPrivado();
contadorPrivado.incrementar(); // 1
contadorPrivado.incrementar(); // 2
console.log(contadorPrivado.obtenerValor()); // 2
contadorPrivado.decrementar(); // 1
