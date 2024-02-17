import Image from "next/image";
import AccordionInfo from "./_components/accordion";
import { TbTruckDelivery } from "react-icons/tb";
import ProductCard from "@/components/product-card";
import SelectProperties from "./_components/select-properties";
import {
  getProductById,
  getSimilarProducts,
} from "@/services/products-service";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);
  const products = await getSimilarProducts(product);


  if (!product) {
    notFound()
  }

  return (
    <div className="w-full mt-20">
      <div className="grid grid-cols-7 min-h-screen">
        <div className="col-start-1 p-3 flex flex-col items-center justify-center col-end-3">
          <div>
            <span className="text-xl text-zinc-500">
              Ultimas actualizaciones
            </span>
            <h1 className="text-3xl font-medium mt-5">{product.name}</h1>
            <p className="text-sm text-zinc-600 leading-6 mt-5">
              {product.description}
            </p>
          </div>
          <div className="w-full mt-5">
            <AccordionInfo title="Informacion de producto">
              <ul className="flex gap-8 flex-wrap">
                <li className="flex flex-col gap-2 justify-start">
                  <span>Material</span>
                  <span>-</span>
                </li>
                <li className="flex flex-col gap-2 justify-start">
                  <span>Weight</span>
                  <span>-</span>
                </li>
                <li className="flex flex-col gap-2 justify-start">
                  <span>Country of origin</span>
                  <span>-</span>
                </li>
                <li className="flex flex-col gap-2 justify-start">
                  <span>Dimensions</span>
                  <span>-</span>
                </li>
                <li className="flex flex-col gap-2 justify-start">
                  <span>Type</span>
                  <span>-</span>
                </li>
              </ul>
            </AccordionInfo>
            <AccordionInfo title="Compra y entrega">
              <ul className="w-full">
                <li className="flex gap-2 p-2 justify-start items-start">
                  <div>
                    <TbTruckDelivery className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast delivery</h3>
                    <p>
                      Molestias saepe veritatis aliquid sint aliquam laboriosam
                      nostrum laudantium assumenda deleniti magnam illo
                      repudiandae
                    </p>
                  </div>
                </li>
                <li className="flex gap-2 p-2 justify-start items-start">
                  <div>
                    <TbTruckDelivery className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast delivery</h3>
                    <p>
                      Molestias saepe veritatis aliquid sint aliquam laboriosam
                      nostrum laudantium assumenda deleniti magnam illo
                      repudiandae
                    </p>
                  </div>
                </li>
                <li className="flex gap-2 p-2 justify-start items-start">
                  <div>
                    <TbTruckDelivery className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast delivery</h3>
                    <p>
                      Molestias saepe veritatis aliquid sint aliquam laboriosam
                      nostrum laudantium assumenda deleniti magnam illo
                      repudiandae
                    </p>
                  </div>
                </li>
              </ul>
            </AccordionInfo>
          </div>
        </div>
        <div className="flex items-center justify-center p-3 col-start-3 col-end-6">
          <Image
            className=" border-[1px] py-2 px-10 object-contain rounded-md bg-primary-foreground w-full h-full"
            src={product.images[0]}
            alt="gorro-web"
            width={300}
            height={300}
          />
        </div>
        <SelectProperties
          information={product.information}
          product={{
            amount: product.amount,
            description: product.description,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            category: product.category
          }}
        />
      </div>
      <div className="mt-10">
        <h4 className="text-zinc-500 w-full text-center  text-sm">
          Related products
        </h4>
        <h2 className="text-3xl max-w-lg m-auto mt-6 text-center">
          you might also want to check out these products
        </h2>
        <section className="w-full flex items-center justify-center px-3 mt-10 gap-7 mb-5">
          {products.map((product) => (
            <ProductCard
            category={product.category}
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              key={product.id}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
