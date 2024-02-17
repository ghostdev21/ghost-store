"use client"

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { PRODUCTS_CATEGORIES } from "@/constants/categories";


export default function Categories () {

    const searchParams = useSearchParams()
    const router = useRouter()

   

    const ropa = "ropa"

    return (
        <div className="max-w-80 mt-20 w-full flex flex-col gap-3 items-center border-r-[1px]">
            <h3 className="text-center text-zinc-500 font-medium">Categorias</h3>
            <ul className="flex flex-col items-start m-auto mt-5 gap-3">
                {PRODUCTS_CATEGORIES.map((category) => (
                <li key={category.value}><Link href={`?category=${category.name}`}>{category.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}