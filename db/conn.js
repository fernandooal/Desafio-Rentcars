const {Sequelize} = require('sequelize')

const connection = new Sequelize(
    'testing',
    'root',
    'ANSKk08aPEDbFjDO',
    {
        dialect: "mysql",
        host: 'localhost',
    port: 3307
    }
);

try{
    connection.authenticate()
    console.log('Connected to DB')
} catch(err){
    console.log(`Failed to connect: ${err}`)
}

module.exports = connection