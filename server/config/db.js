// Импорт библиотеки Mongoose:
const mongoose = require('mongoose');
// Это загружает Mongoose, который является ODM (Object Data Modeling) 
// библиотекой для MongoDB и Node.js.

// Асинхронная функция 
async function connectToDb() {
    try {
        // Дання строка подключается к базе данных
        await mongoose.connect('mongodb://localhost:27017/decodeblogII');
        // Выводит сообщение при успешном подключении
        console.log('Successfully connected to MongoDB at mongodb://localhost:27017/decodeblogII');
    } catch (e) {
        // Выводит сообщение об ошибке при подключении к БД
        console.log(`Filed to connect to mongoDB ${e.message}.`);
    }
}

connectToDb()




