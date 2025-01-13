import { getAccessToken } from "./getUserDataFromBrowser";

export const getAuthorizationString = () => {
    return `Bearer ${getAccessToken()}`;
}