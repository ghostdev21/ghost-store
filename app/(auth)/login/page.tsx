"use client"


import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { signInWithGoogle } from "@/services/auth-services";
import { logOut } from "@/services/auth-services";
import { useAuthContext } from "@/context/auth-context";

export default function LoginPage () {

    const {user} = useAuthContext()

    return (
        <main className="w-full min-h-screen flex justify-center items-center">
            <div>
                <Button className="flex items-center gap-3" onClick={signInWithGoogle}>
                    Iniciar sesion con <FaGoogle />
                </Button>

                {
                    user && (
                        <div>
                            {user.displayName}
                            <button onClick={logOut}>cerrar sesion</button>
                        </div>
                    )
                }
            </div>
        </main>
    )
}