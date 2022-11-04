import {Dispatch} from 'redux';
import Recipe from "./Recipe.layout";
import {connect} from "react-redux";
import {RecipeDispatchProps, RecipeStateProps} from "./Recipe.types";
import { State } from "../../types";

function mapStateToProps(state: State): RecipeStateProps {
    return {}
}

function mapDispatchToProps(dispatch: Dispatch): RecipeDispatchProps {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
