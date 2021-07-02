var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'snehawadhwani47326@gmail.com',
        pass:'ssdn1234'
    }
});
 const  mailOptions = {
    from: 'snehawadhwani47326@gmail.com',
    to: 'wadhwanivishal148@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions,(error,info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });