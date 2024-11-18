//Accediendo al elemento con el ID
let titulo = document.getElementById("titulo");

//accediendo al boton con el id btn-cambiar
let boton = document.getElementById("btn-cambiar");

//cambiando el texto del titulo cuando se hace click en el boton

boton.addEventListener("click", function () {
  titulo.textContent = "¡Título cambiado!";
});

/**
 * Manipulacion los estilos css
 * puedes cambiar los estilos de los
 * elementos directamente desde javascript usando la propiedad syle
 */
let cuadro = document.getElementById("cuadro");
let boton2 = document.getElementById("btn-cambiar-color");

boton2.addEventListener("click", () => {
  // Cambiar color de fondo
  cuadro.style.backgroundColor = "blue";

  // Cambiar tamaño del cuadro
  cuadro.style.width = "200px";
  cuadro.style.height = "200px";
});

/**
 * Creando nuevos elementos
 * Puedes crear nuevos elementos HTML y agregarles a la página de manera dinámica.
 */
let lista = document.getElementById("lista");
let boton3 = document.getElementById("btn-agregar");

boton3.addEventListener("click", () => {
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Elemento nuevo";

  //agregar el nuevo li al final de la lista
  lista.appendChild(nuevoElemento);
});

/**
 * 5. Eliminando elementos
Puedes eliminar elementos del DOM utilizando el método removeChild().
 */
let = boton4 = document.getElementById("btn-eliminar");

boton4.addEventListener("click", () => {
  let primerElementDelete = lista.firstElementChild; //obteniene el primer elemtno de la lista
  lista.removeChild(primerElementDelete);
  console.log(lista);
});

/**
 * Ejercicio
 *
 */
let botonCabiambiarColor = document.getElementById("btn-cambiar-fondo");
const body = document.body;

function cambiarFondo() {
  const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
  body.style.backgroundColor = colorAleatorio;
}
botonCabiambiarColor.addEventListener("click", cambiarFondo);
