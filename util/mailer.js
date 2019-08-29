const nodemailer= require('nodemailer');
const transporter=nodemailer.createTransport({service:'gmail',
    auth:{
        user: 'find.sudipta.das@gmail.com',
        pass: '1228756452'
    }
});
module.exports = transporter;
