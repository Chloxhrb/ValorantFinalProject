import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (adminStatus) => {
        setIsLoggedIn(true);
        setIsAdmin(adminStatus);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", String(adminStatus));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isAdmin");
    };

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
        setIsLoggedIn(storedIsLoggedIn);
        setIsAdmin(storedIsAdmin);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
