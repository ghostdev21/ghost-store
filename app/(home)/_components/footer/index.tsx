import FooterList from "./footer-list";
import { LuGhost } from "react-icons/lu";

export default function Footer () {

    const categoriesList = [
        {
            name: "Clothing",
            href: ""
        },
        {
            name: "das",
            href: ""
        },
        {
            name: "medio",
            href: ""
        }
    ]

    const technologiesList = [
        {
            name: "prisma",
            href: ""
        },
        {
            name: "next.js",
            href: ""
        },
        {
            name: "react",
            href: ""
        }
    ]

    const medusaList = [
        {
            name: "dasd",
            href: ""
        },
        {
            name: "asd",
            href: ""
        },
        {
            name: "fff",
            href: ""
        }
    ]

    return (
        <footer className="w-full mt-48 border-t-[1px] flex flex-col justify-between bg-primary-foreground min-h-screen px-4">
            <div className="flex justify-between mt-10">
            <h2 className="text-xl text-zinc-600 font-medium">GHOST STORE</h2>
            <div className="flex gap-20">
                <FooterList title="categories" items={categoriesList}  />
                <FooterList title="technologies" items={technologiesList}  />
                <FooterList title="prisma" items={categoriesList}  />
            </div>
            </div>
            <div className="flex w-full justify-between mb-7">
                <span className="text-sm text-zinc-400">© 2024 Daniel Ramos. Todos los derechos reservados.</span>
                <span className="flex items-center gap-2">Creado por <LuGhost /></span>
            </div>
        </footer>
    )
}