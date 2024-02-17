import { db } from "@/firebase";
import { Product } from "@/interfaces/products-interface";
import { DocumentData, collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore";


export async function getProducts(): Promise<Product[]> {
  try {
    const products: DocumentData[] = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return products as Product[]
  } catch (error: any) {
    throw new Error("Ocurrio un error", error.message)
  }
}

export async function getProductsWithLimit (max: number): Promise<Product[]> {
    try {
        const products: DocumentData[] = []
        const q = query(collection(db, "products"), limit(max))
        const querySnapShots = await getDocs(q)
        querySnapShots.forEach((doc) => {
          products.push({
            ...doc.data(),
            id: doc.id
          })
        })

        return products as Product[]
    } catch (error: any) {
        throw new Error("ocurrio un error", error.message)
    }
}

export async function getProductById(id: string): Promise<Product> {
    try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        const product = {
            ...docSnap.data(),
            id: docSnap.id
        }
        return product as Product
    } catch (error: any) {
        throw new Error("Ocurrio un error", error.message)
    }
}

export async function getSimilarProducts (product: Product) {
  try {
    const products: DocumentData[] = []
    const q = query(collection(db, "products"), where("category", "==", product.category ), limit(3))

    const querySnapshots = await getDocs(q)
    querySnapshots.forEach((doc) => {
      products.push({
        ...doc.data(),
        id: doc.id
      })
    })

    return products as Product[]

  } catch (error: any) {
    throw new Error("Ocurrio un error", error.message)
  }
}