const Categories = require('./Categories');

const getAllCategories = async (req, res) => {
    // Выполняем асинхронный поиск всех категорий в БД с 
    // помощью Categories.find()
    const data = await Categories.find();
    res.send({data})
}

module.exports = {
    getAllCategories,
}