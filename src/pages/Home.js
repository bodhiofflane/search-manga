import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchManga } from '../reducers/mangaSlice';

import {
    Box,
    Grid,
    Container,
    Typography,
    Divider,
} from '@mui/material';

import Filters from '../containers/Filters';
import MangaList from '../containers/MangaList';
import MainPagination from '../components/MainPagination';
import SortSelect from '../components/SortSelect';
import TotalManga from '../components/TotalManga';



const Home = () => {

    const currentPage = useSelector(state => state.manga.currentPage);
    const sortBy = useSelector(state => state.manga.sortBy);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchManga({currentPage, sortBy}));
    }, [dispatch, currentPage, sortBy]);

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
                            <MainPagination/>
                            
                            <Divider sx={{ my: '15px' }} />
                            <MangaList/>
                            <Divider sx={{ my: '15px' }} />
                            
                            {/* Часть с пагинацией. Нужно перенести! */}
                            <MainPagination/>
                            <TotalManga/>
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