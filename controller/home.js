const Education= require('../models/education');
const Skills= require('../models/skill');
const About= require('../models/about');
const Project= require('../models/project');
const Contact=require('../models/contact');
const Blog=require('../models/blog');
const Mailer=require('../util/mailer');
let pop_status;
let pop_msg='Message Sent';
exports.getIndex = (req, res, next) => {
    Education.findAll({order:[['id','DESC']]})
    .then(education =>{
        Skills.findAll()
        .then(skill=>{
            About.findOne({ 'id': 1})
            .then(about=>{
                Project.findAll()
                .then(project=>{
                    Blog.findAll()
                    .then(blog=>{
                        res.render('local/index', {
                            education: education,
                            skill: skill,
                            about:about,
                            project:project,
                            blog:blog,
                            pop_status:pop_status,
                            pop_msg:pop_msg
                        });
                        pop_status=false;
                    });
                });    
            });
        });
        
    })
    .catch(err =>{
        console.log(err);
    });
};
 exports.postContact = (req, res, next)=>{
    const name =req.body.name;
    const email=req.body.email;
    const message=req.body.message;
    const cheak=req.body.cheak_for_email;
    Contact.create({
        name: name,
        email: email,
        message: message,
        read_status: 0
    })
    .then(result=>{
        if(cheak) {
            Mailer.sendMail({
                to: email,
                from: 'das.sudipta94@gmail.com',
                subject:'Hello'+name,
                text:message,
                html:'<body bgcolor="gray"><h1>'+message+'</h1></body>'
            });
        }
        pop_status=true;
        res.redirect('/#contact');
        
    })
    .catch(err =>{
        console.log(err);
    });
 };