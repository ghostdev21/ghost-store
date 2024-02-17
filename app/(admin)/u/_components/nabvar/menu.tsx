import Link from "next/link"


export default function Menu () {


    return (
        <ul className="flex flex-1 items-center justify-end gap-6">
            <Link className="text-xs text-zinc-500" href="/search">Search</Link>
            <Link className="text-xs text-zinc-500" href="">Account</Link>
            <div className="flex items-center">
            <Link className="text-xs text-zinc-500" href="/cart">Cart (0)</Link>
            </div>
        </ul>
    )
}