const User = require('./User');
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    // req.body = {
    //     email: 'test@mail.ru',
    //     full_name: 'Daurim',
    //     password: '111',
    //     re_password: '111'
    // }
    
    if(
        req.body.email.length <= 0 &&
        req.body.full_name.length <= 0 &&
        req.body.password.length <= 0 &&
        req.body.re_password.length <= 0 
    ) {
        res.redirect('/signUp?error=1');
    } else if (req.body.password !== req.body.re_password) {
        res.redirect('/signUp?error=2');
    }

    const findUser = await User.findOne({email: req.body.email}).countDocuments();

    if(findUser) {
        res.redirect('/signUp?error=3');
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash( req.body.password, salt, function(err, hash) {
            new User ({
                email: req.body.email,
                full_name: req.body.full_name,
                password: hash,
            }).save()
            res.redirect('/signIn')
        });
    })

}

const signIn = async (req, res) => {
    console.log(req.user)
    res.redirect(`/profile/${req.user._id}`)
}

const signOut = (req, res) => {
    req.logout(function(err){
        if(err) {
            console.log(err)
        }
    })
    res.redirect('/')
}

module.exports = {
    signUp,
    signIn,
    signOut
}