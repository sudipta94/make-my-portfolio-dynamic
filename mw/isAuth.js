module.exports=(req, res, next) =>{
    if(!req.session.islogin){
        return res.redirect('/auth');
    }
    next();
}