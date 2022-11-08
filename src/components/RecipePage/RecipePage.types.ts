import {RecipeInterface} from "../../dataModel";

export interface RecipePageProps extends
    RecipePageStateProps,
    RecipePageDispatchProps,
    RecipePageOwnProps
{

}

export interface RecipePageStateProps {
    currentRecipe: RecipeInterface
}

export interface RecipePageDispatchProps {

}

export interface RecipePageOwnProps {

}
