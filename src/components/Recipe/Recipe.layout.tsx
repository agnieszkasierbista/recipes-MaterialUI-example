import React, {PropsWithChildren} from 'react';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {RecipeProps} from './Recipe.types';
import LetterAvatar from "../Avatar/Avatar.layout";
import {StyledRecipeImg} from "../Recipes/Recipes.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {AccessTime, AutoAwesome, AutoFixHigh, AutoFixNormal, Egg, FreeBreakfast, Opacity} from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const Recipe: React.FC<PropsWithChildren<RecipeProps>> = props => {

    const [value, setValue] = React.useState<number | null>(4.5);

    return (

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
                        {props.recipe.duration.time} {props.recipe.duration.measure}
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

        </Paper>
    );
};

export default Recipe;
