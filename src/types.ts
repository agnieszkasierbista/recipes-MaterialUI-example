import {RecipeInterface} from "./dataModel";

export interface State {
    recipes: RecipesState
}

export interface RecipesState {
    recipes: RecipeInterface[]
}
