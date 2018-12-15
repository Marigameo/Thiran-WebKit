
const express = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'mariappangameo@gmail.com',
        pass: 'Indragooglegameo'
    }
});


// Article Model
let Contact = require('../models/contact_model');
// User Model
let User = require('../models/user');

router.get('/getvotes/',(req,res) => {
  Post.find({},(err, posts) => {
    if(err){
      console.log(err);
    } else {
      posts = posts.slice(0).reverse();
      res.send(posts);
    }
  });
})


router.get("/discusshub",ensureAuthenticated,(req,res)=>{
  res.render('forumhome.pug');
})

router.get('/getposts/',(req,res) => {
  Post.find({},(err, posts) => {
    if(err){
      console.log(err);
    } else {
      posts = posts.slice(0).reverse();
      res.send(posts);
    }
  });
});

router.post('/addupvote/:id',(req,res) => {
  Post.findById(req.params.id,(err,post) => {
    if(err) throw err;
    else{
      post.upvotes+=1;
      post.save((err) =>{
        if(err) throw err;
        else{
          console.log(post.upvotes);
        }
      });
    }
  });

});
router.post('/adddownvote/:id',(req,res) => {
  Post.findById(req.params.id,(err,post) => {
    if(err) throw err;
    else{
      post.downvotes+=1;
      post.save((err) =>{
        if(err) throw err;
        else{
          console.log(post.downvotes);
        }
      });
    }
  });

});



// Add Route
router.get('/add', ensureAuthenticated,(req, res) => {
  res.render('add_post.pug');
});



// Add Submit POST Route
router.post('/add', function(req, res){
  req.checkBody('title','Title is required').notEmpty();
  //req.checkBody('author','Author is required').notEmpty();
  req.checkBody('body','Body is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('add_post.pug', {
      errors:errors
    });
  } else {
    let post = new Post();
    post.title = req.body.title;
    post.author = req.user._id;
    post.body = req.body.body;
    post.username = req.body.username;
    post.date = new Date();
    post.likes =0;
    post.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success','Post Added Successfully');
        res.redirect('/forumhome');
      }
    });
  }
});

// Load Edit Form
router.get('/edit/:id', ensureAuthenticated, function(req, res){
  Post.findById(req.params.id,(err, post) => {
    if(post.author != req.user._id){
      req.flash('danger', 'Not Authorized');
      res.redirect('/forumhome');
    }
    res.render('edit_post.pug', {
      title:'Edit Post',
      post:post
    });
  });
});

// Update Submit POST Route
router.post('/edit/:id', function(req, res){
  let post = {};
  post.title = req.body.title;
  post.author = req.body.author;
  post.body = req.body.body;
  post.date = new Date();
  let query = {_id:req.params.id}

  Post.update(query, post,(err) => {
    if(err){
      console.log(err);
      return;
    } else {
      req.flash('success', 'Post Updated Successfully');
      res.redirect('/forumhome');
    }
  });
});

// Delete Post
router.delete('/:id', function(req, res){
  if(!req.user._id){
    res.status(500).send();
  }

  let query = {_id:req.params.id}

  Post.findById(req.params.id, function(err, post){
    if(post.author != req.user._id){
      res.status(500).send();
    } else {
      Post.remove(query, (err) => {
        if(err){
          console.log(err);
        }
        res.send('Success');
      });
    }
  });
});

// Get Single Article
router.get('/:id', function(req, res){
Post.findById(req.params.id, function(err, post){
    User.findById(req.query.author, function(err, user){
      res.render('post.pug', {
        post:post,
        author:req.query.author
      });
    });
  });
});

// Access Control
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    req.flash('danger', 'Please login');
    res.redirect('/users/login');
  }
}

module.exports = router;
