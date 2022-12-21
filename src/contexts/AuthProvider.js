import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config'
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,
} from 'firebase/auth';
import axios from 'axios';



export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [mongoUser, setMongoUser] = useState({});
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(user);

    //1. Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //   2. Update Name
    const updateUserProfile = (name, photo, seller) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            seller: seller,
            admin: false
        })
    }

    //   3. Email Verify
    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    // 4. Google Signin
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // 5. Logout
    const logout = () => {
        setLoading(true)

        return signOut(auth)
    }

    //6. Login with Password
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //7. Forget Password
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {

        axios.all([
            axios.get('https://nodejs-express-lemon.vercel.app/oldLaptopCategory'),
            axios.get(`https://nodejs-express-lemon.vercel.app/user/${user?.email}`)
        ]).then(axios.spread((res1, res2) => {
            setCategory(res1.data);
            setMongoUser(res2.data)
        }))

        // fetch('http://localhost:5000/oldLaptopCategory').then(res => res.json()).then(data => (setCategory(data)));
        // fetch(`http://localhost:5000/user/${user?.email}`).then(res => res.json()).then(data => (setMongoUser(data)));

        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            //this part will execute once the component is unmounted.
            unsubscribe()
        }
    }, [user?.email])

    const authInfo = {
        user,
        mongoUser,
        createUser,
        updateUserProfile,
        verifyEmail,
        signInWithGoogle,
        logout,
        signin,
        resetPassword,
        loading,
        setLoading,
        category,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider