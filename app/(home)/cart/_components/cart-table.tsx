"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CartItem from "./cart-item";
import { useCartContext } from "@/context/cart-context";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function CartTable() {
  const { items } = useCartContext();

  if (!items.length)
    return (
      <div className="flex flex-col mt-3">
        <h2 className="text-2xl">No tienes productos en tu carro</h2>
        <p className="text-xl text-zinc-500">Porfavor ve ala seccion de store para empezar a comprar</p>
        <Link className={`b${buttonVariants()} max-w-max mt-2`} href="/store">ir a store</Link>
      </div>
    );

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Item</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          items.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <CartItem description={product.description} image={product.image} name={product.name} />
            </TableCell>
            <TableCell>
              {product.amount}
            </TableCell>
            <TableCell>
              {product.price}
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}
