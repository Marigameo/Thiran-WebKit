const router = require('express').Router();
const passport = require('passport');

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    
    res.redirect('/users/login');
});

module.exports = router;
