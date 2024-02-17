import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { LuGhost } from "react-icons/lu";

export default function NotFoundPage () {
    return (
        <div className="w-full flex justify-center items-center h-screen">
            <div className="p-2 flex flex-col gap-3">
                <h1 className="text-7xl font-semibold text-center flex gap-2 m-auto">4<LuGhost/>4</h1>
                <span className="text-center text-zinc-500">La pagina no existe master, porfavor regresa a tus compras</span>
                <Link className={`${buttonVariants()} max-w-max m-auto`} href="/">Volver al inicio</Link>
            </div>
        </div>
    )
}