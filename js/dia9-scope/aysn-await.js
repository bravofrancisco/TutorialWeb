/**
 * Ejercicio 1: Obtener una imagen aleatoria de perro
Crea una función llamada obtenerImagenPerro que obtenga una imagen aleatoria de perro desde la API y la muestre en consola.
 * 
 */
async function getImagenDog() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const respuesta = await response.json();
    console.log(respuesta);
  } catch (error) {
    console.error("Haz tenido un error", error);
  }
}
getImagenDog();

/**
 * Promise all
 */
async function getImagenDog() {
  try {
    // Creamos un array de promesas (obteniendo varias imágenes)
    const peticiones = [
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ];

    // Usamos Promise.all para esperar que todas las solicitudes se resuelvan
    const respuestas = await Promise.all(peticiones);

    // Convertimos cada respuesta en JSON
    const datos = await Promise.all(respuestas.map((res) => res.json()));

    // Imprimimos los resultados
    console.log(datos);
  } catch (error) {
    console.error("Haz tenido un error", error);
  }
}

getImagenDog();

/**
 * Ejercicio 3: Obtener razas de perros
Crea una función llamada obtenerRazasPerros que obtenga todas las razas de perros disponibles en la API y las muestre en consola.
 */
async function obtenerRazasPerrosx() {
  try {
    const peticion = await fetch("https://dog.ceo/api/breeds/list/all");

    const respuesta = await peticion.json();

    //acceddemos ala propiedad message que contiene las razas
    const razas = respuesta.message;

    // Imprimimos todas las razas de perros en consola
    console.log("Razas de perros:", razas);

    // Si quieres mostrar solo las razas en un formato más legible:
    for (const raza in razas) {
      console.log(raza);
    }
  } catch (error) {
    console.error("error en la peticion", error);
  }
}
obtenerRazasPerrosx();
