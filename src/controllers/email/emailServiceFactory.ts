import * as nodemailer from 'nodemailer';
import {emailConfig} from '@/configs/appConfig';
import { awsSESInstance } from './awsSES';

export const getEmailTransporter = ():nodemailer.Transporter|null => {
    const {serviceProvider} = emailConfig;
    switch(serviceProvider) {
        case('aws-ses'): {
            return awsSESInstance;
        }
        default: {
            console.error("INVALID_EMAIL_CONFIG");
            return null;
        }
    }
}