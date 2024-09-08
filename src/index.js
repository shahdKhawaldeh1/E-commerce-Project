import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {responsiveFontSizes, ThemeProvider} from "@mui/material";
import theme from "./themes/customTheme";

import {QueryClient, QueryClientProvider} from "react-query";

let responsiveTheme = responsiveFontSizes(theme);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>

        <ThemeProvider theme={responsiveTheme}>
            <App />
        </ThemeProvider>

    </QueryClientProvider>
);

