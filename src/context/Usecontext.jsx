import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
export const AuthContext = createContext();

const auth = getAuth(app)

const Usecontext = ({ children }) => {
    const [user, setUser] = useState({ })
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    //create user with email and password
    const makeUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //log in existing user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //on auth state change
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            subscribe()
        }
    }, [])
    //Sign out 
    const userSignOut = () => {
        return signOut(auth)
    }
    //sign in with google
    const userWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = { user,loading, makeUser, signIn, userSignOut,userWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default Usecontext;