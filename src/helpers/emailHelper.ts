
import nodemailer from "nodemailer";
import mailgun from "nodemailer-mailgun-transport";
import { config } from "../app/config";



// if (!config.email.api_key || !config.email.domain) {
//   throw new Error("Mailgun configuration is missing in .env");
// }


// export const SendEmail = async (
//   EmailTo: string,
//   EmailSubject: string,
//   EmailText: string
// ) => {
//   const auth = {
//     auth: {
//       api_key: config.email.api_key  as string,
//       domain: config.email.domain  as string,
//     },
//   };

//   const transporter = nodemailer.createTransport(mailgun(auth));


//   const mailOptions = {
//     from: `${config.email.header_name} <${config.email.from}>`,
//     to: EmailTo,
//     subject: EmailSubject,
//     text: EmailText,
//   };

//   return await transporter.sendMail(mailOptions);
// };


export const SendEmail = async (
  EmailTo: string,
  EmailSubject: string,
  EmailText: string,
 
) => {
  try {
    const auth = {
      auth: {
        api_key: config.email.api_key  as string,
        domain: config.email.domain  as string,
      },
    };

    const transporter = nodemailer.createTransport(mailgun(auth));

    const mailOptions = {
      from: `${config.email.header_name} <${config.email.from}>`,
      to: EmailTo,
      subject: EmailSubject,
      text: EmailText,
   
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (error: any) {
    console.error("SendEmail error:", error.message);
    throw new Error("Failed to send email");
  }
};