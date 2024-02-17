import { LuGhost } from "react-icons/lu";
import Link from "next/link";

export default function Logo () {
    return (
        <Link className="flex items-center" href="/">
            <LuGhost className="text-4xl" />
            <span className="text-2xl font-semibold">Ghost </span>
        </Link>
    )
}