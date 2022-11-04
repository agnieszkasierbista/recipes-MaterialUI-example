import {Dispatch} from 'redux';
import {connect} from "react-redux";
import {RecipesDispatchProps, RecipesStateProps} from "./Recipes.types";
import {State} from "../../types";
import Recipes from './Recipes.layout';
import {setRecipes} from "../../actions";

function mapStateToProps(state: State): RecipesStateProps {
    return {
        recipes: state.recipes.recipes
    }
}

function mapDispatchToProps(dispatch: Dispatch): RecipesDispatchProps {
    return {
        dispatchSetRecipes: () => dispatch(setRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
