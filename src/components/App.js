import { useMemo } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

import Home from '../pages/Home';
import RandomMangaPage from '../pages/RandomMangaPage';
import SingleMangaPage from '../pages/SingleMangaPage';

import useMediaQuery from '@mui/material/useMediaQuery';
import {Box, CssBaseline} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';



function App() {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: '#1d786a'
                    },
                    mode: prefersDarkMode ? 'dark' : 'light',
                }
            }),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/manga/:mangaId"
                            element={<SingleMangaPage />}
                        />
                        <Route
                            path="/random"
                            element={<RandomMangaPage />}
                        />
                        <Route
                            path="*"
                            element={<h2>404</h2>}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    );
}

export default App;
