import {RecipeInterface} from "../../dataModel";

export interface RecipeProps extends RecipeStateProps, RecipeDispatchProps, RecipeOwnProps {

}

export interface RecipeStateProps {
    currentRecipe: RecipeInterface
}

export interface RecipeDispatchProps {
    dispatchSetCurrentRecipe: (recipe: RecipeInterface) => void
}

export interface RecipeOwnProps {
    recipe: RecipeInterface
}
