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

let Project = require('../models/project_model');
let User = require('../models/user');
let Contact = require('../models/contact_model');
let Book = require('../models/book_model');
let Trouble = require('../models/trouble_model');
let Feedback = require('../models/feedback_model');
let gems = require('../models/gems_model');
let post_jobs = require('../models/post_jobs_model');


let student_survey_start = require('../models/student_survey_model1');
let student_survey_mid = require('../models/student_survey_model2');
let student_survey_end = require('../models/student_survey_model3');

let alumni_survey_start = require('../models/alumni_survey_model1');
let alumni_survey_mid = require('../models/alumni_survey_model2');
let alumni_survey_end = require('../models/alumni_survey_model3');



router.post('/edit_profile/:id', function(req, res){
  let profile = {};
  profile.name = req.body.name;
  profile.district_name = req.body.district_name;
  profile.phoneno = req.body.phoneno;
  profile.email = req.body.email;
  profile.domain = req.body.domain;
  profile.year = req.body.year;
  profile.year_of_passing = req.body.year_of_passing;
  profile.edu1 = req.body.edu1;
  profile.edu2 = req.body.edu2;
  profile.institution_name1 = req.body.institution_name1;
  profile.district1 = req.body.district1;
  profile.cutoff1=req.body.cutoff1;
  profile.institution_name2 = req.body.institution_name2;
  profile.district2 = req.body.district2;
  profile.cutoff2=req.body.cutoff2;
  profile.software_skills = req.body.software_skills;
  profile.other_skills = req.body.other_skills;
  profile.accomplishments = req.body.accomplishments;
  profile.issuer = req.body.issuer;
  profile.date1 = req.body.date1;
  profile.duration = req.body.duration;
  profile.offer = req.body.offer;
  profile.ongoing = req.body.ongoing;
  profile.date2 = req.body.date2;
  profile.date3 = req.body.date3;
  profile.score = req.body.score;
  profile.interns = req.body.interns;
  profile.intern_company = req.body.intern_company;
  profile.intern_duration = req.body.duration;
  profile.title = req.body.title;
  profile.publisher = req.body.publisher;
  profile.expire = req.body.expire;
  profile.company_name = req.body.company_name;
  profile.position_at = req.body.position_at;
  profile.role_description = req.body.role_description;
  profile.mentor_name = req.body.mentor_name;
  profile.mentor_position = req.body.mentor_position;
  let query = {_id:req.params.id}

  gems.update(query, profile,(err) => {
    if(err){
      console.log(err);
      return;
    } else {
      req.flash('success', 'Profile Updated Successfully');
      res.redirect('/projects/gems_profile1');
    }
  });
});


router.get('/edit_profile/:id', ensureAuthenticated, function(req, res){
  if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {

  gems.findById(req.params.id,(err, profile) => {
    if(err)
    {
      throw err;
    }else{
      res.render('edit_profile.pug', {
      title:'Edit Post',
      profile:profile
    });
    }

  });
}
});

router.get('/uploads',(req,res) => {
  res.render('uploads.ejs');
})

router.get('/gems_profile1',function(req,res){
  res.render('gems_profile1.ejs');
});

router.get('/post_jobs',function(req,res){
  res.render('post_jobs.ejs');
});


router.post('/post_jobs',function(req,res){
  let jobs = new post_jobs();
  jobs.job_title = req.body.job_title;
  jobs.company_name = req.body.company_name;
  jobs.domain = req.body.domain;
  jobs.location = req.body.location;
  jobs.job_description = req.body.job_description;
  jobs.job_function = req.body.job_function;
  jobs.edu1 = req.body.edu1;
  jobs.emp_type = req.body.emp_type;
  jobs.application = req.body.application;
  jobs.email = req.body.email;
  jobs.phoneno = req.body.phoneno;
  jobs.url = req.body.url;
  jobs.postal_address = req.body.postal_address;
  jobs.arrears=req.body.arrears;
  jobs.cgpa = req.body.cgpa;
  jobs.min_cgpa = req.body.min_cgpa;
  jobs.software_skills=req.body.software_skills;
  jobs.job_duration=req.body.job_duration;
  jobs.salary = req.body.salary;
  jobs.other_skills = req.body.other_skills;
  jobs.freshers = req.body.freshers;
  jobs.seniority = req.body.seniority;

  jobs.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
          const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<p><h1>The job profile has been set up successfully.Now you can hunt efficient candidates,contact them,interview and select.This will be visible to all the students out there and thus many may ping you.No worry,we will take care of it.If a candidate applys we will inform you thus can stay updated.</h1></p>'// plain text body
}
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

        res.redirect('/projects/post_jobs');
      }
    });
  });


router.post('/gems_profile1',function(req,res){
  let gems_profile1 = new gems();
  gems_profile1.name = req.body.name;
  gems_profile1.district_name = req.body.district_name;
  gems_profile1.phoneno = req.body.phoneno;
  gems_profile1.email = req.body.email;
  gems_profile1.domain = req.body.domain;
  gems_profile1.year = req.body.year;
  gems_profile1.year_of_passing = req.body.year_of_passing;
  gems_profile1.edu1 = req.body.edu1;
  gems_profile1.edu2 = req.body.edu2;
  gems_profile1.institution_name1 = req.body.institution_name1;
  gems_profile1.district1 = req.body.district1;
  gems_profile1.cutoff1=req.body.cutoff1;
  gems_profile1.institution_name2 = req.body.institution_name2;
  gems_profile1.district2 = req.body.district2;
  gems_profile1.cutoff2=req.body.cutoff2;
  gems_profile1.software_skills = req.body.software_skills;
  gems_profile1.other_skills = req.body.other_skills;
  gems_profile1.accomplishments = req.body.accomplishments;
  gems_profile1.issuer = req.body.issuer;
  gems_profile1.date1 = req.body.date1;
  gems_profile1.duration = req.body.duration;
  gems_profile1.offer = req.body.offer;
  gems_profile1.ongoing = req.body.ongoing;
  gems_profile1.date2 = req.body.date2;
  gems_profile1.date3 = req.body.date3;
  gems_profile1.score = req.body.score;
  gems_profile1.interns = req.body.interns;
  gems_profile1.intern_company = req.body.intern_company;
  gems_profile1.intern_duration = req.body.duration;
  gems_profile1.title = req.body.title;
  gems_profile1.publisher = req.body.publisher;
  gems_profile1.expire = req.body.expire;
  gems_profile1.company_name = req.body.company_name;
  gems_profile1.position_at = req.body.position_at;
  gems_profile1.role_description = req.body.role_description;
  gems_profile1.mentor_name = req.body.mentor_name;
  gems_profile1.mentor_position = req.body.mentor_position;
  gems_profile1.lang_prof = req.body.lang_prof;
  gems_profile1.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
          const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<p><h1>Your profile has been set up successfully.Now you can find jobs,apply and grab them on the go.Your profile will be visible to all the alumni out there and thus they may pick you.Please stay in contact with us.Stay tuned for further updates.Thank you!</h1></p>'// plain text body
}
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

        res.redirect('/get_profiles');
      }
    });
  });


router.post('/alumni_survey_page1', function(req, res){

    let alumni_survey_page1 = new alumni_survey_start();
    alumni_survey_page1.name_a = req.body.name_a;

    alumni_survey_page1.domain_of_job = req.body.domain_of_job;
    alumni_survey_page1.year_of_passout = req.body.year_of_passout;
    alumni_survey_page1.country = req.body.country;
    alumni_survey_page1.phoneno_a = req.body.phoneno_a;
    alumni_survey_page1.email_a =req.body.email_a;
    alumni_survey_page1.date = new Date();

    alumni_survey_page1.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
          const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email_a, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<p><h1>Thanks for being a part of our survey,we will make sure all your suggestions are taken to the administration in time.Keep supporting us!</h1></p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

        res.redirect('/projects/alumni_second_page');
      }
    });
  });

router.post('/alumni_survey_page2', function(req, res){

    let alumni_survey_page2 = new alumni_survey_mid();
    alumni_survey_page2.involvement_a = req.body.involvement_a;

    alumni_survey_page2.major_support= req.body.major_support;
    alumni_survey_page2.interact_a = req.body.interact_a;
    alumni_survey_page2.invites = req.body.invites;
    alumni_survey_page2.mentor_relationship_a = req.body.mentor_relationship_a;
    alumni_survey_page2.ogc_relationship_a = req.body.ogc_relationship_a;
    alumni_survey_page2.updates_a = req.body.updates_a;

    alumni_survey_page2.focus = req.body.focus;
    alumni_survey_page2.admin_flexible = req.body.admin_flexible;
    alumni_survey_page2.domain_a = req.body.domain_a;
    alumni_survey_page2.activities_a = req.body.activities_a;
    alumni_survey_page2.support_a = req.body.support_a;
    alumni_survey_page2.barrier_a = req.body.barrier_a;
    alumni_survey_page2.ogc_focus = req.body.ogc_focus;
    alumni_survey_page2.towards_placement =req.body.towards_placement;
    alumni_survey_page2.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {

        res.redirect('/projects/student_end_page');
      }
    });
  });

router.post('/alumni_survey_page3', function(req, res){

    let alumni_survey_page3 = new alumni_survey_end();
    alumni_survey_page3.perks_a = req.body.perks_a;

    alumni_survey_page3.duration_a = req.body.duration_a;
    alumni_survey_page3.fellow_support = req.body.fellow_support;
    alumni_survey_page3.affect_a = req.body.affect_a;
    alumni_survey_page3.active_duration_a = req.body.active_duration_a;
    alumni_survey_page3.academic_support_a = req.body.academic_support_a;
    alumni_survey_page3.cooperation_stu = req.body.cooperation_stu;

    alumni_survey_page3.ogc_rate = req.body.ogc_rate;
    alumni_survey_page3.college_rate = req.body.college_rate;

    alumni_survey_page3.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {

        req.flash('success','Submitted successfuly,thanks for your support!');
        res.redirect('/projects/alumni_end_page');
      }
    });
  });



router.post('/student_survey_page1', function(req, res){

    let student_survey_page1 = new student_survey_start();
    student_survey_page1.name = req.body.name;

    student_survey_page1.dep = req.body.dep;
    student_survey_page1.year = req.body.year;
    student_survey_page1.phoneno = req.body.phoneno;
    student_survey_page1.email = req.body.email;
    student_survey_page1.date = new Date();

    student_survey_page1.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
          const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<p><h1>Thanks for being a part of our survey,we will make sure all your suggestions are taken to the administration in time.Keep supporting us!</h1></p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

        res.redirect('/projects/student_second_page');
      }
    });
  });

router.post('/student_survey_page2', function(req, res){

    let student_survey_page2 = new student_survey_mid();
    student_survey_page2.involvement = req.body.involvement;

    student_survey_page2.know = req.body.know;
    student_survey_page2.website_visit = req.body.website_visit;
    student_survey_page2.mentor_relationship = req.body.mentor_relationship;
    student_survey_page2.ogc_relationship = req.body.ogc_relationship;
    student_survey_page2.updates = req.body.updates;
    student_survey_page2.fund = req.body.fund;

    student_survey_page2.placement = req.body.placement;
    student_survey_page2.domain_of_job = req.body.domain_of_job;
    student_survey_page2.activities = req.body.activities;
    student_survey_page2.support = req.body.support;
    student_survey_page2.barrier = req.body.barrier;
    student_survey_page2.direct = req.body.direct;
    student_survey_page2.help_placements = req.body.help_placements;
    student_survey_page2.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {

        res.redirect('/projects/student_end_page');
      }
    });
  });

router.post('/student_survey_page3', function(req, res){

    let student_survey_page3 = new student_survey_end();
    student_survey_page3.perks = req.body.perks;

    student_survey_page3.duration = req.body.duration;
    student_survey_page3.college_support = req.body.college_support;
    student_survey_page3.affect = req.body.affect;
    student_survey_page3.active_duration = req.body.active_duration;
    student_survey_page3.academic_support = req.body.academic_support;
    student_survey_page3.placements_related_perks = req.body.placements_related_perks;

    student_survey_page3.events_trainings = req.body.events_trainings;
    student_survey_page3.funds_by_college = req.body.funds_by_college;

    student_survey_page3.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {

        req.flash('success','Submitted successfuly,thanks for your support!');
        res.redirect('/projects/student_end_page');
      }
    });
  });



router.get('/jobs',(req,res) =>{
  res.render('jobs_portal.ejs');
})

router.get('/survey',(req,res) =>{
  res.render('survey.ejs');
})

router.get('/start_survey',(req,res) => {
  res.render('survey_page1.pug');
})


router.get('/student_second_page',(req,res)=>{
  res.render('second_page_student.pug');
})

router.get('/student_end_page',(req,res)=>{
  const flashMessages = res.locals.getMessages();
  console.log('flash',flashMessages);
  res.render('end_page_student.pug',{
    success:flashMessages.success
  });
})

router.get('/start_survey_alumni',(req,res) => {
  res.render('survey_page1_alumni.pug');
})


router.get('/alumni_second_page',(req,res)=>{
  res.render('second_page_alumni.pug');
})

router.get('/alumni_end_page',(req,res)=>{
  const flashMessages = res.locals.getMessages();
  console.log('flash',flashMessages);
  res.render('end_page_alumni.pug',{
    success:flashMessages.success
  });
})

router.post('/trouble', function(req, res){
  req.checkBody('email','Email is mandatory').notEmpty();
  //req.checkBody('author','Author is required').notEmpty();
  req.checkBody('name','name is mandatory').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('codesuite.pug', {
      errors:errors
    });
  } else {
    let trouble = new Trouble();
    trouble.name = req.body.name;

    trouble.book = req.body.book;
    trouble.email = req.body.email;
    trouble.date = new Date();

    trouble.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
         const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>  <title></title>  <!--[if !mso]><!-- -->  <meta http-equiv="X-UA-Compatible" content="IE=edge">  <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css">  #outlook a { padding: 0; }  .ReadMsgBody { width: 100%; }  .ExternalClass { width: 100%; }  .ExternalClass * { line-height:100%; }  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }  p { display: block; margin: 13px 0; }</style><!--[if !mso]><!--><style type="text/css">  @media only screen and (max-width:480px) {    @-ms-viewport { width:320px; }    @viewport { width:320px; }  }</style><!--<![endif]--><!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]--><!--[if !mso]><!-->    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">    <style type="text/css">        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);  @import url(https://fonts.googleapis.com/css?family=Cabin);    </style>  <!--<![endif]--><style type="text/css">  @media only screen and (min-width:480px) {    .mj-column-per-100 { width:100%!important; }.mj-column-per-50 { width:50%!important; }.mj-column-per-25 { width:25%!important; }  }</style></head><body style="background: #FFFFFF;">    <div class="mj-container" style="background-color:#FFFFFF;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><div style="cursor:auto;color:#B4B4B4;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:center;"><p><span style="font-size:14px;">Thank you for contacting us</span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:middle;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:middle;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:middle;" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;"><div style="font-size:1px;line-height:18px;white-space:nowrap;">&#xA0;</div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:318px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533826030.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="318"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">This automatic reply is just to let you know that we received your message and we&apos;ll get back to you with a response as quickly as possible.Evenings and wekends may take us a little bit longer.</span></p><p><span style="font-size:18px;">If you have a general question about using thiran or getting benefitted from us,you&apos;re welcome to browse our <a href="http://thiran.in/knowledgebase">knowledgebase </a>for walkthroughs of all our feautures and answers for frequently asked questions.</span></p><p><a href="http://thiran.in"><span style="font-size: 18px;">Access</span></a></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size: 18px;">For general idea&#xA0;<a href="http://thiran.in">visit our site </a>,you can also get help directly from our OGC members.</span></p><p><span style="font-size: 18px;">Do follow our<a href="https://www.facebook.com/accetthiran"> facebook page </a>for daily updates.Thank you!</span></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:14px 14px 14px 14px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:348px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533829821.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="348"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:24px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:3px 35px 3px 35px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color:#c0392b;">THIRAN - </span>CREATIVITY REDEFINED&#xA0;</h1><p>Inspiring and illumining intellect by providing a project based collaborative platform to experiment and experience enlightened education</p><p>Thiran knows the way, goes the way and shows the way</p><p><span style="font-size:18px;"><a href="http://thiran.in/">VISIT US</a></span></p><p><span style="font-size:18px;"><a href="http://read.thiran.in">Blog</a></span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533828817.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">Are you in the dream of becoming an entrepreuner.Dwelling daily in&#xA0; pool of great innovative ideas.Then this is a great place for you to test yourself.Please try it too..</span></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;">ACGCET STARTUP WALLET</h1><h6>Unveil the entrepreneur in you&#xA0;</h6><p>Get your ideas featured in a click.If you can dream it then you can acheive it too.Access resources,get instant helps and kickstart your dream role.</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><a href="https://app.zohocreator.com/mariappangameo/accetwallet#Student_Member_Registration" target="_blank"><img alt="startup image" title="" height="auto" src="https://static-news.moneycontrol.com/static-mcnews/2017/09/Entrepreneurship-770x433.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/contact">contact</a><br><br><a href="http://thiran.in/knowledgebase">knowledgebase</a><br><br><a href="http://thiran.in/yetxplore">yetxplore</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/offlinides">offlinides</a><br><br><a href="http://thiran.in/discusshub">discusshub</a><br><br><a href="http://read.thiran.in">blog</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/novicenet">novicenet</a><br><br><a href="http://thiran.in/devtoolz">devtoolz</a><br><br><a href="http://thiran.in/cloudrunz">cloudrunz</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p>surveybiz<br><br>suggest<br><br>idea wallet</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#949494;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><span style="font-size:12px;">Copyright &#xA9; 2018thiran.in, All rights reserved.&#xA0;<br>keep following us&#xA0;<br>&#xA0;</span><br>&#xA0;</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></body></html>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
        req.flash('success','Submitted successfuly,we will contact you soon');
        res.redirect('/projects/codesuite');
      }
    });
  }
});




router.post('/book', function(req, res){
  req.checkBody('email','Email is mandatory').notEmpty();
  //req.checkBody('author','Author is required').notEmpty();
  req.checkBody('book','Specify the book name').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('offlinides.pug', {
      errors:errors
    });
  } else {
    let book = new Book();
    book.name = req.body.username;

    book.book = req.body.book;
    book.email = req.body.email;
    book.date = new Date();

    book.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
         const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>  <title></title>  <!--[if !mso]><!-- -->  <meta http-equiv="X-UA-Compatible" content="IE=edge">  <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css">  #outlook a { padding: 0; }  .ReadMsgBody { width: 100%; }  .ExternalClass { width: 100%; }  .ExternalClass * { line-height:100%; }  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }  p { display: block; margin: 13px 0; }</style><!--[if !mso]><!--><style type="text/css">  @media only screen and (max-width:480px) {    @-ms-viewport { width:320px; }    @viewport { width:320px; }  }</style><!--<![endif]--><!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]--><!--[if !mso]><!-->    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">    <style type="text/css">        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);  @import url(https://fonts.googleapis.com/css?family=Cabin);    </style>  <!--<![endif]--><style type="text/css">  @media only screen and (min-width:480px) {    .mj-column-per-100 { width:100%!important; }.mj-column-per-50 { width:50%!important; }.mj-column-per-25 { width:25%!important; }  }</style></head><body style="background: #FFFFFF;">    <div class="mj-container" style="background-color:#FFFFFF;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><div style="cursor:auto;color:#B4B4B4;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:center;"><p><span style="font-size: 14px;">We are pleased with your response and interest</span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:middle;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:middle;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:middle;" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;"><div style="font-size:1px;line-height:18px;white-space:nowrap;">&#xA0;</div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:318px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533826030.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="318"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">This automatic reply is just to let you know that we received your message and we&apos;ll get back to you with a response as quickly as possible.Evenings and wekends may take us a little bit longer.</span></p><p><span style="color:#c0392b;"><span style="font-size:18px;">We appreciate your interest for demanding a book from us.We don&apos;t have any readymade copies available with us.Our idea is to spread this message,demand help and once somone from our end donate us we&apos;ll transfer it to you.</span></span></p><p><span style="font-size:18px;">If you have a general question about using thiran or getting benefitted from us,you&apos;re welcome to browse our <a href="http://thiran.in/knowledgebase">knowledgebase </a>for walkthroughs of all our feautures and answers for frequently asked questions.</span></p><p><a href="http://thiran.in"><span style="font-size: 18px;">Access</span></a></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size: 18px;">For general idea&#xA0;<a href="http://thiran.in">visit our site </a>,you can also get help directly from our OGC members.</span></p><p><span style="font-size: 18px;">Do follow our<a href="https://www.facebook.com/accetthiran"> facebook page </a>for daily updates.Thank you!</span></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:14px 14px 14px 14px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:348px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533829821.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="348"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:24px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:3px 35px 3px 35px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color:#c0392b;">THIRAN - </span>CREATIVITY REDEFINED&#xA0;</h1><p>Inspiring and illumining intellect by providing a project based collaborative platform to experiment and experience enlightened education</p><p>Thiran knows the way, goes the way and shows the way</p><p><span style="font-size:18px;"><a href="http://thiran.in/">VISIT US</a></span></p><p><span style="font-size:18px;"><a href="http://read.thiran.in">Blog</a></span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533828817.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">Are you in the dream of becoming an entrepreuner.Dwelling daily in&#xA0; pool of great innovative ideas.Then this is a great place for you to test yourself.Please try it too..</span></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;">ACGCET STARTUP WALLET</h1><h6>Unveil the entrepreneur in you&#xA0;</h6><p>Get your ideas featured in a click.If you can dream it then you can acheive it too.Access resources,get instant helps and kickstart your dream role.</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><a href="https://app.zohocreator.com/mariappangameo/accetwallet#Student_Member_Registration" target="_blank"><img alt="startup image" title="" height="auto" src="https://static-news.moneycontrol.com/static-mcnews/2017/09/Entrepreneurship-770x433.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/contact">contact</a><br><br><a href="http://thiran.in/knowledgebase">knowledgebase</a><br><br><a href="http://thiran.in/yetxplore">yetxplore</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/offlinides">offlinides</a><br><br><a href="http://thiran.in/discusshub">discusshub</a><br><br><a href="http://read.thiran.in">blog</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/novicenet">novicenet</a><br><br><a href="http://thiran.in/devtoolz">devtoolz</a><br><br><a href="http://thiran.in/cloudrunz">cloudrunz</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p>surveybiz<br><br>suggest<br><br>idea wallet</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#949494;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><span style="font-size:12px;">Copyright &#xA9; 2018thiran.in, All rights reserved.&#xA0;<br>keep following us&#xA0;<br>&#xA0;</span><br>&#xA0;</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></body></html>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
        req.flash('success','Book request submitted successfuly,we will contact you soon');
        res.redirect('/projects/offlinides');
      }
    });
  }
});


router.post('/feedback', function(req, res){
  req.checkBody('email','Email is mandatory').notEmpty();
  //req.checkBody('author','Author is required').notEmpty();
  req.checkBody('feedback_body','Message is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('codesuite.pug', {
      errors:errors
    });
  } else {
    let feedback = new Feedback();
    feedback.name = req.body.name;

    feedback.feedback_body = req.body.feedback_body;
    feedback.email = req.body.email;
    feedback.date = new Date();

    feedback.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
         const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html :'<p><h2>Thanks for your feedback,we could improve ourselves and serve you better</h2><p>'
  };

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
        req.flash('success','Submitted successfuly,we will contact you soon');
        res.redirect('/projects/codesuite');
      }
    });
  }
});

router.post('/query', function(req, res){
  req.checkBody('email','Email is mandatory').notEmpty();
  //req.checkBody('author','Author is required').notEmpty();
  req.checkBody('body','Message is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('kbase.pug', {
      errors:errors
    });
  } else {
    let contact = new Contact();
    contact.username = req.body.username;

    contact.body = req.body.body;
    contact.email = req.body.email;
    contact.date = new Date();

    contact.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
         const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>  <title></title>  <!--[if !mso]><!-- -->  <meta http-equiv="X-UA-Compatible" content="IE=edge">  <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css">  #outlook a { padding: 0; }  .ReadMsgBody { width: 100%; }  .ExternalClass { width: 100%; }  .ExternalClass * { line-height:100%; }  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }  p { display: block; margin: 13px 0; }</style><!--[if !mso]><!--><style type="text/css">  @media only screen and (max-width:480px) {    @-ms-viewport { width:320px; }    @viewport { width:320px; }  }</style><!--<![endif]--><!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]--><!--[if !mso]><!-->    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">    <style type="text/css">        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);  @import url(https://fonts.googleapis.com/css?family=Cabin);    </style>  <!--<![endif]--><style type="text/css">  @media only screen and (min-width:480px) {    .mj-column-per-100 { width:100%!important; }.mj-column-per-50 { width:50%!important; }.mj-column-per-25 { width:25%!important; }  }</style></head><body style="background: #FFFFFF;">    <div class="mj-container" style="background-color:#FFFFFF;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><div style="cursor:auto;color:#B4B4B4;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:center;"><p><span style="font-size:14px;">Thank you for contacting us</span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:middle;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:middle;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:middle;" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;"><div style="font-size:1px;line-height:18px;white-space:nowrap;">&#xA0;</div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:318px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533826030.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="318"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">This automatic reply is just to let you know that we received your message and we&apos;ll get back to you with a response as quickly as possible.Evenings and wekends may take us a little bit longer.</span></p><p><span style="font-size:18px;">If you have a general question about using thiran or getting benefitted from us,you&apos;re welcome to browse our <a href="http://thiran.in/knowledgebase">knowledgebase </a>for walkthroughs of all our feautures and answers for frequently asked questions.</span></p><p><a href="http://thiran.in"><span style="font-size: 18px;">Access</span></a></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size: 18px;">For general idea&#xA0;<a href="http://thiran.in">visit our site </a>,you can also get help directly from our OGC members.</span></p><p><span style="font-size: 18px;">Do follow our<a href="https://www.facebook.com/accetthiran"> facebook page </a>for daily updates.Thank you!</span></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:14px 14px 14px 14px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:348px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533829821.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="348"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:24px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:3px 35px 3px 35px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color:#c0392b;">THIRAN - </span>CREATIVITY REDEFINED&#xA0;</h1><p>Inspiring and illumining intellect by providing a project based collaborative platform to experiment and experience enlightened education</p><p>Thiran knows the way, goes the way and shows the way</p><p><span style="font-size:18px;"><a href="http://thiran.in/">VISIT US</a></span></p><p><span style="font-size:18px;"><a href="http://read.thiran.in">Blog</a></span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533828817.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">Are you in the dream of becoming an entrepreuner.Dwelling daily in&#xA0; pool of great innovative ideas.Then this is a great place for you to test yourself.Please try it too..</span></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;">ACGCET STARTUP WALLET</h1><h6>Unveil the entrepreneur in you&#xA0;</h6><p>Get your ideas featured in a click.If you can dream it then you can acheive it too.Access resources,get instant helps and kickstart your dream role.</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><a href="https://app.zohocreator.com/mariappangameo/accetwallet#Student_Member_Registration" target="_blank"><img alt="startup image" title="" height="auto" src="https://static-news.moneycontrol.com/static-mcnews/2017/09/Entrepreneurship-770x433.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/contact">contact</a><br><br><a href="http://thiran.in/knowledgebase">knowledgebase</a><br><br><a href="http://thiran.in/yetxplore">yetxplore</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/offlinides">offlinides</a><br><br><a href="http://thiran.in/discusshub">discusshub</a><br><br><a href="http://read.thiran.in">blog</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/novicenet">novicenet</a><br><br><a href="http://thiran.in/devtoolz">devtoolz</a><br><br><a href="http://thiran.in/cloudrunz">cloudrunz</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p>surveybiz<br><br>suggest<br><br>idea wallet</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#949494;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><span style="font-size:12px;">Copyright &#xA9; 2018thiran.in, All rights reserved.&#xA0;<br>keep following us&#xA0;<br>&#xA0;</span><br>&#xA0;</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></body></html>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
        req.flash('success','Submitted successfuly,we will contact you soon');
        res.redirect('/projects/kbase#key');
      }
    });
  }
});

router.post('/contact', function(req, res){
  req.checkBody('email','Email is mandatory').notEmpty();
  //req.checkBody('author','Author is required').notEmpty();
  req.checkBody('body','Message is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('contact.pug', {
      errors:errors
    });
  } else {
    let contact = new Contact();
    contact.username = req.body.username;

    contact.body = req.body.body;
    contact.email = req.body.email;
    contact.date = new Date();

    contact.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
         const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>  <title></title>  <!--[if !mso]><!-- -->  <meta http-equiv="X-UA-Compatible" content="IE=edge">  <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css">  #outlook a { padding: 0; }  .ReadMsgBody { width: 100%; }  .ExternalClass { width: 100%; }  .ExternalClass * { line-height:100%; }  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }  p { display: block; margin: 13px 0; }</style><!--[if !mso]><!--><style type="text/css">  @media only screen and (max-width:480px) {    @-ms-viewport { width:320px; }    @viewport { width:320px; }  }</style><!--<![endif]--><!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]--><!--[if !mso]><!-->    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">    <style type="text/css">        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);  @import url(https://fonts.googleapis.com/css?family=Cabin);    </style>  <!--<![endif]--><style type="text/css">  @media only screen and (min-width:480px) {    .mj-column-per-100 { width:100%!important; }.mj-column-per-50 { width:50%!important; }.mj-column-per-25 { width:25%!important; }  }</style></head><body style="background: #FFFFFF;">    <div class="mj-container" style="background-color:#FFFFFF;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><div style="cursor:auto;color:#B4B4B4;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:center;"><p><span style="font-size:14px;">Thank you for contacting us</span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:middle;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:middle;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:middle;" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;"><div style="font-size:1px;line-height:18px;white-space:nowrap;">&#xA0;</div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:318px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533826030.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="318"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">This automatic reply is just to let you know that we received your message and we&apos;ll get back to you with a response as quickly as possible.Evenings and wekends may take us a little bit longer.</span></p><p><span style="font-size:18px;">If you have a general question about using thiran or getting benefitted from us,you&apos;re welcome to browse our <a href="http://thiran.in/knowledgebase">knowledgebase </a>for walkthroughs of all our feautures and answers for frequently asked questions.</span></p><p><a href="http://thiran.in"><span style="font-size: 18px;">Access</span></a></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size: 18px;">For general idea&#xA0;<a href="http://thiran.in">visit our site </a>,you can also get help directly from our OGC members.</span></p><p><span style="font-size: 18px;">Do follow our<a href="https://www.facebook.com/accetthiran"> facebook page </a>for daily updates.Thank you!</span></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:14px 14px 14px 14px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:348px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533829821.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="348"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:24px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:3px 35px 3px 35px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color:#c0392b;">THIRAN - </span>CREATIVITY REDEFINED&#xA0;</h1><p>Inspiring and illumining intellect by providing a project based collaborative platform to experiment and experience enlightened education</p><p>Thiran knows the way, goes the way and shows the way</p><p><span style="font-size:18px;"><a href="http://thiran.in/">VISIT US</a></span></p><p><span style="font-size:18px;"><a href="http://read.thiran.in">Blog</a></span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533828817.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">Are you in the dream of becoming an entrepreuner.Dwelling daily in&#xA0; pool of great innovative ideas.Then this is a great place for you to test yourself.Please try it too..</span></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;">ACGCET STARTUP WALLET</h1><h6>Unveil the entrepreneur in you&#xA0;</h6><p>Get your ideas featured in a click.If you can dream it then you can acheive it too.Access resources,get instant helps and kickstart your dream role.</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><a href="https://app.zohocreator.com/mariappangameo/accetwallet#Student_Member_Registration" target="_blank"><img alt="startup image" title="" height="auto" src="https://static-news.moneycontrol.com/static-mcnews/2017/09/Entrepreneurship-770x433.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/contact">contact</a><br><br><a href="http://thiran.in/knowledgebase">knowledgebase</a><br><br><a href="http://thiran.in/yetxplore">yetxplore</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/offlinides">offlinides</a><br><br><a href="http://thiran.in/discusshub">discusshub</a><br><br><a href="http://read.thiran.in">blog</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/novicenet">novicenet</a><br><br><a href="http://thiran.in/devtoolz">devtoolz</a><br><br><a href="http://thiran.in/cloudrunz">cloudrunz</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p>surveybiz<br><br>suggest<br><br>idea wallet</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#949494;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><span style="font-size:12px;">Copyright &#xA9; 2018thiran.in, All rights reserved.&#xA0;<br>keep following us&#xA0;<br>&#xA0;</span><br>&#xA0;</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></body></html>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
        req.flash('success','Submitted successfuly,we will contact you soon');
        res.redirect('/projects/contact');
      }
    });
  }
});


router.get("/contact",(req,res)=>{
  const flashMessages = res.locals.getMessages();
  console.log('flash',flashMessages);

  res.render("contact.pug",{
     success:flashMessages.success
  });
})


router.get("/about_startup",(req,res)=>{
  res.render("about_startup.ejs");
})

router.get("/about_discusshub",(req,res)=>{
  res.render("about_discusshub.ejs");
})


router.get("/kbase",(req,res)=>{
  const flashMessages = res.locals.getMessages();
  console.log('flash',flashMessages);
  res.render("kbase.pug",{
     success:flashMessages.success
  });
})

router.get('/activities',(req,res)=>{
  res.render('activities.pug');
})

router.get('/aboutcodesuite',(req,res) => {
  res.render('about_codesuite.pug');
})

router.get('/about',(req,res) => {
  res.render('about.pug');
})


router.get("/yetxplore",ensureAuthenticated,(req,res) =>{
  res.render('yetxplore.pug');
})

router.get("/offlinides",ensureAuthenticated,(req,res) => {
  const flashMessages = res.locals.getMessages();
  console.log('flash',flashMessages);

  res.render('offlinides.pug',{
     success:flashMessages.success
  });
})

router.get('/novicenet',ensureAuthenticated,(req,res) =>{
  res.render('novicenet.pug');
})

router.get('/codemate',ensureAuthenticated,(req,res) =>{
  res.render('codemate.pug');
})

router.get('/codesuite',ensureAuthenticated,(req,res)=>{
  const flashMessages = res.locals.getMessages();
  console.log('flash',flashMessages);
  res.render('codesuite.pug',{
     success:flashMessages.success
  });
})


router.get('/home',ensureAuthenticated,(req,res) => {
  const flashMessages = res.locals.getMessages();
  console.log('flash',flashMessages);
  res.render('home.pug',{
    success:flashMessages.success
  });
})





router.get("/getcounts_byyear",(req,res)=>{
  Project.aggregate([ {$group: { _id: "$yr", cnt: {$sum: 1} } } ],function(err,response){
    if(err) throw err;
    else{

      res.send(response);
    }
  })

})

router.get("/getcounts_bydept",(req,res)=>{
  Project.aggregate([ {$group: { _id: "$dep", cnt: {$sum: 1} } } ],function(err,response){
    if(err) throw err;
    else{

      res.send(response);
    }
  })

})


router.get('/total_projects_count',(req,res) => {
  Project.find({},(err,projects) =>{
    if(err) throw err;
    else{
         res.send(projects.length);
      //console.log(projects.length);
    }
  })
})


router.get('/get_mech_projects',(req,res)=>{
  Project.find({'dep':'1,'},'name email yr project_title project_description',function(err,projects){
    if(err) throw err;
    else{
         res.send(projects);

      //console.log(projects.length);
    }
  })
})



router.get('/get',(req,res)=>{
  res.render('admin.ejs');
})

router.get('/get_civ_projects',(req,res)=>{
  Project.find({'dep':'2,'},'name email yr project_title project_description',function(err,projects){
    if(err) throw err;
    else{
         res.send(projects);

      //console.log(projects.length);
    }
  })
})




router.get('/get_cse_projects',(req,res)=>{
  Project.find({'dep':'3,'},'name email yr project_title project_description',function(err,projects){
    if(err) throw err;
    else{
         res.send(projects);

      //console.log(projects.length);
    }
  })
})

router.get('/get_eee_projects',(req,res)=>{
  Project.find({'dep':'4,'},'name email yr project_title project_description',function(err,projects){
    if(err) throw err;
    else{
         res.send(projects);

      //console.log(projects.length);
    }
  })
})


router.get('/get_ece_projects',(req,res)=>{
  Project.find({'dep':'5,'},'name email yr project_title project_description',function(err,projects){
    if(err) throw err;
    else{
         res.send(projects);

      //console.log(projects.length);
    }
  })
})

router.get('/get_mca_projects',(req,res)=>{
  Project.find({'dep':'6,'},'name email yr project_title project_description',function(err,projects){
    if(err) throw err;
    else{
         res.send(projects);

      //console.log(projects.length);
    }
  })
})

router.get('/get_4th_yr_projects',(req,res) =>{
  Project.find({'yr':'11'},'name email dep project_title project_description',function(err,projects){
    if(err){
      return err;
    }
    else{
         res.send(projects);
      //console.log(projects);
      //console.log(projects.length);

     }


  })
})

router.get('/get_3rd_yr_projects',(req,res) =>{
  Project.find({'yr':'10'},'name email dep project_title project_description',function(err,projects){
    if(err){
      return err;
    }
    else{
      res.send(projects);
      //console.log(projects);
      //console.log(projects.length);
     }


  })
})


router.get('/get_2nd_yr_projects',(req,res) =>{
  Project.find({'yr':'9'},'name email dep project_title project_description',function(err,projects){
    if(err){
      return err;
    }
    else{
      res.send(projects);
      //console.log(projects);
      //console.log(projects.length);
     }


  })
})



router.get('/get_1st_yr_projects',(req,res) =>{
  Project.find({'yr':'8'},'name email dep project_title project_description',function(err,projects){
    if(err){
      return err;
    }
    else{
      res.send(projects);
      //console.log(projects);
      //console.log(projects.length);
    //   for(i=0;i<projects.length;i++){
    //     console.log(projects[i].name);
    //     console.log(projects[i].project_title);
    //     console.log(projects[i].project_description);
    //     console.log(projects[i].dep);
    //   }

     }


  })
})



router.get('/getprojects',ensureAuthenticated,(req,res) => {
  Project.find({},(err,projects) => {
    if(err) console.log(err);
    else{
      // console.log(projects);
       res.send(projects);
    }
  });
});



router.get('/reg_project/:id',ensureAuthenticated,(req,res) => {
  User.findById(req.params.id,(err,user) => {
    if(err) console.log(err);
    else{
      // console.log(user);
      res.render('reg_projects.pug',{username:user.username,email:user.email});
    }
  })
});


// Add Submit POST Route
router.post('/reg_project', function(req, res){
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  // Get Errors
  let errors = req.validationErrors();

  if(errors){
    res.render('reg_projects.pug', {
      title:'Register my new project',
      errors:errors
    });
  } else {
    let project = new Project();
    project.name = req.body.name;
    project.email = req.body.email;
    project.dep=req.body.dep;
    project.yr=req.body.yr;
    project.feedback=req.body.feedback;
    project.mentor=req.body.mentor;
    project.phoneno=req.body.phoneno;
    project.position = req.body.position;
    project.date = new Date();
    project.teamname =req.body.teamname;
    project.project_title=req.body.project_title;
    project.project_description=req.body.project_description;
    project.experience = req.body.experience;
    project.mentor = req.body.mentor;
    project.pre_yr_project=req.body.pre_yr_project;
    project.pre_project_description=req.body.pre_project_description;
    project.rating=req.body.rating;
    project.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
         const mailOptions = {
  from: 'mariappangameo@gmail.com', // sender address
  to: req.body.email, // list of receivers
  subject: 'submitted Successfully', // Subject line
  html: '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>  <title></title>  <!--[if !mso]><!-- -->  <meta http-equiv="X-UA-Compatible" content="IE=edge">  <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css">  #outlook a { padding: 0; }  .ReadMsgBody { width: 100%; }  .ExternalClass { width: 100%; }  .ExternalClass * { line-height:100%; }  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }  p { display: block; margin: 13px 0; }</style><!--[if !mso]><!--><style type="text/css">  @media only screen and (max-width:480px) {    @-ms-viewport { width:320px; }    @viewport { width:320px; }  }</style><!--<![endif]--><!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]--><!--[if !mso]><!-->    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">    <style type="text/css">        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);  @import url(https://fonts.googleapis.com/css?family=Cabin);    </style>  <!--<![endif]--><style type="text/css">  @media only screen and (min-width:480px) {    .mj-column-per-100 { width:100%!important; }.mj-column-per-50 { width:50%!important; }.mj-column-per-25 { width:25%!important; }  }</style></head><body style="background: #FFFFFF;">    <div class="mj-container" style="background-color:#FFFFFF;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><div style="cursor:auto;color:#B4B4B4;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:center;"><p><span style="font-size:14px;">Thanks for registering your project with us!</span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;background:#ffffff;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:middle;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:middle;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:middle;" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;"><div style="font-size:1px;line-height:18px;white-space:nowrap;">&#xA0;</div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:318px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533826030.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="318"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">This email is just to comfirm that your project has been registerd successfully.</span></p><p><span style="font-size:18px;">Hope you enjoy the entire journey.Incase of any difficulties feel free to contact us.</span></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">You will be assigned a mentor soon and would be guided accordingly.Until that shape your ideas well,train your brain to fight and we will contact you soon</span></p><p><span style="font-size: 18px;">For project related doubts <a href="http://thiran.in">visit our site </a>,you can also get help directly from our OGC members.</span></p><p></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:14px 14px 14px 14px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:348px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533828764.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="348"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:24px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:3px 35px 3px 35px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;"><span style="color:#c0392b;">THIRAN - </span>CREATIVITY REDEFINED&#xA0;</h1><p>Inspiring and illumining intellect by providing a project based collaborative platform to experiment and experience enlightened education</p><p>Thiran knows the way, goes the way and shows the way</p><p><span style="font-size:18px;"><a href="http://thiran.in/">VISIT US</a></span></p><p><span style="font-size:18px;"><a href="http://read.thiran.in">Blog</a></span></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5b6c4e74f12cd/1533828817.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><img alt="" title="" height="auto" src="https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px 20px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:22px;text-align:left;"><p><span style="font-size:18px;">Are you in the dream of becoming an entrepreuner.Dwelling daily in&#xA0; pool of great innovative ideas.Then this is a great place for you to test yourself.Please try it too..</span></p></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#000000;font-family:Cabin, sans-serif;font-size:15px;line-height:22px;text-align:left;"><h1 style="font-family: &apos;Cabin&apos;, sans-serif; line-height: 100%;">ACGCET STARTUP WALLET</h1><h6>Unveil the entrepreneur in you&#xA0;</h6><p>Get your ideas featured in a click.If you can dream it then you can acheive it too.Access resources,get instant helps and kickstart your dream role.</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--><div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"><tbody><tr><td style="width:300px;"><a href="https://app.zohocreator.com/mariappangameo/accetwallet#Student_Member_Registration" target="_blank"><img alt="startup image" title="" height="auto" src="https://static-news.moneycontrol.com/static-mcnews/2017/09/Entrepreneurship-770x433.jpg" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;" width="300"></a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/contact">contact</a><br><br><a href="http://thiran.in/knowledgebase">knowledgebase</a><br><br><a href="http://thiran.in/yetxplore">yetxplore</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/offlinides">offlinides</a><br><br><a href="http://thiran.in/discusshub">discusshub</a><br><br><a href="http://read.thiran.in">blog</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><a href="http://thiran.in/novicenet">novicenet</a><br><br><a href="http://thiran.in/devtoolz">devtoolz</a><br><br><a href="http://thiran.in/cloudrunz">cloudrunz</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:150px;">      <![endif]--><div class="mj-column-per-25 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#929292;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p>surveybiz<br><br>suggest<br><br>idea wallet</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.facebook.com/accetthiran"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/facebook.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.facebook.com/accetthiran" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.com/accetthiran?lang=en"><img alt="twitter" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/twitter.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.com/accetthiran?lang=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle;"><table role="presentation" cellpadding="0" cellspacing="0" style="background:#3f729b;border-radius:3px;width:35px;" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px;"><a href="https://www.instagram.com/thiran2k18/?hl=en"><img alt="instagram" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/outlined/instagram.png" style="display:block;border-radius:3px;" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://www.instagram.com/thiran2k18/?hl=en" style="text-decoration:none;text-align:left;display:block;color:#333333;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;border-radius:3px;"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;"><p style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]-->      <!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" border="0"><tbody><tr><td><div style="margin:0px auto;max-width:600px;"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left"><div style="cursor:auto;color:#949494;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;line-height:22px;text-align:left;"><p><span style="font-size:12px;">Copyright &#xA9; 2018thiran.in, All rights reserved.&#xA0;<br>keep following us&#xA0;<br>&#xA0;</span><br>&#xA0;</p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></body></html>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
        req.flash('success','Project Registered Successfully');
        res.redirect('/projects/home');
      }
    });
  }
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
