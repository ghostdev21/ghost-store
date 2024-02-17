"use client"

import { buttonVariants } from "@/components/ui/button";
import { useRouter} from "next/navigation";
import { useTransition } from "react";

export default function CartTotal () {
   
    const [loading, startTransition] = useTransition()
    const router = useRouter()

    const handleClick = () => {
            startTransition(() => {
                    router.push("/payment")
            })
    }
   
    return (
        <div className="max-w-md min-w-96 px-4">
            <h2 className="text-4xl font-medium">Summary</h2>
            <div className="mt-5 border-t-[1px] flex flex-col gap-4">
                <div className="flex justify-between mt-5 w-full items-center">
                    <span className="text-sm text-zinc-400">
                        Subtotal
                    </span>
                    <span className="text-sm text-zinc-400">
                        $299.00
                    </span>
                </div>
                <div className="flex justify-between w-full items-center" >
                    <span className="text-sm text-zinc-400">
                        Shipping
                    </span>
                    <span className="text-sm text-zinc-400">
                        $299.00
                    </span>
                </div>
                <div className="flex justify-between w-full items-center">
                    <span className="text-sm text-zinc-400">
                        Taxes
                    </span>
                    <span className="text-sm text-zinc-400">
                        $299.00
                    </span>
                </div>
                <div className="flex justify-between w-full items-center">
                    <span className="text-base">Total</span>
                    <span className="text-lg">$299.00</span>
                </div>
            </div>
            <button onClick={handleClick} disabled={loading} className={`${buttonVariants()} mt-7 w-full`}>Comprar productos</button>
        </div>
    )
}