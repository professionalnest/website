'use server'

import { emailConfig } from '@/configs/appConfig';
import {sendEmailService} from '@/services/emailService';

export const sendEmailAction = async (formData:FormData) => {
    const {toAddress} = emailConfig;

    const emailSubject = 'CONTACT US FORM SUBMISSION ON PRONEST WEBSITE';

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const emailBody = `
            Full Name: ${fullName} <br/>
            Email: ${email} <br/>
            Message: ${message} <br/>
        `;

    const emailSendStatus = await sendEmailService(toAddress, emailSubject, emailBody);
    if (emailSendStatus === true) {
        console.log('email sent successfully!')
    }
}