const {DataTypes} = require ('sequelize');

const Page = (database) => {
database.define("Page", {
id:{
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
},
title: {
type: DataTypes.STRING,
allowNull: false,
unique: true,
},
},
{timestamps : false}
)

}

module.exports = Page;