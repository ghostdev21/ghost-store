import Link from "next/link";
import Menu from "./menu";

export default function Nabvar () {
    return (
        <nav className="w-full z-50 fixed top-0 bg-background flex justify-between px-5 items-center h-16 border-b-2">
        <p className="text-sm flex-1">menu</p>
        <Link href="/">
          <h2 className="text-xl font-medium text-zinc-600">GHOST STORE</h2>
        </Link>
        <Menu />
      </nav>
    )
}