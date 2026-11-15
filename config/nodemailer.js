const nodemailer = require("nodemailer");


async function mailsender (email){

    const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, 
    auth: {
    user: 'ariyanakash01303@gmail.com',
    pass: 'mjyunifbivrgixfl',
  },
});


try {
    const info = await transporter.sendMail({
    from: '"sonar bank thke bolchi" <ariyanakash01303@gmail.com>', // sender address
    to: email, // list of recipients
    subject: "Hello", // subject line
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
}

};

module.exports = mailsender;