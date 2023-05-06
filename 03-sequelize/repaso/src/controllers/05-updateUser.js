const {User} = require('../db')
const updateUser = async(id, userData) => {
    try {
        const user = await User.findByPk(id)
        if (user) {
            //En lo posible no utilizar update()
            await user.update(userData)
            return user
        } else {
            throw new Error("User not found")
        }
    } catch (error) {
        throw new Error("Error in the server")
    }

}

module.exports = updateUser