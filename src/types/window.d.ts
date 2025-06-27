export {};

declare global {
    interface Window {
        gtag?: (...args: [command: string, eventName: string, params?: Record<string, string | number | boolean | undefined>]) => void;
    }
}
