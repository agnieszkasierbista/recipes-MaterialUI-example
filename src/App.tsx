import * as React from 'react';
import {Container} from "@mui/material";
import Recipes from './components/Recipes/Recipes';
import TopBar from './components/TopBar/TopBar.layout';
import {Route, Routes} from 'react-router-dom';
import RecipePage from './components/RecipePage/RecipePage';

function App() {
    return (
        <>
            <TopBar/>
            <Container
                maxWidth="md"
                sx={{marginY: 5}}
            >
                <Routes>
                    <Route path="/" element={<Recipes/>}>
                    </Route>
                    <Route path="/recipes/:title" element={<RecipePage/>} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
