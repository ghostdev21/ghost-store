"use client"; 

import { Cart } from "@/interfaces/cart-interface";
import { CartContextType } from "@/interfaces/cart-interface";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import useLocalStorage from "@/hooks/use-localstorage";
import React from "react"; 


const cartContext = createContext<CartContextType>({
  items: [],
  features: {
    addProductToCart(prod) {},
    handleShowCart() {},
    totalProducts() {
      return 0;
    },
    removeProduct() {},
    decrementProductAmount(id) {},
    incrementProductAmount(id) {},
  },
});

export const useCartContext = () => {
  return useContext(cartContext);
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage("cart", []) as [
    Cart[],
    Dispatch<SetStateAction<Cart[]>>
  ];

  const totalProducts = () => {
    const total = cartItems.reduce((acc, prod) => {
      const subTotal = prod.amount * prod.price
      return acc + subTotal
    }, 0)
    return Number(total.toFixed(2));
  };

  const addProductToCart = (prod: Cart) => {
    setCartItems((prevCartItems) => [...prevCartItems, prod]);
  };

  const removeProduct = (id: string) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
  };

  const incrementProductAmount = (id: string) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index >= 0) {
      const newCart = structuredClone(cartItems);
      newCart[index].amount += 1;
      setCartItems(newCart);
    }
  };

  const decrementProductAmount = (id: string) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index >= 0) {
      const newCart = structuredClone(cartItems);
      newCart[index].amount -= 1;
      setCartItems(newCart);
    }
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <cartContext.Provider
      value={{
        items: cartItems,
        features: {
          addProductToCart,
          handleShowCart,
          totalProducts,
          removeProduct,
          decrementProductAmount,
          incrementProductAmount,
        },
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;