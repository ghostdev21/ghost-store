"use client"

import { Input } from "@/components/ui/input";
import { MdOutlineClear } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import qs from "query-string"
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Search () {

    const router = useRouter()
    const [value, setValue] = useState("")

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!value) return

        const url = qs.stringifyUrl({
            url: "/search",
            query: {term: value}
        }, {skipEmptyString: true})

        router.push(url)
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