export interface RecipeInterface {
    title: string,
    recipeParts: RecipePart[]
    totalDuration: Duration,
    rating: number,
}
export interface RecipePart {
    name: RecipePartName,
    steps: Step[],
}

export interface Product {
    name: string,
    amount?: number | "all",
    portion?: {
        size: Sizes,
        quantity: number
    }[]
}

export interface Step {
    stepAction: stepAction,
    stepDuration: Duration,
    products: Product[],
}

export interface Duration {
    time: number,
    measure: TimeMeasure
}
export type Sizes = "tablespoon" | "teaspoon" | "cup" | "clove" | WeightUnit
export type TimeMeasure = "minute" | "minutes" | "seconds" | "hour" | "hours"
export type WeightUnit = "gram" | "kilogram"
export type stepAction = "chop" | "mix" | "bake" | "barbecue" | "blend" | "boil" | "bone" | "broil" | "caramelize" | "caserole" | "churn" | "core" | "dice" | "dip" | "glaze" | "grate" | "freeze" | "flavor" | "grind" | "mash" | "peel" | "roast" | "roll" | "salt" | "scoop" | "season" | "sieve" | "skewer" | "skim" | "skin" | "steam" | "tenderise" | "whisk" | "fry" | "deep fry" | "stir-fry" | "sauté" | "sear" | "grease" | "trim" | "slice" | "cut" | "mince" | "add"
export type RecipePartName = "meat" | "sauce" | "marinade" | "dough" | "stuffing" | stepAction | "prep" | "cook"

