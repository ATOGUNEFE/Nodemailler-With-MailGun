const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
      api_key: '4fbed443cf9f396fe9546f9109f671f4-e470a504-5be92eb9',
      domain: 'sandbox82ff252ef4d547f89368fbb758bd4def.mailgun.org'
    }
}

const transport = nodemailer.createTransport(mailGun(auth));


let mailOPtions = {
  from:'atogune@gmail.com',
  to:'atogune@gmail.com',
  subject:'node test',
  text:'It works'
}

transporter.sendMail(mailOPtions, function(err,data) {
  if(err){
    console.log('error occoured' , err)
  }else{
    console.log('message sent')
  }
})