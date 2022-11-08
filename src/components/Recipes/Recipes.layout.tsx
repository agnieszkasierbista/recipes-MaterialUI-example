import React, {PropsWithChildren} from 'react';
import Recipe from '../Recipe/Recipe';
import Grid from '@mui/material/Grid';
import {RecipesProps} from "./Recipes.types";
import {RecipeInterface} from "../../dataModel";

const Recipes: React.FC<PropsWithChildren<RecipesProps>> = (props) => {

    React.useEffect(() => {
       props.dispatchSetRecipes()
    }, [])

    return (
        <Grid container spacing={5}>
            {props.recipes?.map((recipe: RecipeInterface) => {
                return (
                    <Grid item xs={4} key={recipe.title}>
                        <Recipe recipe={recipe}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Recipes;
