import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:456,
    secure: true,
    service: 'gmail',
    auth: {
        user: 'tahaelatoui3@gmail.com',
        pass: 'twhi fwvo jrop ronx',
    }
});

export const sendMail = async (_, res) =>{
    const source = fs.readFileSync('template_mail.html', 'utf-8').toString();
    const template = handlebars.compile(source);
    const replacements = {
        firstName
    }
}