import React from 'react';
import Recipe from '../Recipe/Recipe.layout';
import Grid from '@mui/material/Grid';
import {RecipeInterface} from "../../dataModel";
import LetterAvatar from "../Avatar/Avatar.layout";
import {StyledRecipeImg} from './Recipes.styled';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import {AccessTime, AutoAwesome, AutoFixHigh, AutoFixNormal, Egg, FreeBreakfast, Opacity} from "@mui/icons-material";

export const recipesArray: RecipeInterface[] = [
    {
        title: 'traditional pancakes',
        duration: {time: 20, measure: "minutes"},
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
        duration: {time: 30, measure: "minutes"},
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
        duration: {time: 25, measure: "minutes"},
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

    const [value, setValue] = React.useState<number | null>(4.5);

    return (
        <Grid container spacing={2}>
            {recipesArray.map((x) => {
                return (
                    <Recipe key={x.title}>
                        <LetterAvatar name={x.title}/>
                        <StyledRecipeImg src="./pics/pancake.jpg"
                                         alt="pancake"
                        />
                        <Box paddingX={1}>
                            <Typography variant="subtitle1" component="h2">
                                {x.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <AccessTime sx={{width: 13}}/>
                                <Typography variant="subtitle2" component="p" marginLeft={0.5}>
                                    {x.duration.time} {x.duration.measure}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                padding={1}
                            >
                               <Egg />
                                <FreeBreakfast/>
                                <AutoAwesome/>
                                <AutoFixHigh/>
                                <AutoFixNormal/>
                                <Opacity/>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Rating
                                    name="half-rating-read"
                                    precision={0.5}
                                    value={value}
                                    size="small"
                                    readOnly
                                />
                                <Typography variant="body2" component="p" marginLeft={0.5}>
                                    {value}
                                </Typography>
                                <Typography variant="body2" component="p" marginLeft={0.5}>
                                    (473 reviews)
                                </Typography>
                            </Box>
                        </Box>

                    </Recipe>
                )
            })}
        </Grid>
    )
}

export default Recipes;
