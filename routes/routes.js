module.exports = function(app) {

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/send-email', function (req,res) {
  console.log(req.body)
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: 'adam.ravitz.portfolio@gmail.com',
        pass: 'R@v1tz87'
    }
  };
var transporter = nodeMailer.createTransport(smtpConfig);

var mailOptions = {
    from: 'adam.ravitz.portfolio@gmail.com',
    to: 'adam.ravitz@gmail.com',
    subject:  `a message from your portfolio from ${req.body.name}`,
    text: `${req.body.message} \nyou can respond to them at ${req.body.email}`
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
        res.redirect('/');

    }
});
})

}