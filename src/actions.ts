import {RecipeInterface} from "./dataModel";

export const SET_RECIPES = "SET_RECIPES";
export const SET_CURRENT_RECIPE = "SET_CURRENT_RECIPE";

export function setRecipes() {
    return {
        type: SET_RECIPES
    }
}

export function setCurrentRecipe(recipe: RecipeInterface) {
    return {
        type: SET_CURRENT_RECIPE,
        payload: recipe
    }
}
