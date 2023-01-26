import {Box, CssBaseline} from '@mui/material';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Home from '../pages/Home';
import SingleMangaPage from '../pages/SingleMangaPage';

function App() {
    return (
        <>
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
                            path="/randomManga"
                            element={<SingleMangaPage />}
                        />
                        <Route
                            path="*"
                            element={<h2>Пока недоделал</h2>}
                        />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Box>
        </>
    );
}

export default App;
