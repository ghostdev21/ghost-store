
import { Metadata } from "next"
import CartTable from "./_components/cart-table"
import CartTotal from "./_components/cart-total"



export const metadata: Metadata = {
    title: "cart",
    description: "Ve tu carrito de compras"
}

export default async function CartPage () {

    return (
        <div className="mt-36 w-full px-4 flex justify-between gap-10 items-start">
            <div className="w-full">
                <h1 className="text-4xl font-semibold">Carrito</h1>
                <CartTable />
            </div>
            <div>
                <CartTotal />
            </div>
        </div>
    )
}