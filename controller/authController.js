const bcrypt = require('bcryptjs');
const User =require('../models/user');
const Mailer=require('../util/mailer');
const Otp =require('../models/otp');
let status;
exports.login=(req, res, next)=>{
    res.render('auth/login',{
        status:status
    })
    status='';
};
exports.authenticat=(req, res, next)=>{
   const username=req.body.user_name;
   const pass_word=req.body.password;
   User.findOne({where:{email:username}})
   .then(usr=>{
       if(!usr){
            status='Incorrect email';
           return res.redirect('/auth');
       }
       bcrypt.compare(pass_word,usr.password)
       .then(result=>{
           if(!result){
            status='Incorrect password';
            return res.redirect('/auth');
           }
        req.session.islogin=true;
        res.redirect('/admin#about');
       })
       .catch(err=>{
        status='Something wrong try again!!';
        return res.redirect('/auth');
       });
        
   })
   .catch(err=>{
    status='Something wrong try again!!';
    return res.redirect('/auth');
   });
   
};
exports.logout=(req, res, next)=>{
    req.session.destroy();
    status='Visit Again';
    res.redirect('/auth');
};
// bcrypt.hash(password,12)
//.then(has=>{
//    req.session.islogin=true;
 //   res.redirect('/admin#about');
//    })

exports.forgetRequest=(req, res, next)=>{
  res.render('auth/forgot',{
      for_req: true,
      for_otp:false
  });
};

exports.reqOtp=(req, res, next)=>{
    let rand=Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
    const mail=req.body.email_s;
    User.findOne({where:{email:mail}})
    .then(result=>{
        if(!result){
            status='Email not found';
            return res.redirect('/auth');
        }
        else{
        Mailer.sendMail({
            to: mail,
            from: 'das.sudipta94@gmail.com',
            subject:'Hello Root User',
            text: 'Request For Forget Password',
            html:'<body bgcolor="gray"><h1>OTP:'+rand+'</h1></body>'
        })
        Otp.create({
            email:mail,
            otps:rand
        })
        .then(resu=>{
            res.render('auth/forgot',{
                for_req: false,
                for_otp:true,
                status:''
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
    })
    .catch(err=>{
        console.log(err);
    });
}

exports.validateOtp=(req,res,next)=>{
    const otp=req.body.otp;
    const password=req.body.password;
    const conpass=req.body.confirm;
    if(password!= conpass){
        res.render('auth/forgot',{
            status:'Password not match',
            for_req: false,
            for_otp:true
    });
} else {
    Otp.findOne({where:{otps:otp}})
    .then(usr=>{
        if(!usr){
            res.render('auth/forgot',{
                status:'Incorrect OTP',
                for_req: false,
                for_otp:true
        });
        }
        if(!usr){
            res.render('auth/forgot',{
                status:'Incorrect OTP',
                for_req: false,
                for_otp:true
        });
        }
        User.findOne({where:{email:usr.email}})
        .then(user=>{
            if(!user){
                return res.redirect('/auth')
            }
            bcrypt.hash(password,12)
            .then(hash=>{
                User.update({
                    password:hash
                },{where:{email:user.email}})
                .then(re=>{
                    Otp.destroy({where:{email:user.email}});
                    status='Password Successfully Change!!!';
                    res.redirect('/auth');
                })
            })
        })
        .catch(err=>{
            console.log(err);
        });
    })
    .catch(err=>{
        console.log(err);
    });
};
};