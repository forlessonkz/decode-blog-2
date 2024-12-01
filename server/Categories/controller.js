const Categories = require('./Categories');

const getAllCatergories = async(req, res) => {
    const data = await Categories.find();
    res.send({data})
}

module.exports = getAllCatergories;