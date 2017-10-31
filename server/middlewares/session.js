const someFunc = (req, res, next) => {
        if (!req.session.user){
            req.session.user ={};
            req.session.user.messages = [];
        }
        next();
}

module.exports = {
    someFunc
}