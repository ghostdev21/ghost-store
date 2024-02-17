"use client"

import React, { createContext, useState, useEffect, useContext } from "react";
import {
  onAuthStateChanged,
  User
} from "firebase/auth";
import {auth} from "@/firebase"
import { useRouter } from "next/navigation";

type AuthContextProps = {
    user: User | null
}


const AuthContext = createContext<AuthContextProps>({user: null})

export function AuthContextProvider ({children}: {children: React.ReactNode}) {
    const [user , setUser] = useState<AuthContextProps>({user: null})
    const router = useRouter()

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser({user: currentUser})
        })

        return () => unsuscribe()
    }, [user])

    if (!user) {
        router.push("/auth/login")
    }

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () =>  useContext(AuthContext)