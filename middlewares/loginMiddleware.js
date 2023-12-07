module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.json({
            code: 3,
            message: 'Please Sign in to Access!',
        });
    },
    forwardAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.json({
            code: 4,
            message: 'You have already logged in!',
        });
    },
};