import { PostHog } from 'posthog-node';
import { getPosthogConfig } from '@/configs/posthogConfig';
import { AnalyticsServiceInterface } from './analyticsServiceFactory';

let posthogClient:PostHog|null = null;

const initializePosthogObject = function() {

    const {POSTHOG_KEY, POSTHOG_HOST} = getPosthogConfig();

    if (!posthogClient) {
        posthogClient = new PostHog(
            POSTHOG_KEY!,
            { host: POSTHOG_HOST! }
        );
    }
}

const closePosthogConnection = async () => {
    if (posthogClient) await posthogClient.shutdown()
}

const captureAnalyticsEvent = async (eventObj:any) => {
    if (!posthogClient) initializePosthogObject();
    try {
        posthogClient!.capture(eventObj);
    } catch(error) {
        console.error(error);
        return false;
    } finally {
        await closePosthogConnection();
        return true;
    }
}

export const postHogInstance:AnalyticsServiceInterface = {
    captureEvent: captureAnalyticsEvent
}