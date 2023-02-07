import {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {fetchManga} from '../reducers/mangaSlice';

import {Helmet} from 'react-helmet';

import Filters from '../containers/Filters';
import MangaList from '../containers/MangaList';
import MainPagination from '../components/MainPagination';
import SortSelect from '../components/SortSelect';
import TotalManga from '../components/TotalManga';
import DrawerFilters from '../components/DrawerFilters';

import {Box, Grid, Container, Typography, Divider} from '@mui/material';

const Home = () => {


    const currentPage = useSelector((state) => state.manga.currentPage);
    const sortBy = useSelector((state) => state.manga.sortBy);
    const dateRange = useSelector((state) => state.manga.dateRange);
    const filterByType = useSelector((state) => state.manga.filterByType);
    const sfw = useSelector((state) => state.manga.sfw);
    const mangaStatus = useSelector((state) => state.manga.mangaStatus);
    const searchTerm = useSelector((state) => state.manga.searchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchManga({
                currentPage,
                sortBy,
                dateRange,
                filterByType,
                sfw,
                mangaStatus,
                searchTerm,
            })
        );
    }, [
        dispatch,
        currentPage,
        sortBy,
        dateRange,
        filterByType,
        sfw,
        mangaStatus,
        searchTerm,
    ]);

    console.log('home обновился');

    return (
        <Box>
            <Helmet>
                <meta
                    name="description"
                    content="All manga"
                />
                <title>All manga</title>
            </Helmet>

            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                >
                    {/* Grid item xs 12, md 9 */}
                    <Grid
                        item
                        xs={12}
                        md={9}
                    >
                        <Box>
                            {/* Page title and search */}
                            <Box sx={{display: 'flex', alignItems: 'center'}}>

                                {/* Drawer */}
                                <DrawerFilters/>

                                <Typography
                                    sx={{mb: '10px'}}
                                    variant="h4"
                                    component={'h2'}
                                >
                                    Manga
                                </Typography>
                            </Box>
                            <Divider sx={{my: '15px'}} />

                            {/* Section - Sort by ... */}
                            <SortSelect />
                            <Divider sx={{my: '15px'}} />

                            {/* Top pagination */}
                            <MainPagination />
                            <Divider sx={{my: '15px'}} />

                            {/* Manga List */}
                            <MangaList />
                            <Divider sx={{my: '15px'}} />

                            {/* Часть с пагинацией. Нужно перенести! */}
                            <MainPagination />
                            <TotalManga />
                        </Box>
                    </Grid>

                    {/* Grid item 3 */}
                    <Grid
                        item
                        xs={3}
                    >
                        <Box sx={{display: {xs: 'none', md: 'block'}}}>

                            <Filters />

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
