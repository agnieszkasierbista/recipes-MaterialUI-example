import React, {PropsWithChildren} from 'react';
import Typography from "@mui/material/Typography";
import QuiltedImageList from "../ImageList/ImageList.layout";
import Box from "@mui/material/Box";
import ControlledAccordions from "../Accordion/Accordion.layout";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import {RecipePageProps} from "./RecipePage.types";



const RecipePage: React.FC<PropsWithChildren<RecipePageProps>> = (props) => {
    return (
        <>
            <Typography variant="h3" component="h1" marginTop={3}>
                Title here
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}}>
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="breakfast" height="325"/>
                <QuiltedImageList/>
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    Title here
                </Typography>
                <Typography variant="body1" component="p" marginTop={3}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consectetur cum ea
                    exercitationem iure maxime neque nostrum numquam sit. Atque consequatur delectus esse necessitatibus
                    quod saepe sequi tenetur velit.
                </Typography>
            </Box>
            <ControlledAccordions />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    )
};

export default RecipePage;
