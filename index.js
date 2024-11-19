// Importar dependencias
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Crear una instancia de Express
const app = express();

// Configurar el middleware
app.use(bodyParser.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',         // Cambia esto si es necesario
    user: 'root',              // Tu usuario de MySQL
    password: '',              // Tu contraseña de MySQL
    database: 'users'    // Nombre de la base de datos
});

// Verificar la conexión
db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos: ', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Rutas de la API



// Obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            res.status(500).send('Error al obtener los usuarios');
            return;
        }
        res.json(results);
    });
});

// Crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    const { nombre, correo_electronico } = req.body;

    if (!nombre || !correo_electronico) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const query = 'INSERT INTO usuarios (nombre, correo_electronico) VALUES (?, ?)';
    db.query(query, [nombre, correo_electronico], (err, results) => {
        if (err) {
            res.status(500).send('Error al crear el usuario');
            return;
        }
        res.status(201).json({ id: results.insertId, nombre, correo_electronico });
    });
});

// Obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error al obtener el usuario');
            return;
        }
        if (results.length === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.json(results[0]);
    });
});

// Actualizar un usuario
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, correo_electronico } = req.body;

    if (!nombre || !correo_electronico) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const query = 'UPDATE usuarios SET nombre = ?, correo_electronico = ? WHERE id = ?';
    db.query(query, [nombre, correo_electronico, id], (err, results) => {
        if (err) {
            res.status(500).send('Error al actualizar el usuario');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.status(200).json({ id, nombre, correo_electronico });
    });
});

// Eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send('Error al eliminar el usuario');
            return;
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.status(200).send('Usuario eliminado');
    });
});

// Configurar el puerto y lanzar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
