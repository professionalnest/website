export const {
    AWS_ACESS_KEY_ID, AWS_SECRET_ACESS_KEY, AWS_REGION,
    NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST
} = process.env;

export const emailConfig = {
    serviceProvider: 'aws-ses',
    fromAddress: 'no-reply@pronest.co.in',
    charset: "UTF-8"
}

export const analyticsConfig = {
    serviceProvider: 'posthog'
}