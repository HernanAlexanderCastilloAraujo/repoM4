console.log("Se levanta el servidor");
const app = require("./src/app");
const { database } = require("./src/db");
const PORT = 3001;

// force: true elimina todas las dablas de la bdd, y vuelve a crear en base a los modelos
// alter: true modifica las tablas de la bdd, en base a los modelos
database.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
})
.catch(err => {
    console.log(err.message);
});
