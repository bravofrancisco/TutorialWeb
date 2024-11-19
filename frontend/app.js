document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const tablaUsuarios = document.getElementById("tabla-usuarios").getElementsByTagName("tbody")[0];
  const formulario = document.getElementById("formulario-usuario");
  const nombreInput = document.getElementById("nombre");
  const correoInput = document.getElementById("correo");
  const usuarioIdInput = document.getElementById("usuario-id");
  const tituloFormulario = document.getElementById("titulo-formulario");

  // Obtener token de autenticación del almacenamiento local
  const token = localStorage.getItem("auth_token");

  // Validación de correo electrónico
  const validarCorreo = (correo) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo);

  // Validación de nombre (mínimo 3 caracteres)
  const validarNombre = (nombre) => nombre.length >= 3;

  // Función para hacer peticiones HTTP genéricas
  const hacerPeticion = async (url, metodo, datos = null) => {
    const opciones = {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (datos) {
      opciones.body = JSON.stringify(datos);
    }

    try {
      const response = await fetch(url, opciones);

      // Verificar si la respuesta es exitosa (status 2xx)
      if (!response.ok) {
        try {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error en la petición');
        } catch (error) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
      }

      // Intentar leer la respuesta como JSON
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
      });
    }
  };

  // Función para obtener los usuarios
  const obtenerUsuarios = async () => {
    const usuarios = await hacerPeticion("http://localhost:3000/usuarios", "GET");
    if (!usuarios) return;
    tablaUsuarios.innerHTML = ""; // Limpiar la tabla antes de llenarla

    usuarios.forEach((usuario) => {
      const fila = tablaUsuarios.insertRow();
      fila.insertCell(0).textContent = usuario.id;
      fila.insertCell(1).textContent = usuario.nombre;
      fila.insertCell(2).textContent = usuario.correo_electronico;

      const celdaAcciones = fila.insertCell(3);
      const botonEliminar = crearBoton("Eliminar", "eliminar-btn", () => confirmarEliminacion(usuario.id));
      const botonActualizar = crearBoton("Actualizar", "actualizar-btn", () => cargarDatosUsuario(usuario));

      celdaAcciones.appendChild(botonEliminar);
      celdaAcciones.appendChild(botonActualizar);
    });
  };

  // Función para crear un botón genérico
  const crearBoton = (texto, clase, evento) => {
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.classList.add(clase);
    boton.addEventListener("click", evento);
    return boton;
  };

  // Función para crear un nuevo usuario
  const crearUsuario = async (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();

    if (!nombre || !correo) {
      return Swal.fire("Error", "Todos los campos son obligatorios.", "error");
    }

    if (!validarCorreo(correo)) {
      return Swal.fire("Error", "El correo electrónico no es válido.", "error");
    }

    if (!validarNombre(nombre)) {
      return Swal.fire("Error", "El nombre debe tener al menos 3 caracteres.", "error");
    }

    const nuevoUsuario = { nombre, correo_electronico: correo };
    await hacerPeticion("http://localhost:3000/usuarios", "POST", nuevoUsuario);
    formulario.reset();
    obtenerUsuarios();
    Swal.fire("Creado!", "El usuario ha sido creado.", "success");
  };

  // Función para confirmar la eliminación con SweetAlert2
  const confirmarEliminacion = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(id);
      }
    });
  };

  // Función para eliminar un usuario
  const eliminarUsuario = async (id) => {
    const mensaje = await hacerPeticion(`http://localhost:3000/usuarios/${id}`, "DELETE");
    if (mensaje) {
      obtenerUsuarios();
      Swal.fire("Eliminado!", mensaje, "success");
    }
  };

  // Función para cargar los datos del usuario en el formulario para editar
  const cargarDatosUsuario = (usuario) => {
    usuarioIdInput.value = usuario.id;
    nombreInput.value = usuario.nombre;
    correoInput.value = usuario.correo_electronico;
    tituloFormulario.textContent = "Actualizar Usuario"; // Cambiar el título del formulario
    formulario.querySelector("button").textContent = "Actualizar Usuario"; // Cambiar texto del botón
  };

  // Función para actualizar un usuario
  const actualizarUsuario = async (e) => {
    e.preventDefault();

    const id = usuarioIdInput.value;
    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();

    if (!id || !nombre || !correo) {
      return Swal.fire("Error", "Todos los campos son obligatorios.", "error");
    }

    if (!validarCorreo(correo)) {
      return Swal.fire("Error", "El correo electrónico no es válido.", "error");
    }

    if (!validarNombre(nombre)) {
      return Swal.fire("Error", "El nombre debe tener al menos 3 caracteres.", "error");
    }

    const usuarioActualizado = { nombre, correo_electronico: correo };
    const respuesta = await hacerPeticion(`http://localhost:3000/usuarios/${id}`, "PUT", usuarioActualizado);

    if (respuesta) {
      // Limpiar el formulario
      formulario.reset(); // Esto limpia los campos de nombre y correo
      usuarioIdInput.value = ""; // Asegúrate de limpiar también el campo oculto del ID
      tituloFormulario.textContent = "Crear Usuario"; // Volver al título original
      formulario.querySelector("button").textContent = "Crear Usuario"; // Volver al texto original del botón
      obtenerUsuarios(); // Recargar la lista de usuarios
      Swal.fire("Actualizado!", "El usuario ha sido actualizado.", "success");
    }
  };

  // Cargar los usuarios al inicio
  obtenerUsuarios();

  // Escuchar el envío del formulario para crear o actualizar
  formulario.addEventListener("submit", (e) => {
    if (usuarioIdInput.value) {
      actualizarUsuario(e); // Si hay ID, actualizar usuario
    } else {
      crearUsuario(e); // Si no hay ID, crear nuevo usuario
    }
  });
});
