import { auth } from "../firebase/firebase.config";
import { useContext, createContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import { redirect } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        console.log("error creating auth context");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export function AuthProvider ({children}){

    const [user, setUser] = useState("");

    useEffect(()=>{
        const subscribed = onAuthStateChanged(auth, (currentUser) => {
            if(!currentUser){
                console.log("no hay usuario subscrito");
                setUser("")
            }else{
                setUser(currentUser);
            }
        })
        return () => subscribed()
    },[])

    const register = async (email,password) => {
        const response = await createUserWithEmailAndPassword(auth, email, password)
            .then(() => redirect('/'))
            .catch((error) => console.log(error));
        console.log(response);
    }

    const login = async (email, password) => {
        const response = await signInWithEmailAndPassword(auth, email, password)
            .then(() => redirect('/'))
            .catch((error) => console.log(error));
        console.log(response);
    }

    const loginWithGoogle = async () => {
        const responseGoogle = await GoogleAuthProvider();
        return await signInWithPopup(auth, responseGoogle)
    }

    const logout = async () => {
        const response = await signOut(auth);
        console.log(response);
    }

    return <authContext.Provider
        value={{register, login, loginWithGoogle, logout, user }}
    >{children}</authContext.Provider>;
}