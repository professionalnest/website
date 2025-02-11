'use server'

import { emailConfig } from '@/configs/appConfig';
import {sendEmailService} from '@/services/emailService';
import { validateContactUsMessge, validateEmail, validateFullName, validatePhone } from '@/utils/userInputValidator';

const sendEmailAction = async (emailSubject:string, emailBody:string) => {
    const {toAddress} = emailConfig;

    const emailSendStatus = await sendEmailService(toAddress, emailSubject, emailBody);
    if (emailSendStatus === true) {
        return { status: true };
    } else {
        return {
            status: false,
            errorCode: "EMAIL_SEND_ERROR"
        }
    }
}

export const contactUsSubmissionAction = async (formData:FormData) => {
    
    // EXTRACT & VALIDATE USER INPUT
    const fullName = formData.get('fullName') as string;
    const fullNameValidation = validateFullName(fullName);
    const email = formData.get('email') as string;
    const emailValidation = validateEmail(email);
    const message = formData.get('message') as string;
    const messageValidation = validateContactUsMessge(message);

    if (fullNameValidation === true &&
        emailValidation === true &&
        messageValidation === true) {
            // GENERATE EMAIL BODY
            const emailBody = `
                    Full Name: ${fullName} <br/>
                    Email: ${email} <br/>
                    Message: ${message} <br/>
                `;

        const emailSubject = 'CONTACT US FORM SUBMISSION ON PRONEST WEBSITE';
        const emailSendStatus = await sendEmailAction(emailSubject, emailBody);
        return emailSendStatus;
    } else if (fullNameValidation != true) {
        return {
            status: false,
            errorCode: 'FULL_NAME_VALIDATION_FAILURE'
        };
    } else if (emailValidation != true) {
        return {
            status: false,
            errorCode: 'EMAIL_VALIDATION_FAILURE'
        };
    } else if (messageValidation != true) {
        return {
            status: false,
            errorCode: 'MESSAGE_VALIDATION_FAILURE'
        };
    }
    return {
        status: false,
        errorCode: 'UNKOWN_ERROR'
    }
}

export const getStartedSubmissionAction = async (formData:FormData) => {
    

    // EXTRACT & VALIDATE USER INPUT
    const fullName = formData.get('fullName') as string;
    const fullNameValidation = validateFullName(fullName);
    const email = formData.get('email') as string;
    const emailValidation = validateEmail(email);
    const phone = formData.get('phone') as string;
    const phoneValidation = validatePhone(phone);

    if (fullNameValidation === true &&
        emailValidation === true &&
        phoneValidation === true) {
        // GENERATE EMAIL BODY
        const emailBody = `
                Full Name: ${fullName} <br/>
                Email: ${email} <br/>
                Phone: ${phone} <br/>
            `;
        
        const emailSubject = 'GET STARTED FORM SUBMISSION ON PRONEST WEBSITE';
        const emailSendStatus = await sendEmailAction(emailSubject, emailBody);
        return emailSendStatus;
    } else if (fullNameValidation != true) {
        return {
            status: false,
            errorCode: 'FULL_NAME_VALIDATION_FAILURE'
        };
    } else if (emailValidation != true) {
        return {
            status: false,
            errorCode: 'EMAIL_VALIDATION_FAILURE'
        };
    } else if (phoneValidation != true) {
        return {
            status: false,
            errorCode: 'PHONE_VALIDATION_FAILURE'
        };
    }
    return {
        status: false,
        errorCode: 'UNKOWN_ERROR'
    }
}