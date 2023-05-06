const {Sequelize} = require('sequelize');
const UserModel = require('./models/User');
const PostModel = require('./models/Post');
const PageModel = require('./models/Page');

const DB_USER = 'postgres';
const DB_PASSWORD = 'FQExG24r&cn!fo';
const DB_HOST = 'localhost';
const DB_PORT = 5432;
const DB_NAME = 'democlase';
//postgres://user:password@host:port/database
const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
    logging: false,
})

UserModel(database);
PostModel(database);
PageModel(database);
 
const {User, Post, Page} = database.models;
User.hasMany(Post);
Post.belongsTo(User);

User.belongsToMany(Page, {through: 'UserPage'});
Page.belongsToMany(User, {through: 'UserPage'});

module.exports ={
    database,... database.models
}