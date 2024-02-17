import { db } from "@/firebase";
import { Cart, CartList } from "@/interfaces/cart-interface";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  arrayUnion,
  DocumentSnapshot,
} from "firebase/firestore";

export async function getCart(userId: string)  {
  try {
    const documentRef = collection(db, "temporary_cart");

    const q = query(documentRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      // No se encontró ningún carrito para el usuario
      return null;
    } else {
      // Retorna el primer documento encontrado (asumiendo que solo hay uno por usuario)
      const firstDoc = querySnapshot.docs[0] as DocumentSnapshot;

      // Retorna el documento encontrado
      return {
        ...firstDoc.data(),
      } as CartList
    }
  } catch (error) {}
}

export async function postCartInUserLogged(userId: string) {
  try {
    const documentRef = collection(db, "temporary_cart");

    const q = query(documentRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      // No se encontró ningún carrito para el usuario
      return null;
    } else {
      // Retorna el primer documento encontrado (asumiendo que solo hay uno por usuario)
      const firstDoc = querySnapshot.docs[0] as DocumentSnapshot;

      // Retorna el documento encontrado

      const updateOwnerCart = {
        userId: userId,
      };

      await updateDoc(doc(db, "temporary_cart", firstDoc.id), updateOwnerCart);

      return {
        uid: firstDoc.id,
      };
    }
  } catch (error: any) {
    throw new Error("Ocurrio un error", error.message)
  }
}

export async function updateOrPostCart({
  userId,
  cart,
}: {
  userId: string;
  cart: Cart;
}) {
  try {
    const documentRef = collection(db, "temporary_cart");

    const q = query(documentRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.size == 0) {
      const docRef = await addDoc(collection(db, "temporary_cart"), {
        userId: userId,
        products: [cart],
      });
      return docRef.id;
    } else {
      // Ya existe un carrito para el usuario, actualizar solo la propiedad 'products'
      const firstDoc = querySnapshot.docs[0];
      const cartId = firstDoc.id;

      // Utiliza arrayUnion para agregar el nuevo producto al array 'products'
      const updatedCart = {
        products: arrayUnion(cart),
      };

      await updateDoc(doc(db, "temporary_cart", cartId), updatedCart);

      return cartId;
    }
  } catch (error: any) {
    throw new Error("Ocurrio un error", error.message)
  }
}

