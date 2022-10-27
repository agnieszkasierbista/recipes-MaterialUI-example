import React from 'react';
import Recipe from '../Recipe/Recipe.layout';
import Grid from '@mui/material/Grid';
import {RecipeInterface} from "../../dataModel";
import LetterAvatar from "../Avatar/Avatar.layout";
import { StyledRecipeImg } from './Recipes.styled';

export const recipesArray: RecipeInterface[] = [
    {
        title: 'traditional pancakes',
        products: [
            {
                name: "eggs",
                amount: 2,
            },
            {
                name: "all-purpose flour",
                portion: [{
                    a: 'cup', b: 2
                }]
            },
            {
                name: "baking powder",
                portion: [{
                    a: 'teaspoon', b: 2
                }]
            },
            {
                name: "salt",
                portion: [{
                    a: 'teaspoon', b: 0.25
                }]
            },
            {
                name: "sugar",
                portion: [{
                    a: 'tablespoon', b: 1
                }]
            },
            {
                name: "milk",
                portion: [{
                    a: 'cup', b: 2
                }]
            },
            {
                name: "butter",
                portion: [{
                    a: 'tablespoon', b: 2
                }]
            },

        ]
    },
    {
        title: 'better pancakes2',
        products: [
            {
                name: "eggs",
                amount: 2,
            },
            {
                name: "all-purpose flour",
                portion: [{
                    a: 'cup', b: 2
                }]
            },
            {
                name: "baking powder",
                portion: [{
                    a: 'teaspoon', b: 2
                }]
            },
            {
                name: "salt",
                portion: [{
                    a: 'teaspoon', b: 0.25
                }]
            },
            {
                name: "sugar",
                portion: [{
                    a: 'tablespoon', b: 1
                }]
            },
            {
                name: "milk",
                portion: [{
                    a: 'cup', b: 2
                }]
            },
            {
                name: "butter",
                portion: [{
                    a: 'tablespoon', b: 2
                }]
            },

        ]
    },
    {
        title: 'decent pancakes3',
        products: [
            {
                name: "eggs",
                amount: 2,
            },
            {
                name: "all-purpose flour",
                portion: [{
                    a: 'cup', b: 2
                }]
            },
            {
                name: "baking powder",
                portion: [{
                    a: 'teaspoon', b: 2
                }]
            },
            {
                name: "salt",
                portion: [{
                    a: 'teaspoon', b: 0.25
                }]
            },
            {
                name: "sugar",
                portion: [{
                    a: 'tablespoon', b: 1
                }]
            },
            {
                name: "milk",
                portion: [{
                    a: 'cup', b: 2
                }]
            },
            {
                name: "butter",
                portion: [{
                    a: 'tablespoon', b: 2
                }]
            },

        ]
    }

]

function Recipes() {
    return (
        <Grid container spacing={2}>
            {recipesArray.map((x) => {
                return (
                    <Recipe key={x.title}>
                        <LetterAvatar name={x.title}/>
                        <StyledRecipeImg src="./pics/pancake.jpg"
                             alt="pancake"
                        />
                        {x.title}

                    </Recipe>
                )
            })}
        </Grid>
    )
}

export default Recipes;
