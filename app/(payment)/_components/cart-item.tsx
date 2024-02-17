import Image from "next/image";

export default function CartItem() {
  return (
    <div className="flex w-full gap-3 mt-5 items-center justify-start ">
        <div className=" border-[1px] w-full bg-primary-foreground rounded-md">
      <Image className="w-full object-contain p-2 " src="/images/gorro.webp" alt="product_image" width={50} height={50} />
        </div>
      <div className=" flex flex-col gap-2">
        <span className="text-sm font-semibold truncate">Gorro de primavera</span>
        <span className="text-sm text-zinc-700">katlanc / sovied</span>
      </div>
      <div className="flex w-full flex-col gap-2 justify-end items-end">
        <span className="text-sm text-zinc-500">1 x 1900</span>
        <span className="text-sm text-zinc-500">1900</span>
      </div>
    </div>
  );
}
