import {getToken} from "./getToken";
import {redirect} from "react-router-dom";


export const AuthRouteLoader = () => {
    const token = getToken()
    if (!token) {
        return redirect('/')
    }
    return null
}

export const SignInLoader = () => {
    const token = getToken()
    if (token) {
        return redirect('/')
    }
    return null
}