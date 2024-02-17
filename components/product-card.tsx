import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interfaces/products-interface";

interface ProductCardProps extends Omit <Product, "stars" | "amount" | "description" | "information"> {
  className? : string
}

export default function ProductCard({className, id, images,  name, price}: ProductCardProps) {
  return (
    <Link href={`/${id}`} className={cn("max-w-96 w-full", className)}>
      <div className="w-full rounded-md bg-primary-foreground  border-[1px]">
        <Image
          className="w-72 m-auto "
          src={images[0]}
          width={250}
          height={250}
          alt="product_image"
        />
      </div>
      <div className="px-2 mt-3 flex justify-between w-full">
        <h2 className="max-w-48 dark:text-zinc-200 truncate text-zinc-800">{name}</h2>
        <span className="text-zinc-600 text-nowrap">{price} MNX</span>
      </div>
    </Link>
  );
}
