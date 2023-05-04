import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebse/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);

    const google = new GoogleAuthProvider();
    const gitHub = new GithubAuthProvider()

    const createNewUser = (email, password) => {
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        SetLoading(true)
        return signInWithPopup(auth, google);
    }

    const loginWithGitHub = () => {
        SetLoading(true)
        return signInWithPopup(auth, gitHub);
    }

    const logOut = () => {
        SetLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            SetLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const authData = {
        user,
        createNewUser,
        logInUser,
        loginWithGoogle,
        loginWithGitHub,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;