import nodemailer from "nodemailer";
import { MailOptions } from "../type/nodeMailer_type";



const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,

  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.SMTP_MAIL ,
    pass: process.env.SMTP_APP_PASS,
  },
  authMethod: "LOGIN", 
});



const sendEmail = async (mailOptions: MailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent", info.messageId);
    return true
  } catch (error) {
    console.error("Error sending email:", error);
    return false
  }
};

export default sendEmail;
