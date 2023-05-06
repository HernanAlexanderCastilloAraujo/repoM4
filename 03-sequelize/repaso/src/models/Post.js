const {DataTypes} = require ('sequelize');

const Post = (database) => {
    database.define("Post", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}

module.exports = Post;