import {useEffect, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {Helmet} from 'react-helmet';

import {clearingRandomState, fetchRandom} from '../reducers/randomSlice';

import SingleMangaPageInfo from '../components/SingleMangaPageInfo';
import SingleMangaPageMainInfo from '../components/SingleMangaPageMainInfo';
import ProgressBar from '../components/ProgressBar';

import {Box, Grid, Container, Button} from '@mui/material';

const RandomMangaPage = () => {
    const random = useSelector((state) => state.randomManga.randomManga);
    const loadingStatus = useSelector(
        (state) => state.randomManga.loadingStatus
    );
    const dispatch = useDispatch();

    const getRandomManga = useCallback(() => {
        dispatch(fetchRandom());
    }, [dispatch]);

    useEffect(() => {
        getRandomManga();

        return () => {
            dispatch(clearingRandomState());
        };
    }, [dispatch, getRandomManga]);

    const {
        /* id,
        url, */
        title,
    } = random;

    if (loadingStatus === 'loading') {
        return <ProgressBar />;
    }

    return (
        <Box>
            <Helmet>
                <meta
                    name="description"
                    content={`Random manga: ${title}`}
                />
                <title>{`Random manga: ${title}`}</title>
            </Helmet>

            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                >
                    {/* Блок с главной информацией. Становится 12 при sx */}
                    <Grid
                        item
                        xs={12}
                        md={9}
                    >
                        <Button
                            sx={{mb: '15px'}}
                            fullWidth
                            variant="outlined"
                            onClick={getRandomManga}
                        >
                            Get Random Manga
                        </Button>

                        <SingleMangaPageMainInfo oneMangaInfo={random} />
                    </Grid>

                    {/* Блок с остальной информацией. Появляется при md */}
                    <Grid
                        item
                        xs={3}
                        sx={{display: {xs: 'none', md: 'grid'}}}
                    >
                        <SingleMangaPageInfo oneMangaInfo={random} />
                    </Grid>
                </Grid>

                {/* Блок с остальной информацией. Появляется при xs */}
                <Box sx={{display: {xs: 'block', md: 'none'}}}>
                    <SingleMangaPageInfo oneMangaInfo={random} />
                </Box>
            </Container>
        </Box>
    );
};

export default RandomMangaPage;
