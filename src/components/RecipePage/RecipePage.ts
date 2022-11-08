import {Dispatch} from 'redux';
import {connect} from "react-redux";
import {State} from "../../types";
import {RecipePageDispatchProps, RecipePageStateProps} from './RecipePage.types';
import RecipePage from './RecipePage.layout';

function mapStateToProps(state: State): RecipePageStateProps {
    return {
        currentRecipe: state.recipe.currentRecipe
    }
}

function mapDispatchToProps(dispatch: Dispatch): RecipePageDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)
