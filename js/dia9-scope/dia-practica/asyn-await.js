/**
 * Ejercicio 1: Obtener la información de un post por ID
Crea una función que obtenga la información de un post de una API como https://jsonplaceholder.typicode.com/posts/{id}, donde {id} es un parámetro de la función. Si el ID no es válido (por ejemplo, si no existe en la API), debes mostrar un mensaje de error.
 */
async function ObtenerPost(id) {
  try {
    const peticiones = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!peticiones.ok) {
      throw new Error(`Post con ID ${id} no encontrado`);
    }
    const respuesta2 = await peticiones.json();
    console.log(respuesta2);
  } catch (error) {
    console.log("Error", error.message);
  }
}
//ObtenerPost(3);

/**
 * Ejercicio 2: Mostrar varias imágenes de perros aleatorias en paralelo
Usa Promise.all() para obtener varias imágenes de perros aleatorias desde la API https://dog.ceo/api/breeds/image/random. Muestra 5 imágenes de perros en la consola al mismo tiempo.
 */
async function MostrarVariasImagenes() {
  try {
    const peticiones2 = await Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ]);
    const respuesta2 = await Promise.all(peticiones2.map((res) => res.json()));
    //Mostramos las RLS de las 5 imagenes
    respuesta2.forEach((dato, index) => {
      console.log(`Imagen ${index + 1}: ${dato.message}`);
    });
  } catch (error) {
    console.error("Error", error.message);
  }
}
//MostrarVariasImagenes();
/**
 * Ejercicio 3: Obtener la información de varios usuarios
Usa la API https://jsonplaceholder.typicode.com/users. Crea una función que reciba un array de IDs de usuarios y obtenga la información de esos usuarios usando Promise.all().
 */
async function VariosUsuarios(ids) {
  try {
    // Hacemos las solicitudes en paralelo para cada ID
    const peticiones3 = ids.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    );

    // Esperamos a que todas las solicitudes se resuelvan
    const respuestas = await Promise.all(peticiones3);

    // Convertimos las respuestas a JSON
    const usuarios = await Promise.all(respuestas.map((res) => res.json()));

    // Mostramos la información de cada usuario
    usuarios.forEach((usuario, index) => {
      console.log(`Usuario ${index + 1}:`);
      console.log(`Nombre: ${usuario.name}`);
      console.log(`Email: ${usuario.email}`);
      console.log(`Ciudad: ${usuario.address.city}`);
      console.log("--------------------------");
    });
  } catch (error) {
    console.error("Error", error.message);
  }
}

// Llamamos a la función con un array de IDs de usuarios
//VariosUsuarios([1, 2, 3, 4, 5]);

/**
 * Ejercicio 4: Mostrar los comentarios de un post
Usa la API https://jsonplaceholder.typicode.com/posts/{id}/comments para obtener todos los comentarios de un post específico. La función debe recibir el ID del post y mostrar los comentarios en consola. Maneja correctamente los errores.
 */
async function Comentary(id) {
  try {
    const peticiones4 = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    if (!peticiones4.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const respuesta4 = await peticiones4.json();

    respuesta4.forEach((comment) => {
      console.log(`Nombre: ${comment.name}`);
      console.log(`Email: ${comment.email}`);
      console.log(`Comentario: ${comment.body}`);
      console.log("------------------------");
    });
  } catch (error) {
    console.error("Error", error.message);
  }
}
Comentary(1);
