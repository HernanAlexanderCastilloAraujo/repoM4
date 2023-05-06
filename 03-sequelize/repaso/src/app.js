const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/router");

const app = express();

// const myMiddleware = (req, res, next) => {
//   console.log("this is my Middleware");
//   next();
// };

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// app.use(myMiddleware);

app.use("/", router);
app.use("*", (req,res) => {
    res.status(404).json({error: "Not Found"})
} )
  
module.exports = app;

//* ROUTERS: USERS Y POST

//* USERS
// => GET /users => devuelve todos los usuarios, salvo que reciba un query "name", en cuyo caso devuelve los usuarios que coincidan con el nombre
// => GET /users/:id => devuelve el usuario con el id pasado por parámetro
// => GET /users/phone => devuelve los usuarios que tienen el teléfono registrado.
// => POST /users => crea un usuario con los datos recibidos en el body
// => PUT /users/:id => actualiza los datos del usuario con el id pasado por parámetro, los datos a actualizar vienen en el body
// => DELETE /users/:id => elimina el usuario con el id pasado por parámetro

//* POSTS
