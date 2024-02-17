import ProductCard from "@/components/product-card";
import { getProducts } from "@/services/products-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ghost | store",
  description: "Apartado de productos con filtro por categoria."
} 

export default async function StorePage() {
  const products = await getProducts();

  return (
    <div className="mt-20 w-full  p-2">
      <h1 className="text-3xl font-semibold">Todos los productos</h1>
      <div className="flex flex-wrap gap-5 mt-5">
        {products.map((product) => (
          <ProductCard
          category={product.category}
            className="max-w-72"
            id={product.id}
            images={product.images}
            name={product.name}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
