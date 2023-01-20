import {
    Box,
    Grid,
    Container,
    Typography,
    Divider,
} from '@mui/material';
import Filters from '../components/Filter';
import MangaList from '../components/MangaList';
import MainPagination from '../components/MainPagination';

import SortSelect from '../components/SortSelect';



const Home = () => {

    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}>
                        <Box>
                            {/* Page title */}
                            <Typography
                                sx={{ mb: '10px' }}
                                variant="h4"
                                component={'h2'}
                            >
                                Manga
                            </Typography>
                            <Divider sx={{ my: '15px' }} />

                            {/* Section - Sort by ... */}
                            <SortSelect />
                            <Divider sx={{ my: '15px' }} />

                            {/* Manga List */}
                            <MangaList/>
                            <Divider sx={{ my: '15px' }} />
                            
                            {/* Часть с пагинацией. Нужно перенести! */}
                            <MainPagination/>

                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Typography
                                sx={{ mb: '10px' }}
                                variant="h4"
                                component={'h2'}
                            >
                                Filter
                            </Typography>

                            <Filters />

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
