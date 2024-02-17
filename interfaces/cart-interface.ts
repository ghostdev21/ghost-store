export interface Cart {
    name: string
    id: string
    description: string
    price: number
    amount: number
    [key: string]: string | unknown
    image: string
    category: string
}

export interface CartContextType  {
    items: Cart[];
    features: {
      addProductToCart: (prod: Cart) => void;
      handleShowCart: () => void;
      totalProducts: () => number;
      removeProduct: (id: string) => void;
      incrementProductAmount: (id: string) => void;
      decrementProductAmount: (id: string) => void;
    };
  };

export interface CartListItem {
  amount: number
  colors: string
  description: string
  id: string
  image: string
  name: string
  price: string
}

export interface CartList {
  userId: string
  products: CartListItem[]
}