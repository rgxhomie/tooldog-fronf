export const fp = () => {
    let fingerprint = '';

    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const colorDepth = screen.colorDepth;
    const timeZoneOffset = new Date().getTimezoneOffset();

    fingerprint += userAgent + language + screenWidth + screenHeight + colorDepth + timeZoneOffset;

    var hash = 0, i, chr;
    for (i = 0; i < fingerprint.length; i++) {
        chr   = fingerprint.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }

    return hash.toString();
};
