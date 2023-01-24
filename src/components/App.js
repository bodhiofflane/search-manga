import { Box, CssBaseline } from '@mui/material';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Home from '../pages/Home';
import SingleMangaPage from '../pages/SingleMangaPage';

function App() {
    return (
        <>
            <CssBaseline/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Header />

                {/* <Home /> */}
                <SingleMangaPage/>
                <Footer />
            </Box>
        </>
    );
}

export default App;
