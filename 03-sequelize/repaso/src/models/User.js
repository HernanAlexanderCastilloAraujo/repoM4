const {DataTypes} = require ('sequelize');

const User = (database) => {
    database.define("User", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: false,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type: DataTypes.ENUM("Male","Female"),
        },
        password:{
            type: DataTypes.STRING,
     
        },
        
    },
    {timestamps: false}
    )
}

module.exports = User;