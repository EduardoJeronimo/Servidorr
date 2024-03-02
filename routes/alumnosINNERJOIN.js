const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config/config.db");

const getAlumno = (request, response) => {
    connection.query(
        `SELECT 
            alumno.nombre AS Nombre_Alumno,
            alumno.apellido AS Apellido_Alumno,
            carrera.nombre_materia AS Carrera,
            materia.UNMA_MATERIA AS Materia,
            materia.UNMA_CUATRIMESTRE AS Cuatrimestre,
            calificaciones.UNCL_CAL AS Calificacion
        FROM 
        alumno
        INNER JOIN 
            calificaciones ON alumno.id = calificaciones.UNCL_UNAL_ID
        INNER JOIN 
            materia ON calificaciones.UNCL_UNMA_ID = materia.UNMA_ID
        INNER JOIN 
            carrera ON materia.UNMA_ID = carrera.id`,
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results);
        }  
    );
};
app.route("/alumnosINNERJOIN").get(getAlumno);

module.exports = app;
