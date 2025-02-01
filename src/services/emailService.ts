import {emailConfig} from '@/configs/appConfig';
import { EmailServiceInterface, getEmailTransporter } from '@/controllers/email/emailServiceFactory';

const emailTransporter:EmailServiceInterface = getEmailTransporter()!;

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
            text: emailBody,
            // html: ""
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}