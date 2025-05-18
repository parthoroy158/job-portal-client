import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContex/AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';
import { tr } from 'motion/react-client';
const Provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    const [loading, setLoading] = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignInwithGoogle = () => {
        return signInWithPopup(auth, Provider)
    }



    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('This is the current user:', currentUser.email)
            if (currentUser?.email) {
                const user = { email: currentUser.email }

                axios.post('https://server-job-portal-eight.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log("Log In", res.data)
                    })
            }
            else {
                axios.post('https://server-job-portal-eight.vercel.app/logout', { withCredentials: true })
                    .then(res => {
                        console.log('Logout', res.data)
                    })
            }
            setLoading(false)
        })
        return () => {
            unsubcribe('')
        }
    }, [])


    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userInfo = {
        createUser,
        signIn,
        user,
        signOutUser,
        SignInwithGoogle,
        loading


    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;