//Accediendo al elemento con el ID
let titulo = document.getElementById("titulo");

//accediendo al boton con el id btn-cambiar
let boton = document.getElementById("btn-cambiar");

//cambiando el texto del titulo cuando se hace click en el boton

boton.addEventListener("click", function () {
  titulo.textContent = "¡Título cambiado!";
});
