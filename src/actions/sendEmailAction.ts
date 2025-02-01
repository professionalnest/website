'use server'

import {sendEmailService} from '@/services/emailService';

export const sendEmailAction = async (formData:FormData) => {
    const toAddress = formData.get('toAddress') as string;
    const emailSubject = 'Test email from ProNest app';
    const emailBody = 'This is test email from ProNest app.';

    const emailSendStatus = await sendEmailService(toAddress, emailSubject, emailBody);
    if (emailSendStatus === true) {
        console.log('email sent successfully!')
    }
}