const path = require('path');
const express=require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const Education =require('./models/education');
const Contact =require('./models/contact');
const Skills =require('./models/skill');
const About =require('./models/about');
const Project =require('./models/project');
const Blog =require('./models/blog');
const User =require('./models/user');
const Otp =require('./models/otp');
const multer = require('multer');
const session = require('express-session');
const app=express();
const fileStorage =multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g,'-') + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
app.set('view engine', 'ejs');
app.set('views', 'views');
const public_route= require('./routers/public');
const auth_route = require('./routers/auth');
const admin_route = require('./routers/admin');
const errorController = require('./controller/errorController');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(
  session({ secret: 'my secret', resave: false, saveUninitialized: false })
);
app.use('/admin', admin_route);
app.use('/auth', auth_route);
app.use(public_route);

app.use(errorController.errorController);
sequelize
.sync()
.then(result=>{
    app.listen(4000);
})
.catch(err=>{
    console.log(err);
});
