import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function OrderPage() {
  return (
    <div className="mt-20 ">
      <h1 className="text-4xl">Muchas gracias por tu compra!</h1>
      <p className="mt-10 ">Enviamos un correo a ramosperca015@gmail.com</p>
      <p className="mt-5">Fecha de orden: 12 de marzo del 2077</p>
      <div className="mt-10">
        <h2 className="text-3xl">Resumen de orden</h2>
        <div>
          <div className="flex w-full h-24 overflow-hidden gap-3 mt-5 items-center justify-start ">
            <div className=" border-[1px]  bg-primary-foreground rounded-md">
              <Image
                className="w-full object-cover p-2 "
                src="/images/gorro.webp"
                alt="product_image"
                width={50}
                height={50}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <span className="text-sm font-semibold truncate">
                Gorro de primavera
              </span>
              <span className="text-sm text-zinc-700">katlanc / sovied</span>
            </div>
            <div className="flex w-full flex-col gap-2 justify-end items-end">
              <span className="text-sm text-zinc-500">1 x 1900</span>
              <span className="text-sm text-zinc-500">1900</span>
            </div>
          </div>
          <div className="flex w-full gap-3 mt-5 items-center justify-start ">
            <div className=" border-[1px] bg-primary-foreground rounded-md">
              <Image
                className="w-full object-contain p-2 "
                src="/images/gorro.webp"
                alt="product_image"
                width={50}
                height={50}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <span className="text-sm font-semibold truncate">
                Gorro de primavera
              </span>
              <span className="text-sm text-zinc-700">katlanc / sovied</span>
            </div>
            <div className="flex w-full flex-col gap-2 justify-end items-end">
              <span className="text-sm text-zinc-500">1 x 1900</span>
              <span className="text-sm text-zinc-500">1900</span>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-5 border-t-[1px] flex flex-col gap-4">
        <div className="flex justify-between mt-5 w-full items-center">
          <span className="text-sm text-zinc-500">Subtotal</span>
          <span className="text-sm text-zinc-500">$299.00</span>
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-sm text-zinc-500">Shipping</span>
          <span className="text-sm text-zinc-500">$299.00</span>
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-sm text-zinc-500">Taxes</span>
          <span className="text-sm text-zinc-500">$299.00</span>
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-base">Total</span>
          <span className="text-lg">$299.00</span>
        </div>
      </div>

      <div  className="w-full border-t-[1px] mt-10">
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Shipping Address</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Billing Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Daniel Ramos / independencia S/N barrio san bartolo</TableCell>
              <TableCell>951 152 1133</TableCell>
              <TableCell>Billing- and delivery address are the same.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    </div>
  );
}
