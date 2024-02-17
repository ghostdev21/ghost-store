import CartItem from "./cart-item";

export default function Total() {
  return (
    <div className="max-w-lg p-3 min-w-96 rounded-md">
      <h2 className="text-3xl font-medium">En tu carrito</h2>
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
      <div className="mt-4 border-t-[1px]">
      <CartItem />
      </div>
    </div>
  );
}
