import { CartList, CartListItem } from "@/interfaces/cart-interface";
import { getCart } from "@/services/cart-service";
import { useEffect, useState } from "react";

interface Props {
  productId: string;
  userId?: string | null | undefined;
}

export default function useCartItems({ productId, userId }: Props) {
  const [cart, setCart] = useState<CartList>();
  const [isItemInCart, setIsItemInCart] = useState<boolean>();

  useEffect(() => {
    if (userId) {
      getCart(userId).then((data: any) => {
        setCart(data);
      });

      if (cart?.products) {
        const result = cart?.products.some((prod) => {
          return prod.id === productId;
        });
        if (result) {
          setIsItemInCart(true);
        } else {
          setIsItemInCart(false);
        }
      }
    }
  }, [productId, userId, cart]);

  return { isItemInCart, cart };
}
