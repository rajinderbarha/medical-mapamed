// export const sendGAEvent = (eventName: string, params: Record<string, any> = {}) => {
//     if (typeof window !== "undefined" && (window as any).gtag) {
//         (window as any).gtag("event", eventName, params);
//     }
// };


type GAEventParams = Record<string, string | number | boolean | undefined>;

export const sendGAEvent = (
    eventName: string,
    params: GAEventParams = {}
): void => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
    }
};
