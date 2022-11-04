import {AnyAction, combineReducers, Reducer} from '@reduxjs/toolkit';
import {SET_CURRENT_RECIPE, SET_RECIPES} from "./actions";
import {recipesArray} from "./data/recipes"
import {REHYDRATE} from "redux-persist";


export const recipesReducer: Reducer = (state = {}, action: AnyAction) => {
    switch (action.type) {

        case REHYDRATE: {
            return {
                ...state,
            };
        }
        case SET_RECIPES: {
            return {
                ...state,
                recipes: recipesArray,
            };
        }

        default:
            return state;
    }
};

export const recipeReducer: Reducer = (state = {}, action: AnyAction) => {
    switch (action.type) {

        case REHYDRATE: {
            return {
                ...state,
            };
        }
        case SET_CURRENT_RECIPE: {
            return {
                ...state,
                currentRecipe: action.payload,
            };
        }

        default:
            return state;
    }

}

const rootReducer = combineReducers({
    recipes: recipesReducer,
    recipe: recipeReducer,
});

export default rootReducer;
