import { NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST } from "./appConfig"

export const getPosthogConfig = () => {
    return {
        POSTHOG_KEY: NEXT_PUBLIC_POSTHOG_KEY!,
        POSTHOG_HOST: NEXT_PUBLIC_POSTHOG_HOST!
    };
};