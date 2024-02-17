export interface Product {
    id: string,
    amount: number,
    information: Record<string, string[]>,
    images: string[],
    name: string,
    price: number,
    description: string,
    stars: number
    category: string
}