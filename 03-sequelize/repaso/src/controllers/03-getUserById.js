const {User} = require('../db')

const getUserById =  async(id) => {
    try {
        const user = await User.findByPk(id)
        return user
    }
    catch (error) {
        throw new Error("Error in the server")
    }


}

module.exports = getUserById