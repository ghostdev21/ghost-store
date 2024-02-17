"use client"

import { Input } from "@/components/ui/input";
import { MdOutlineClear } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";


export default function Search () {

    const [value, setValue] = useState("")

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!value) return

        const params = new URLSearchParams(searchParams)

        params.set("term", value)

        router.replace(`${pathname}?${params.toString()}`)
    }

    const onClear = () => {
        setValue("")
    }


    return (
        <div className="w-full max-w-xl rounded-md">
            <form onSubmit={onSubmit}  className="w-full flex gap-2 items-center">
            <Input value={value} onChange={(e) => setValue(e.target.value)} className="focus-visible:outline-none focus-visible:ring-0" placeholder="Buscar producto" />
             {
                value  !== "" ? (
                    <MdOutlineClear onClick={onClear} className="text-xl cursor-pointer" />
                ) : 
                (
            <CiSearch  className="text-xl" />
                )
             }
            </form>
        </div>
    )
}