const isAuth = (req, res, next) => {
    if(req.user){
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}

const isAuthor = (req, res, next) => {
    console.log(req.user)
    if(req.user.isAuthor){

    }
}



module.exports = {isAuth}