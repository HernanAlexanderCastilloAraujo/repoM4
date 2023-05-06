const {User} = require('../db')


const createUser  = async (userData) => {
    // la validación no debe ir en un controlador como este, ya que inserta en la base de datos, por eso, se hace dicha validación con un midleware en el router, para que se ejecute el controlador solo si la validación es correcta
    const {name, email, phone, gender, password} = userData
 const newUser = await User.create({name, email, phone, gender, password})

    return newUser;
}

module.exports = createUser