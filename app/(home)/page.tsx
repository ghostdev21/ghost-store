import ProductCard from "@/components/product-card";
import { getProductsWithLimit } from "@/services/products-service";
import { FaGithub } from "react-icons/fa";

export default async function Home() {

  const products = await getProductsWithLimit(3)


  return (
    <div className="w-full">
      <div className="min-h-screen px-3 bg-primary-foreground flex flex-col justify-center items-center  w-full">
        <h1 className="flex text-3xl w-full text-center  flex-col">Tienda virtual de productos <span className="text-zinc-400">creada por Daniel Ramos</span></h1>
        <a className="mt-5 rounded-md border-[1px] px-4 py-2 flex gap-4 items-center" href="" target="blank">Ver en GitHub <FaGithub className="text-xl"/></a>
      </div>
      <section className="w-full mt-10 px-4 mb-5">
        <h2 className="text-3xl my-5">Productos en venta</h2>
        <div className="flex  flex-wrap gap-2 justify-evenly w-full ">
          {products.map((product) => (
            <ProductCard category={product.category} key={product.id} id={product.id} images={product.images} name={product.name} price={product.price} />
          ))}
        </div>

      </section>
    </div>
  );
}
