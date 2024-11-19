document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const tablaUsuarios = document.getElementById('tabla-usuarios').getElementsByTagName('tbody')[0];
  const formulario = document.getElementById('crear-usuario');
  const nombreInput = document.getElementById('nombre');
  const correoInput = document.getElementById('correo');

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
        botonEliminar.addEventListener('click', () => eliminarUsuario(usuario.id));

        // Añadir el botón a la celda de acciones
        celdaAcciones.appendChild(botonEliminar);
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
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  // Cargar los usuarios al inicio
  obtenerUsuarios();

  // Escuchar el envío del formulario
  formulario.addEventListener('submit', crearUsuario);
});
