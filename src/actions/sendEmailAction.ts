'use server'

import { emailConfig } from '@/configs/appConfig';
import {sendEmailService} from '@/services/emailService';

const sendEmailAction = async (emailSubject:string, emailBody:string) => {
    const {toAddress} = emailConfig;

    const emailSendStatus = await sendEmailService(toAddress, emailSubject, emailBody);
    if (emailSendStatus === true) {
        console.log('email sent successfully!')
    }
}

export const contactUsSubmissionAction = async (formData:FormData) => {
    const emailSubject = 'CONTACT US FORM SUBMISSION ON PRONEST WEBSITE';

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const emailBody = `
            Full Name: ${fullName} <br/>
            Email: ${email} <br/>
            Message: ${message} <br/>
        `;

    await sendEmailAction(emailSubject, emailBody);
}

export const getStartedSubmissionAction = async (formData:FormData) => {
    const emailSubject = 'GET STARTED FORM SUBMISSION ON PRONEST WEBSITE';

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const emailBody = `
            Full Name: ${fullName} <br/>
            Email: ${email} <br/>
            Message: ${phone} <br/>
        `;
    
    await sendEmailAction(emailSubject, emailBody);
}