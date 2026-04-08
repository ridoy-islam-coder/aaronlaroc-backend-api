"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_mailgun_transport_1 = __importDefault(require("nodemailer-mailgun-transport"));
const config_1 = require("../app/config");
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
const SendEmail = async (EmailTo, EmailSubject, EmailText) => {
    try {
        const auth = {
            auth: {
                api_key: config_1.config.email.api_key,
                domain: config_1.config.email.domain,
            },
        };
        const transporter = nodemailer_1.default.createTransport((0, nodemailer_mailgun_transport_1.default)(auth));
        const mailOptions = {
            from: `${config_1.config.email.header_name} <${config_1.config.email.from}>`,
            to: EmailTo,
            subject: EmailSubject,
            text: EmailText,
        };
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.messageId);
        return info;
    }
    catch (error) {
        console.error("SendEmail error:", error.message);
        throw new Error("Failed to send email");
    }
};
exports.SendEmail = SendEmail;
