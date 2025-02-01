import { AWS_ACESS_KEY_ID, AWS_SECRET_ACESS_KEY, AWS_REGION } from "./appConfig"

export const getAWSCredentials = () => {
    return {
        accessKeyId: AWS_ACESS_KEY_ID!,
        secretAccessKey: AWS_SECRET_ACESS_KEY!
    };
};

export const getAWSRegion = () => {
    return AWS_REGION;
};