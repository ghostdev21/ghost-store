import { AuthContextProvider } from "@/context/auth-context"

interface AuthLayoutProps {
    children: React.ReactNode
}

export default async function AuthLayout ({ children }: AuthLayoutProps) {
    


    return (
        <div>
            <AuthContextProvider>
            {children}
            </AuthContextProvider>
        </div>
    )
}