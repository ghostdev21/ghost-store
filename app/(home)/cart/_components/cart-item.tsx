import Image from "next/image";

interface CartItemProps {
  image: string;
  name: string;
  description: string;
}

export default function CartItem({ description, image, name }: CartItemProps) {

  console.log(image)
  return (
    <div className="flex gap-3 items-center justify-start ">
      <div className="max-w-44 border-[1px] w-full bg-primary-foreground rounded-md">
        <Image
          className="w-full object-contain p-2 "
          src={image}
          alt="product_image"
          width={100}
          height={100}
        />
      </div>
      <div className="w-52 flex flex-col gap-2">
        <span className="text-sm font-semibold truncate">{name}</span>
        <span className="text-sm text-zinc-500 truncate">{description}</span>
      </div>
    </div>
  );
}
