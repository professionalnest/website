export const {
    AWS_ACESS_KEY_ID, AWS_SECRET_ACESS_KEY, AWS_REGION,
    CONTACT_US_FORM_DESTINATION_EMAIL,
    NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST
} = process.env;

export const emailConfig = {
    serviceProvider: 'aws-ses',
    fromAddress: 'no-reply@pronest.co.in',
    toAddress: CONTACT_US_FORM_DESTINATION_EMAIL!,
    charset: "UTF-8"
}

export const analyticsConfig = {
    serviceProvider: 'posthog'
}