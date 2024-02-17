"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import SelectItem from "./select-item";

import { useSearchParams } from "next/navigation";
import useUserAuth from "@/hooks/use-user-auth";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import { updateOrPostCart } from "@/services/cart-service";
import useCartItems from "@/hooks/use-cart-items";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";

interface ProductProps {
  name: string;
  id: string;
  description: string;
  price: number;
  amount: number;
  image: string;
  category: string
}

interface SelectPropertiesProps {
  information?: Record<string, string[]>;
  product: ProductProps;
}

export default function SelectProperties({
  information,
  product,
}: SelectPropertiesProps) {
  const { user } = useUserAuth();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isDisabled, setIsDisabled] = useState(true);
  const { isItemInCart } = useCartItems({
    productId: product.id,
    userId: user?.id,
  });

  useEffect(() => {
    // Obtenemos todas las claves de la url

    const propertiesInUrl: Record<string, string> = {};
    for (const [key, value] of searchParams) {
      propertiesInUrl[key] = value;
    }

    // Creamos dos variables con las keys de cada objeto

    const informationKeys = Object.keys(information!);
    const propertiesKeys = Object.keys(propertiesInUrl);

    // Hacemos una comparacion si las claves que se obtubieron de la url son iguales a las del objeto informacion

    if (
      informationKeys.length === propertiesKeys.length &&
      informationKeys.every((key) => propertiesKeys.includes(key))
    ) {
      // De ser verdadero, quiere decir que el usuario ya selecciono todas las propiedades que son requeridas del producto, asi que el boton del carrito permite agregar el producto
      setIsDisabled(false);
    }
  }, [searchParams]);


  // Manejamos el evento del carrito al agregar el producto

  const handleClick = () => {
    if (user && user.id) {
      const propertiesFromUrl: Record<string, string> = {};

      // Obtener valores de las propiedades desde la URL
      for (const [key, value] of searchParams) {
        propertiesFromUrl[key] = value;
      }

      // Creamos el objeto para el carrito

      const productWithUrlProperties = {
        ...product,
        ...propertiesFromUrl,
      };

      updateOrPostCart({ cart: productWithUrlProperties, userId: user.id })
        .then(() => {
          // Comprobamos si el usuario es anonimo (aun no se loguea con google)

          if (user.isAnonymous) {
            toast({
              title: "Producto agregado",
              action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
              description:
                "El producto fue agregado a tu carrito como anonimo, si quieres pagar tus productos debes iniciar sesion.",
            });
          } else {
            toast({
              title: "Producto agregado",
              description: "Ahora puedes pasar a pagar tus productos",
            });
          }

          // Borramos las propiedades guardadas en la url

          const nuevaURL = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, nuevaURL);

          // Una vez comprado, desactivamos el boton
        })
        .catch((err) => {
          toast({
            title: "Hubo un error",
            description: "Porfavor intentalo mas tarde",
          });
        });
    }
  };

  // Cpreguntamos si el producto ya fue agregado al carrito

  if(isItemInCart) {
    return (
      <div className="col-start-6 flex flex-col items-center px-3 justify-center col-end-8">
        <span>El producto ya esta en tu carrito</span>
        <Link href="/store" className={`${buttonVariants()} max-w-max mt-3`}>Continua Comprando</Link>
      </div>
    )
  }

  return (
    <div className=" col-start-6  flex flex-col items-center px-3 justify-center col-end-8">
      {information &&
        Object.entries(information).map(([key, value], index) => (
          <SelectItem
            key={index}
            title="seleccionar propiedad"
            values={value}
            urlParam={key}
          />
        ))}
      <div className="w-full flex justify-between mt-6">
        <span className="text-2xl dark:text-zinc-300">Price</span>
        <span className="text-2xl text-zinc-500">$ 400 MNX</span>
      </div>
        <Button
          onClick={handleClick}
          disabled={isDisabled}
          className="w-full mt-6"
        >
          Add to cart
        </Button>
    </div>
  );
}
