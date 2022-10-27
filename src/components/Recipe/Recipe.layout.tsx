import React, {PropsWithChildren} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {RecipeProps} from './Recipe.types';

const Recipe: React.FC<PropsWithChildren<RecipeProps>> = props => (
    <Grid item xs={3}>
        <Paper>{props.children}</Paper>
    </Grid>
);

export default Recipe;
