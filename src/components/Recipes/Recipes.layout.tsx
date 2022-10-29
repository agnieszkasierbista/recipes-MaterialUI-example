import React from 'react';
import Recipe from '../Recipe/Recipe.layout';
import Grid from '@mui/material/Grid';
import {recipesArray} from "../../data/recipes";

function Recipes() {

    return (
        <Grid container spacing={5}>
            {recipesArray.map((x) => {
                return (
                    <Grid item xs={4}>
                        <Recipe key={x.title} recipe={x}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Recipes;
