const router = require('express').Router();

//check if someone is logged in
const authCheck = (req,res,next) =>{
	if(!req.user){
		//if user is not logged in
		res.redirect('/users/login');
	}else{
		//if logged in
		next();
	}
};


router.get('/',authCheck,(req, res) => {
   res.render('profile.ejs',{user:req.user});
});

module.exports = router;
