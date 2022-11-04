import {RecipeInterface} from "./dataModel";

export interface State {
    recipes: RecipesState,
    recipe: RecipeState
}

export interface RecipesState {
    recipes: RecipeInterface[],
}

export interface RecipeState {
    currentRecipe: RecipeInterface
}
