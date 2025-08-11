import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return null;
    }
    
    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

// protecting a route by checking for a token and using this as a loader
export function checkAuthLoader() {
    const token = getAuthToken();
    if (!token) {
        return redirect('/auth');
    }
    return null;
}