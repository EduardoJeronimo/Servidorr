const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config/config.db");

const getAlumno = (request, response) => {
    connection.query ("SELECT * FROM alumno",
    (error, results) => {
        if(error)
            throw error;
        response.status (200).json(results);
    });
};

//ruta
app.route("/alumnos").get(getAlumno);

module.exports = app;

const postAlumno = (request, response) => {
    const {id, fk_carrera, nombre, apellido, edad, email, estado} = request.body;
    connection.query ("INSERT INTO alumno (id, fk_carrera, nombre, apellido, edad, email, estado) VALUES (?,?,?,?,?,?,?)",
    [id, fk_carrera, nombre, apellido, edad, email, estado],
    (error, results) => {
        if(error)
            throw error;
        response.status (201).json({"Item añadido correctamente " : results.affectedRows});
    });
};
app.route("/alumnos").post(postAlumno);