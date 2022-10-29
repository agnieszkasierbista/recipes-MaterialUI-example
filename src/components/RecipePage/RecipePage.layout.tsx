import React, {PropsWithChildren} from 'react';
import Typography from "@mui/material/Typography";
import QuiltedImageList from "../ImageList/ImageList.layout";
import Box from "@mui/material/Box";


const RecipePage = (props: any) => {
    return (
        <>
            <Typography variant="h3" component="h1" marginTop={3}>
                Title here
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}}>
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="breakfast" height="325"/>
                <QuiltedImageList/>
            </Box>
        </>
    )
};

export default RecipePage;
