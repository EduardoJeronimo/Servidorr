const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
//app.use(express.unlencoded({extend: true}));

//cargamos el archivo de rutas
app.use(require('./routes/alumnos.js'));
app.use(require('./routes/materia.js'));
app.use(require('./routes/alumnosINNERJOIN.js'));
app.use(require('./routes/carreras.js'))
   
const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log('El servidor escucha en el puerto ' + PORT)
});

module.exports = app;


// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'db_universidad'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error de conexión: ', err);
//     return;
//   }

//   console.log('Conectado a la base de datos!');
// });



//    connection.query('SELECT * FROM alumno   ', (err, rows) => {
//      if (err) {
//        console.error('Error al realizar la consulta: ', err);
//        return;
//      }

//      console.log('Resultados: ', rows);
//    });



// const express = require("express");
// const app = express();

// app.get('/', function(req, res){
//     res.json(
//         {
//         "msg": "Servidor corriendo en GET"
//         })
// });

// app.post('/post', function(req, res){
//     res.json(
//         {
//         "msg": "Servidor corriendo en POST",
//         })
// });

// app.get('/tercera', function(req, res){
//     res.json(
//         {
//         "Nombre": "Diego",
//         "Apellido": "Cool",
//         "Matricula": "202200444",
//         "Carrera": "Ingenieria en software"
//         })
// });

// app.get('/cuarta', function(req, res){
//     res.json([
//         {
//             "Chicle" : "3.00"
//         },
//         {
//             "Sabrita" : "15.00"
//         },
//         {
//             "Frijol" : "30.00"
//         }
//     ])
// })

// app.get('/quinta', function(req, res){
//     res.json([
//         {
//             "GET" : " El método GET solicita una representación de un recurso específico. las peticiones que usan el método GET solo deben recuperar datos."
//         },
//         {
//             "POST" : "El método POST se utiliza para envíar una entidad a un recurso en especifico, causando a menudo un cambio en el estado o efectos secundarios en el servidor"
//         },
//         {
//             "PATCH" : "El método PATCH es utilizado para aplicar modificaciones parciales a un recurso"
//         },
//         {
//             "DELTE" : "El método DELETE borra un recurso en específico "
//         }
//     ])
// })



// const port = 8888;
// app.listen(port,() =>{
//     console.log('El servidor escucha en el puerto ' + port)
// });

