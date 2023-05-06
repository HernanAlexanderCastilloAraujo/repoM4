const {User, Page} = require('../db');
const {Op} = require('sequelize');
 

const getUsers = async (name) => {
 

    if(name){
      // se utiliza el operador iLike que viene de la libreria sequelize, emulando el iLike de sql, este busca si el string está en algún lugar del name
      const users = await User.findAll({where: {name: {[Op.iLike]: `%${name}%`}}})
return users

    } else{
      const users = await User.findAll(
        {include:
        {model : Page,
          attributes: ['title'],
        through: {attributes: [],}
        }}
      );

      return users
    }
  

    
  // simulation error in the get data
  // throw new Error("Error in the server")
}

module.exports = getUsers