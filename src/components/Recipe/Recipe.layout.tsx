import React, {PropsWithChildren} from 'react';
import Paper from "@mui/material/Paper";
import {RecipeProps} from './Recipe.types';
import LetterAvatar from "../Avatar/Avatar.layout";
import {StyledRecipeImg} from "../Recipes/Recipes.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {AccessTime, AutoAwesome, AutoFixHigh, AutoFixNormal, Egg, FreeBreakfast, Opacity} from "@mui/icons-material";
import CustomizedRating from "../CustomizedRating/CustomizedRating.layout";
import { Link } from 'react-router-dom';

const Recipe: React.FC<PropsWithChildren<RecipeProps>> = props => {

    return (
        <Link to={`/recipes/${props.recipe.title}`} onClick={() => props.dispatchSetCurrentRecipe(props.recipe)}>
            <Paper elevation={10}>
                <LetterAvatar name={props.recipe.title}/>
                <StyledRecipeImg src="./pics/pancake.jpg"
                                 alt="pancake"
                />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        {props.recipe.title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <AccessTime sx={{width: 13}}/>
                        <Typography variant="subtitle2" component="p" marginLeft={0.5}>
                            {props.recipe.totalDuration.time} {props.recipe.totalDuration.measure}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        padding={1}
                    >
                        <Egg/>
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
                        <CustomizedRating
                            value={props.recipe.rating}
                        />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            {props.recipe.rating}
                        </Typography>
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            (473 reviews)
                        </Typography>
                    </Box>
                </Box>

            </Paper>
        </Link>
    );
};

export default Recipe;
