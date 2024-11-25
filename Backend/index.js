// Importar dependencias
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

// Crear una instancia de Express
const app = express();

// Configurar el middleware
app.use(bodyParser.json()); // Para parsear el cuerpo de las solicitudes en formato JSON
app.use(helmet()); // Protección de cabeceras HTTP
app.use(cors()); // Permitir solicitudes CORS

// Configurar la conexión a la base de datos
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
  connectionLimit: 10, // Limitar el número de conexiones concurrentes
});

// Verificar la conexión
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error de conexión a la base de datos: ", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
  connection.release();
});

// Rutas de la API

// Obtener todos los usuarios
app.get("/usuarios", (req, res) => {
  db.promise()
    .query("SELECT * FROM usuarios")
    .then(([results]) => res.json(results))
    .catch((err) => res.status(500).send("Error al obtener los usuarios"));
});

// Crear un nuevo usuario
app.post(
  "/usuarios",
  [
    body("nombre").isString().notEmpty().withMessage("Nombre es requerido"),
    body("correo_electronico")
      .isEmail()
      .withMessage("Correo electrónico no válido"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, correo_electronico } = req.body;
    const query =
      "INSERT INTO usuarios (nombre, correo_electronico) VALUES (?, ?)";
    db.query(query, [nombre, correo_electronico], (err, results) => {
      if (err) {
        return res.status(500).send("Error al crear el usuario");
      }
      res
        .status(201)
        .json({ id: results.insertId, nombre, correo_electronico });
    });
  }
);

// Obtener un usuario por ID
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.promise()
    .query("SELECT * FROM usuarios WHERE id = ?", [id])
    .then(([results]) => {
      if (results.length === 0) {
        return res.status(404).send("Usuario no encontrado");
      }
      res.json(results[0]);
    })
    .catch((err) => res.status(500).send("Error al obtener el usuario"));
});

// Actualizar un usuario
app.put(
  "/usuarios/:id",
  [
    body("nombre").isString().notEmpty().withMessage("Nombre es requerido"),
    body("correo_electronico")
      .isEmail()
      .withMessage("Correo electrónico no válido"),
  ],
  (req, res) => {
    const { id } = req.params;
    const { nombre, correo_electronico } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const query =
      "UPDATE usuarios SET nombre = ?, correo_electronico = ? WHERE id = ?";
    db.query(query, [nombre, correo_electronico, id], (err, results) => {
      if (err) {
        return res.status(500).send("Error al actualizar el usuario");
      }
      if (results.affectedRows === 0) {
        return res.status(404).send("Usuario no encontrado");
      }
      res.status(200).json({ id, nombre, correo_electronico });
    });
  }
);

// Eliminar un usuario
app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM usuarios WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).send("Error al eliminar el usuario");
    }
    if (results.affectedRows === 0) {
      return res.status(404).send("Usuario no encontrado");
    }
    res.status(200).send("Usuario eliminado");
  });
});

// Configurar el puerto y lanzar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});