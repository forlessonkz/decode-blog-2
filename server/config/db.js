const mongoose = require('mongoose');


async function connectToDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/decodeDB');
        console.log('Connected to mongoDB')
    } catch (e) {
        console.log(`FFailed to connect to mongoDB. Error: ${e}`)
    }
}


// Обработка событий подключения 
mongoose.connection.on('connected', () => { 
    console.log('Mongoose connected to db'); 
}); 

mongoose.connection.on('error', (err) => { 
    console.log(`Mongoose connection error: ${err.message}`); 
}); 

mongoose.connection.on('disconnected', () => { 
    console.log('Mongoose disconnected');
});

connectToDb()