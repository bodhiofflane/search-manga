import {useMemo, lazy, Suspense} from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

import Home from '../pages/Home';
import ProgressBar from './ProgressBar';

import useMediaQuery from '@mui/material/useMediaQuery';
import {Box, CssBaseline} from '@mui/material';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const RandomMangaPage = lazy(() => import('../pages/RandomMangaPage'));
const SingleMangaPage = lazy(() => import('../pages/SingleMangaPage'));
const About = lazy(() => import('../pages/About'));
const Page404 = lazy(() => import('../pages/Page404'));

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: '#1d786a',
                    },
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
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
                    <Suspense fallback={<ProgressBar/>}>
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
                                path="/about"
                                element={<About />}
                            />
                            <Route
                                path="*"
                                element={<Page404 />}
                            />
                        </Routes>
                    </Suspense>
                    <Footer />
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    );
}

export default App;
