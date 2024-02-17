import { cn } from "@/lib/utils"

interface ContainerProps {
    children: React.ReactNode,
    className?: string
}

export default function Container ({children, className} :  ContainerProps) {
    return (
        <main className={cn("max-w-screen-2xl w-full m-auto", className)}>
            {children}
        </main>
    )
}