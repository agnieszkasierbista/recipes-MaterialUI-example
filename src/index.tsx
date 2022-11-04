import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./theme";
import {GlobalStyle} from './GlobalStyle';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <GlobalStyle/>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </PersistGate>
);
