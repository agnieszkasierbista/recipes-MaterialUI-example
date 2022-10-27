import * as React from 'react';
import Button from '@mui/material/Button';
import {Container, Paper} from "@mui/material";
import Recipes from './components/Recipes/Recipes.layout';

function App() {
    return (
        <Container>
            <Recipes/>
            <Button variant="contained">Hello World</Button>
        </Container>
    );
}

export default App;
