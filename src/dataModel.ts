export interface RecipeInterface {
    title: string,
    products: Product[]
}

export interface Product {
    name: string,
    amount?: number,
    portion?: {
        a: Sizes,
        b: number
    }[]
}

export type Sizes = "tablespoon" | "teaspoon" | "cup"
