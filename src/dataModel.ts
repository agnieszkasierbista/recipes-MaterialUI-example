export interface RecipeInterface {
    title: string,
    products: Product[],
    duration: { time: number, measure: TimeMeasure },
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
export type TimeMeasure = "minute" | "minutes" | "seconds" | "hour" | "hours"
