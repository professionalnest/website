import * as nodemailer from 'nodemailer';
import {emailConfig} from '@/configs/appConfig';
import { awsSESInstance } from './awsSES';

export interface EmailServiceInterface extends nodemailer.Transporter {}

export const getEmailTransporter = ():EmailServiceInterface|null => {
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