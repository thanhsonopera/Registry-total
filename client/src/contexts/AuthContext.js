import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducers/authreducer";
import { apiUrl, localStorageTokenName } from "./constants";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [autState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isaAuthenticated: false,
        user: null
    });

    const loginUser = async userForm => {
        try {
            const response = axios.post(`https://localhost:5000/api/auth/login`, userForm);
            if(response.data.success) {
                localStorage.setItem(localStorageTokenName, response.data.accessToken);

                return response.data;
            }
        } catch (error) {
            if(error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    }

    // Context data

    const authContextData = { loginUser };

    // Return provider

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;