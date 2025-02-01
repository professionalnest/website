import * as nodemailer from 'nodemailer';
import { SES } from "@aws-sdk/client-ses";
import {SendRawEmailCommand} from  "@aws-sdk/client-ses";
import { getAWSCredentials, getAWSRegion } from "@/configs/awsConfig";
import { EmailServiceInterface } from './emailServiceFactory';

const getSESServiceObject = () => {
  return new SES({
    region: getAWSRegion(),
    credentials: getAWSCredentials()
  });
}

export const awsSESInstance:EmailServiceInterface = nodemailer.createTransport({ SES: {ses: getSESServiceObject(), aws: {SendRawEmailCommand}} });