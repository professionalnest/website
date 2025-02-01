import { analyticsConfig } from '@/configs/appConfig';
import { postHogInstance } from './posthog';

export interface AnalyticsServiceInterface { 
    captureEvent: (captureObj: undefined) => Promise<boolean>; 
}

export const getAnalyticsClient = (): AnalyticsServiceInterface|null => {
    const { serviceProvider } = analyticsConfig;
    switch (serviceProvider) {
        case 'posthog': {
            return postHogInstance;
        }
        default: {
            console.error("INVALID_ANALYTICS_CONFIG");
            return null;
        }
    }
}