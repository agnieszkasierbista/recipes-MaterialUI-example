import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import Typography from '@mui/material/Typography';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#7ff85d',
    },
    '& .MuiRating-iconHover': {
        color: '#62c448',
    },
});

export default function CustomizedRating(props: any) {
    return (
        <Box
            sx={{
                '& > legend': {mt: 2},
            }}
        >
            <StyledRating
                name="customized-color"
                value={props.value}
                defaultValue={2}
                precision={0.5}
                readOnly
                icon={<LocalDiningOutlinedIcon fontSize="inherit"/>}
                emptyIcon={<LocalDiningOutlinedIcon fontSize="inherit" color="disabled"/>}
            />
        </Box>
    );
}
