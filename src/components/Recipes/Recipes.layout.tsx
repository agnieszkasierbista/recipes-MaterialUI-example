import React from 'react';
import Recipe from '../Recipe/Recipe.layout';
import Grid from '@mui/material/Grid';
import {recipesArray} from "../../data/recipes";

function Recipes() {

    return (
        <Grid container spacing={5}>
            {recipesArray.map((recipe) => {
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
