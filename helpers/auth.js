module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_message', 'Not Authorized');
        res.redirect('/users/login');
    }
}