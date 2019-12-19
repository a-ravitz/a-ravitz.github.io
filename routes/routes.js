var dotenv = require('dotenv')
dotenv.config()
var nodeMailer = require('nodemailer');

module.exports = function(app) {

    app.get('/', function (req, res) {
        res.render('index');
    });

    //route that send an email via nodemailer to my email address from my portfolios email address
    app.post('/send-email', function (req,res) {

        //specific configuration for gmail 
        var smtpConfig = {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: 'adam.ravitz.portfolio@gmail.com',
                pass: process.env.PORTFOLIO_PASS
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
            // res.redirect('/');

        }
    });
    })
}