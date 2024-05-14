import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assurez-vous que le chemin est correct

const AdminRoute = ({ children }) => {
    const { isLoggedIn, isAdmin } = useAuth();

    console.log("Admin Route Check -> isLoggedIn:", isLoggedIn, "isAdmin:", isAdmin);

    if (!isLoggedIn || !isAdmin) {
        return <Navigate to="/connexion" />;
    }

    return children;
};

export default AdminRoute;
