import { getAnalyticsClient, AnalyticsServiceInterface } from '@/controllers/analytics/analyticsServiceFactory';

const analyticsClient:AnalyticsServiceInterface = getAnalyticsClient()!;

export const captureAnalyticsEvent = async (captureObj: any): Promise<boolean> => {
    if (!analyticsClient) {
        return false;
    }

    try {
        await analyticsClient.captureEvent(captureObj);
        return true;
    } catch (error){
        console.error(error);
        return false;
    }
}