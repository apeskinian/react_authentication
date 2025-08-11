import { redirect } from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem('token');
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