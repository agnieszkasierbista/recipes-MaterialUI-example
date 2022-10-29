import * as React from 'react';
import {Container} from "@mui/material";
import Recipes from './components/Recipes/Recipes.layout';
import TopBar from './components/TopBar/TopBar.layout';

function App() {
    return (
        <>
            <TopBar/>
            <Container
                maxWidth="md"
                sx={{marginY: 5}}
            >
                <Recipes/>
            </Container>
        </>
    );
}

export default App;
