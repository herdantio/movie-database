const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('seryu-db', 'postgres', 'docker', {
    host: 'localhost',
    dialect: 'postgres'
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function closeDB() {
    try {
        await sequelize.close();
        console.log('Connection has been closed successfully.');
    } catch (error) {
        console.error('Unable to close connection to the database:', error);
    }
}

module.exports = {
    connectDB,
    closeDB
}