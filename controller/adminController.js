const Education= require('../models/education');
const Skills= require('../models/skill');
const About= require('../models/about');
const Project= require('../models/project');
const Contact=require('../models/contact');
const Blog=require('../models/blog');
const fileDeleter =require('../util/file');
exports.adminHome = (req, res, next) => {
    Education.findAll()
    .then(education =>{
        Skills.findAll()
        .then(skill=>{
            About.findOne({ 'id': 1})
            .then(about=>{
                Project.findAll()
                .then(project=>{
                    Blog.findAll()
                    .then(blog=>{
                        Contact.findAll({where: {read_status:'0'},order:[['id','DESC']]})
                        .then(new_messege=>{
                            Contact.findAll({where: {read_status:'1'},order:[['id','DESC']]})
                            .then(old_message=>{
                                res.render('admin/admin', {
                                    education: education,
                                    skill: skill,
                                    about:about,
                                    project:project,
                                    blog:blog,
                                    new_messege:new_messege,
                                    old_message:old_message
                                });
                            });
                        });
                    });
                });    
            });
        });    
    })
    .catch(err =>{
        console.log(err);
    });
};
exports.postSkill = (req, res, next)=>{
    const skill_name=req.body.skill_name;
    const skill_persent=req.body.skill_persent;
    Skills.create({
        sk: skill_name,
        value: skill_persent
    })
    .then(result=>{
        res.redirect('/admin#about');
    })
    .catch(err=>{
        console.log(err);
    });
};
exports.postDegree =(req, res, next)=>{
    const clg_name=req.body.clg_name;
    const degree=req.body.degree;
    Education.create({
        clg_name: clg_name,
        degree: degree
    })
    .then(result=>{
        res.redirect('/admin#about');
    })
    .catch(err=>{
        console.log(err);
    });
};
exports.postProject= (req, res, next)=>{
    const image= req.file;
    const url=image.path;
    const title= req.body.title;
    const description= req.body.description;
    const link= req.body.link;
    Project.create({
        project_pic:url,
        project_link:link,
        project_name:title,
        project_details:description
    })
    .then(result=>{
        res.redirect('/admin#project');
    })
    .catch(err=>{
        console.log(err);
    });
};
exports.postBlog= (req, res, next)=>{
    const image= req.file;
    const url=image.path;
    const title= req.body.title;
    const description= req.body.description;
    Blog.create({
        imageUrl:url,
        title:title,
        description:description
    })
    .then(result=>{
        res.redirect('/admin#blog');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.postDegreeDelete= (req, res, next)=>{
    const id=req.body.degree_id;
    Education.destroy({ where: { id: id } })
    .then(result=>{
        res.redirect('/admin#about');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.postSkillDelete= (req, res, next)=>{
    const id=req.body.skill_id;
    Skills.destroy({where: {id:id } })
    .then(result=>{

        res.redirect('/admin#about');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.postProjectDelete= (req, res, next)=>{
    const id=req.body.project_id;
    const url = req.body.image_url;
    fileDeleter.deletefile(url)
    Project.destroy({where: {id:id } })
    .then(result=>{
            res.redirect('/admin#project');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.postBlogDelete= (req, res, next)=>{
    const id=req.body.blog_id;
    const url=req.body.image_url;
    fileDeleter.deletefile(url)
    Blog.destroy({where: {id:id } })
    .then(result=>{
        res.redirect('/admin#blog');
    })
    .catch(err=>{
        console.log(err);
    });
};
exports.postReadedMessage=(req, res, next)=>{
    const id=req.body.contact_id;
    Contact.update({
        read_status:1,
    },{where: {id:id}})
    .then(result=>{
        res.redirect('/admin#contact');
    })
    .catch(err=>{
        console.log(err);
    });
};
exports.postDleteMessage=(req, res, next)=>{
    const id=req.body.contact_id;
    Contact.destroy({where: {id:id}})
    .then(result=>{
        res.redirect('/admin#contact');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.skillNoteUpdate=(req, res, next)=>{
    const SkillNote=req.body.SkillNote;
    About.update({
        skill_note:SkillNote,
    },{where: {id:1}})
    .then(result=>{
        res.redirect('/admin#about');
    })
    .catch(err=>{
        console.log(err);
    });
};

exports.objectiveUpdate=(req, res, next)=>{
    const objective=req.body.objective;
    About.update({
        objective:objective,
    },{where: {id:1}})
    .then(result=>{
        res.redirect('/admin#about');
    })
    .catch(err=>{
        console.log(err);
    });
};
exports.editDegree=(req, res, next)=>{
    const id=req.body.degree_id;
    Education.findOne({where:{ id:id}})
    .then(education=>{
        res.render('admin/edit',{
            education:education,
            up_edu:true,
            up_pro:false,
            up_blg:false
        });
    })
    .catch(err =>{
        console.log(err);
    });
};

exports.editProject=(req, res, next)=>{
    const id=req.body.project_id;
    Project.findOne({where:{ id:id}})
    .then(project=>{
        res.render('admin/edit',{
            project:project,
            up_edu:false,
            up_pro:true,
            up_blg:false
        });
    })
    .catch(err =>{
        console.log(err);
    });
};

exports.editBlog=(req, res, next)=>{
    const id=req.body.blog_id;
    Blog.findOne({where:{ id:id}})
    .then(blog=>{
        res.render('admin/edit',{
            blog:blog,
            up_edu:false,
            up_pro:false,
            up_blg:true
        });
    })
    .catch(err =>{
        console.log(err);
    });
};
exports.updateDegree=(req, res, next)=>{
    const id=req.body.id;
    const clg_name=req.body.clg_name;
    const degree=req.body.degree;
    Education.update({
        clg_name:clg_name,
        degree:degree},{
            where:{id:id}
        })
        .then(result=>{
            res.redirect('/admin#about');
        })
        .catch(err=>{
            console.log(err);
        });
};
exports.updateProject=(req, res, next)=>{
    const id=req.body.id;
    const url=req.file;
    const project_link=req.body.project_link;
    const project_name=req.body.project_name;
    const project_details=req.body.project_details;
    const url2 = req.body.image_url;
    if(!url) {
        Project.update({
            project_link:project_link,
            project_name:project_name,
            project_details:project_details},{
                where:{id:id}
        })
        .then(result=>{
            res.redirect('/admin#project');
        })
        .catch(err=>{
            console.log(err);
    });
    } else{
        const project_pic= url.path;
        fileDeleter.deletefile(url2)
        Project.update({
            project_pic:project_pic,
            project_link:project_link,
            project_name:project_name,
            project_details:project_details},{
                where:{id:id}
        })
        .then(result=>{
            res.redirect('/admin#project');
        })
        .catch(err=>{
            console.log(err);
    });
    }   
};

exports.updateBlog=(req, res, next)=>{
    const id=req.body.id;
    const title=req.body.title;
    const description=req.body.description;
    const url=req.file;
    const url2 = req.body.image_url;
    if(!url){
        Blog.update({
            title:title,
            description:description,
            },{
                where:{id:id}
            })
            .then(result=>{
                res.redirect('/admin#blog');
            })
            .catch(err=>{
                console.log(err);
        });
    } else {
        const imageUrl=url.path;
        fileDeleter.deletefile(url2)
        Blog.update({
            title:title,
            description:description,
            imageUrl:imageUrl,},{
                where:{id:id}
            })
            .then(result=>{
                res.redirect('/admin#blog');
            })
            .catch(err=>{
                console.log(err);
        });
    }
    
};

exports.updateProfilePic=(req, res, next)=>{
    const image=req.file;
    const url2 = req.body.image_url;
    const profile_pic=image.path;
    console.log(profile_pic);
    fileDeleter.deletefile(url2)
    About.update({
        profile_pic:profile_pic,},{where:{id:1}}
    )
    .then(result=>{
        res.redirect('/admin#about');
    })
    .catch(err=>{
        console.log(err);
});
};