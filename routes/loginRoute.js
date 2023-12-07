const passport = require('passport');
const express = require('express');
const router = express.Router()
const { CLIENT_URL, COOKIE_DOMIAN } = require('../configs/config');
const { ensureAuthenticated, forwardAuthenticated } = require('../middlewares/loginMiddleware')


// --- Google Login ---
router.get('/auth/google', forwardAuthenticated, passport.authenticate('google', { scope: ['profile', 'email'] }));


// --- Google Callback ---
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: `${CLIENT_URL}`,
    failureRedirect: `${CLIENT_URL}/signin-google-callback/fail`,
}));


// --- Get User Info ---
router.post('/info', ensureAuthenticated, async (req, res) => {
    console.log(req.isAuthenticated())
    console.log(req.user)
    try {
        res.status(201).json({
            code: 0,
            msg: 'success',
            user: req.user
        })
    } catch (error) {
        res.status(500).json({ error: 'its Server Error' });
    }
})


// --- logout ---
router.post('/logout', ensureAuthenticated, async (req, res) => {
    req.session.destroy((error) => {
        if (error) return res.json({
            code: 2,
            msg: 'fail to logout'
        });

        res.clearCookie('connect.sid', { domain: COOKIE_DOMIAN });
        res.clearCookie('G_AUTHUSER_H', { domain: COOKIE_DOMIAN });
        res.clearCookie('G_ENABLED_IDPS', { domain: COOKIE_DOMIAN });
        res.status(201).json({
            code: 0,
            msg: "success logout"
        });
    });
})


module.exports = router;