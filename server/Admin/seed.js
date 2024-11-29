const User = require('../auth/User');
const bcrypt = require('bcrypt');

async function createAdmin() {
    const findAdmin = await User.find({isAdmin : true}).countDocuments();
    if(findAdmin === 0) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash('111', salt, function(err, hash) {
                new User({
                    full_name: 'Master',
                    email: 'master@test.kz',
                    password: hash,
                    isAdmin: true,
                }).save()
            });
        })

    }
}

module.exports = createAdmin;