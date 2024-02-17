import { CiSearch } from "react-icons/ci";
import Search from "./_components/search";
import { getProductsWithLimit } from "@/services/products-service";
import Results from "./_components/results";

export default async function  SearchPage () {

    const products = await getProductsWithLimit(10)

    return (
        <div className="mt-20">
            <div className="w-full flex items-center justify-center">
            <Search />
            </div>
            <Results products={products} />
        </div>
    )
}