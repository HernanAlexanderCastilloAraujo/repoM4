const {User} = require('../db')


const deleteUser = async (id) => {

    try {
        const user = await User.findByPk(id)
        if (user) {
            await user.destroy()
            return user
        } else {
            throw new Error("User not found")
        }
    } catch (error) {
        throw new Error("Error in the server")
    }

}

module.exports = deleteUser