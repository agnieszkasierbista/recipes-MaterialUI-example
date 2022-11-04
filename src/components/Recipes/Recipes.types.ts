import {RecipeInterface} from "../../dataModel";

export interface RecipesProps extends RecipesStateProps, RecipesDispatchProps, RecipesOwnProps {

}

export interface RecipesStateProps {
    recipes: RecipeInterface[]
}

export interface RecipesDispatchProps {
    dispatchSetRecipes: () => void
}

export interface RecipesOwnProps {

}
