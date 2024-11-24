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
//Comentary(1);

/**
 * Ejercicio 5: Obtener datos de varias API
 * Imagina que tienes que obtener información de dos APIs diferentes. Usa async/await y Promise.all() para obtener datos de ambas APIs en paralelo. La primera API puede ser de usuarios, como https://jsonplaceholder.typicode.com/users, y la segunda API puede ser de posts de perros, como https://dog.ceo/api/breeds/image/random.
 */

async function ObtemerApiDeDos() {
  try {
    const peticiones5 = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!peticiones5.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const respuesta5 = await peticiones5.json();
    // console.log(respuesta5);

    respuesta5.forEach((usuarios) => {
      console.log(`Nombre: ${usuarios.name}`);
      console.log(`username: ${usuarios.username}`);
    });

    console.log("-----------------------");
  } catch (error) {
    console.error("error", error.message);
  }
}
//ObtemerApiDeDos();

async function ObtemerApiDeDos() {
  try {
    // Realizamos ambas solicitudes en paralelo usando Promise.all
    const [usuariosResponse, perroResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ]);

    // Verificamos que ambas respuestas sean exitosas
    if (!usuariosResponse.ok) {
      throw new Error(
        `Error en la solicitud de usuarios: ${usuariosResponse.status}`
      );
    }

    if (!perroResponse.ok) {
      throw new Error(
        `Error en la solicitud de perros: ${perroResponse.status}`
      );
    }

    // Obtenemos los datos de ambas respuestas en formato JSON
    const usuarios = await usuariosResponse.json();
    const perro = await perroResponse.json();

    // Mostrar la información de los usuarios
    console.log("Usuarios:");
    usuarios.forEach((usuario) => {
      console.log(`Nombre: ${usuario.name}`);
      console.log(`Username: ${usuario.username}`);
      console.log("-----------------------");
    });

    // Mostrar la imagen del perro
    console.log("Imagen de perro:");
    console.log(perro.message);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Llamamos a la función
//ObtemerApiDeDos();

/**
 * Usando la API https://dog.ceo/api/breeds/list/all, crea una función que reciba un nombre de raza de perro y devuelva un mensaje que indique si la raza existe o no. Si la raza existe, también muestra una imagen aleatoria de esa raza.
 */

// Función que recibe un nombre de raza y devuelve un mensaje con la existencia de la raza y una imagen aleatoria si existe
// Función que recibe un nombre de raza y devuelve un mensaje con la existencia de la raza y una imagen aleatoria si existe
async function obtenerRazaPerro(raza) {
  const urlListaRazas = "https://dog.ceo/api/breeds/list/all";

  try {
    // Realizar la petición para obtener la lista de razas
    const respuesta = await fetch(urlListaRazas);
    const datos = await respuesta.json();

    // Verificar si la raza existe en la lista de razas
    if (datos.message[raza]) {
      // Si existe, obtener una imagen aleatoria de esa raza
      const imagenRespuesta = await fetch(
        `https://dog.ceo/api/breed/${raza}/images/random`
      );
      const imagenDatos = await imagenRespuesta.json();

      console.log(`La raza "${raza}" existe.`);
      console.log(`Imagen aleatoria de la raza "${raza}":`);
      console.log(imagenDatos.message);
    } else {
      // Si la raza no existe, mostrar mensaje
      console.log(`La raza "${raza}" no existe.`);
    }
  } catch (error) {
    console.error("Error al obtener los datos de la API:", error);
  }
}

// Llamar a la función con un ejemplo de raza
//obtenerRazaPerro('bulldxog'); // Cambia el nombre de la raza aquí

/**
 * cat facts
 */
async function obtenerCat() {
    try {
      const peticiones6 = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
  
      if (!peticiones6.ok) {
        throw new Error("Error", peticiones6.status);
      }
      const respuesta6 = await peticiones6.json();
  
      const listaUsuarios = document.getElementById("listado-usuarios");
  
      // Limpiar la lista por si se vuelve a hacer la solicitud
      listaUsuarios.innerHTML = "";
  
      // Recorrer la respuesta y agregar cada usuario a la lista
      respuesta6.forEach((usuario) => {
        const li = document.createElement("li");
        li.innerHTML = `Nombre: ${usuario.name}<br> Email: ${usuario.email}`;
        listaUsuarios.appendChild(li);
      });
    } catch (error) {
      console.error("error", error.message);
    }
  }
  
  obtenerCat();
  
