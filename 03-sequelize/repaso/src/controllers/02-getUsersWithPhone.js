const data = require('../utils/data')

const getUsersWithPhone = () => {

    const usersWithPhone = data.filter(user => user.phone)
    return usersWithPhone

}

module.exports = getUsersWithPhone
