import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [name, setName] = useState('');
    const API_URL = import.meta.env.VITE_APP_API_URL;

    return (
        <AuthContext.Provider value={{name, setName,
        token, setToken, API_URL}}>
            {children}
        </AuthContext.Provider>
    )
}