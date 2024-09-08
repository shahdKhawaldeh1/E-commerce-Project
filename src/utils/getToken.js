import {jwtDecode} from "jwt-decode";

export const getToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
        const decoded = jwtDecode(token);

        const isTokenExpired = decoded.exp < Date.now() / 1000;

        if (isTokenExpired) {
            return null;
        }

        return token;
    }

    return null;
};
