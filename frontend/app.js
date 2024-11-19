document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const tablaUsuarios = document.getElementById('tabla-usuarios').getElementsByTagName('tbody')[0];
  const formulario = document.getElementById('formulario-usuario');
  const nombreInput = document.getElementById('nombre');
  const correoInput = document.getElementById('correo');
  const usuarioIdInput = document.getElementById('usuario-id');
  const tituloFormulario = document.getElementById('titulo-formulario');

  // Función para obtener los usuarios
  const obtenerUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      const usuarios = await response.json();
      tablaUsuarios.innerHTML = ''; // Limpiar la tabla antes de llenarla

      usuarios.forEach(usuario => {
        const fila = tablaUsuarios.insertRow();

        // Crear celdas para ID, Nombre, Correo
        const celdaId = fila.insertCell(0);
        const celdaNombre = fila.insertCell(1);
        const celdaCorreo = fila.insertCell(2);
        const celdaAcciones = fila.insertCell(3);

        // Insertar los datos en las celdas
        celdaId.textContent = usuario.id;
        celdaNombre.textContent = usuario.nombre;
        celdaCorreo.textContent = usuario.correo_electronico;

        // Crear el botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar-btn');
        botonEliminar.addEventListener('click', () => confirmarEliminacion(usuario.id));

        // Crear el botón de actualizar
        const botonActualizar = document.createElement('button');
        botonActualizar.textContent = 'Actualizar';
        botonActualizar.classList.add('actualizar-btn');
        botonActualizar.addEventListener('click', () => cargarDatosUsuario(usuario)); // Cargar los datos en el formulario

        // Añadir los botones a la celda de acciones
        celdaAcciones.appendChild(botonEliminar);
        celdaAcciones.appendChild(botonActualizar);
      });
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  // Función para crear un nuevo usuario
  const crearUsuario = async (e) => {
    e.preventDefault();

    const nombre = nombreInput.value;
    const correo = correoInput.value;

    const nuevoUsuario = { nombre, correo_electronico: correo };

    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!response.ok) {
        throw new Error('Error al crear el usuario');
      }

      const data = await response.json();
      console.log('Usuario creado:', data);

      // Limpiar el formulario y obtener nuevamente la lista de usuarios
      formulario.reset();
      obtenerUsuarios();
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  // Función para confirmar la eliminación con SweetAlert2
  const confirmarEliminacion = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(id);
      }
    });
  };

  // Función para eliminar un usuario
  const eliminarUsuario = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el usuario');
      }

      // Obtener nuevamente la lista de usuarios tras eliminar uno
      obtenerUsuarios();

      Swal.fire('Eliminado!', 'El usuario ha sido eliminado.', 'success');
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      Swal.fire('Error!', 'Hubo un problema al eliminar el usuario.', 'error');
    }
  };

  // Función para cargar los datos del usuario en el formulario para editar
  const cargarDatosUsuario = (usuario) => {
    // Rellenar los campos con los datos del usuario
    usuarioIdInput.value = usuario.id;
    nombreInput.value = usuario.nombre;
    correoInput.value = usuario.correo_electronico;
    tituloFormulario.textContent = 'Actualizar Usuario'; // Cambiar el título del formulario
    formulario.querySelector('button').textContent = 'Actualizar Usuario'; // Cambiar texto del botón
  };

  // Función para actualizar un usuario
  const actualizarUsuario = async (e) => {
    e.preventDefault();

    const id = usuarioIdInput.value;
    const nombre = nombreInput.value;
    const correo = correoInput.value;

    const usuarioActualizado = { nombre, correo_electronico: correo };

    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioActualizado),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el usuario');
      }

      const data = await response.json();
      console.log('Usuario actualizado:', data);

      // Limpiar el formulario y obtener nuevamente la lista de usuarios
      formulario.reset();
      obtenerUsuarios();
      tituloFormulario.textContent = 'Crear Usuario'; // Volver al título original
      formulario.querySelector('button').textContent = 'Crear Usuario'; // Volver al texto original del botón

      Swal.fire('Actualizado!', 'El usuario ha sido actualizado.', 'success');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      Swal.fire('Error!', 'Hubo un problema al actualizar el usuario.', 'error');
    }
  };

  // Cargar los usuarios al inicio
  obtenerUsuarios();

  // Escuchar el envío del formulario para crear o actualizar
  formulario.addEventListener('submit', (e) => {
    if (usuarioIdInput.value) {
      actualizarUsuario(e); // Si hay ID, actualizar usuario
    } else {
      crearUsuario(e); // Si no hay ID, crear nuevo usuario
    }
  });
});
