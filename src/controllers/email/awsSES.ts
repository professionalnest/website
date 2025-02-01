import * as nodemailer from 'nodemailer';
import { SES } from "@aws-sdk/client-ses";
import {SendRawEmailCommand} from  "@aws-sdk/client-ses";
import { getAWSCredentials, getAWSRegion } from "@/configs/awsConfig";

const getSESServiceObject = () => {
  return new SES({
    region: getAWSRegion(),
    credentials: getAWSCredentials()
  });
}

export const awsSESInstance:nodemailer.Transporter = nodemailer.createTransport({ SES: {ses: getSESServiceObject(), aws: {SendRawEmailCommand}} });