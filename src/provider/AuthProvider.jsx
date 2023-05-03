import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebse/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const user = {
        name: "hridoy"
    }
    
    const authData = {
        user
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;