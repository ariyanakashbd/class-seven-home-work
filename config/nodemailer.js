 const nodemailer = require("nodemailer");


async function mailSender (email){
   

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, 
  auth: {
    user: "ariyanakash01303@gmail.com",
    pass:'foxzbrqcmmhvzida',
  },
});

try {
  const info = await transporter.sendMail({
    from: '"Example Team" <ariyanakash01303@gmail.com>', 
    to:email ,
    subject: "Hello", 
    html: `<body style="margin:0;padding:30px;background:#f1f5f9;font-family:Arial,sans-serif"><div style="max-width:550px;margin:auto;background:#fff;border-radius:12px;overflow:hidden"><div style="background:#172554;padding:30px;text-align:center"><h1 style="color:#fff;margin:0">Login Successful!</h1><p style="color:#dbeafe">Account Security Notification</p></div><div style="padding:30px"><h2 style="color:#172554">Hello Ariyan!</h2><p style="color:#475569;line-height:1.7">Great news! You have successfully logged in to your account.</p><div style="background:#f0fdf4;padding:20px;border-radius:8px"><h3 style="color:#166534">Login Details</h3><p style="color:#334155"><strong>Email:</strong>user@gmail.com</p><p style="color:#334155"><strong>Status:</strong>Successful</p><p style="color:#334155"><strong>Activity:</strong>Account Login</p></div><p style="color:#64748b;line-height:1.7">If you did not log in to your account, please change your password immediately.</p><hr style="border:1px solid #e2e8f0"><p style="text-align:center;color:#64748b">Thank you for using our platform.<br><br><strong>Your Website Team</strong></p></div></div></body>`, 
  });

  console.log("Message sent: %s", info.messageId);
 
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
};
};

module.exports = mailSender;