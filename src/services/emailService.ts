import {emailConfig} from '@/configs/appConfig';
import { getEmailTransporter } from '@/controllers/email/emailServiceFactory';
import * as nodemailer from 'nodemailer';

const emailTransporter:nodemailer.Transporter = getEmailTransporter()!;

export const sendEmailService = async (toAddress:string, emailSubject:string, emailBody:string) => {
    
    if (!emailTransporter) {
        return false;
    }

    const {fromAddress} = emailConfig;

    try {
        await emailTransporter.sendMail({
            from: fromAddress,
            to: toAddress,
            subject: emailSubject,
            // text: ``,
            html: emailBody
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}