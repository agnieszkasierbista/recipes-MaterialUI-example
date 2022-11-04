import {Dispatch} from 'redux';
import Recipe from "./Recipe.layout";
import {connect} from "react-redux";
import {RecipeDispatchProps, RecipeStateProps} from "./Recipe.types";
import { State } from "../../types";
import { setCurrentRecipe } from '../../actions';

function mapStateToProps(state: State): RecipeStateProps {
    return {
        currentRecipe: state.recipe.currentRecipe
    }
}

function mapDispatchToProps(dispatch: Dispatch): RecipeDispatchProps {
    return {
        dispatchSetCurrentRecipe: (recipe) => dispatch(setCurrentRecipe(recipe)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
