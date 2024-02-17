"use client"

import ProductCard from "@/components/product-card"
import { Product } from "@/interfaces/products-interface"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface ResultsProps {
    products: Product[]
}

export default function Results ({products}: ResultsProps) {

    const [filterProducts, setFilterProducts] = useState<Product[]>(products)

    const searchParams = useSearchParams()
    const term =  searchParams.get("term")
    useEffect(() => {
        if (term) {
            products.filter((product) => product.name.includes(term))
        } else {
            setFilterProducts(products)
        }
    }, [term])

    return (
        <div className="w-full flex gap-3">

        {
            filterProducts.map((product) => (
                <ProductCard
                  category={product.category}
                  id={product.id}
                  images={product.images}
                  name={product.name}
                  price={product.price}
                  key={product.id}
                />
            ))
        }
        </div>
    )
}