export function formatTimestamp(timestamp: Date) {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };
    return date.toLocaleString("en-US", options); // Use a valid locale like "en-US"
}

export function truncateString(str: string, limit = 20) {
    if (str.length > limit) {
        return str.substring(0, limit) + "...";
    }
    return str;
}
