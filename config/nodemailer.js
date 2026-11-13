const nodemailer = require("nodemailer");


async function mailsender(email){
    const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, 
  auth: {
    user:'ariyanakash01303@gmail.com',
    pass: 'ycbxlcqwnpnlkziy',
  },
});


try {
  const info = await transporter.sendMail({
    from: '"Example Team" <ariyanakash01303@gmail.com>',
    to: email, 
    subject: "Hello", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
};

};

module.exports = mailsender;