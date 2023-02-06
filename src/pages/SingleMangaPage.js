import {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {fetchOneManga} from '../reducers/oneMangaSlice';

import {useParams} from 'react-router-dom';

import {Helmet} from 'react-helmet';

import SingleMangaPageInfo from '../components/SingleMangaPageInfo';
import SingleMangaPageMainInfo from '../components/SingleMangaPageMainInfo';

import ProgressBar from '../components/ProgressBar';

import {Box, Grid, Container} from '@mui/material';

const SingleMangaPage = () => {
    const {mangaId} = useParams();

    const oneManga = useSelector((state) => state.oneManga.oneManga);
    const loadingStatus = useSelector((state) => state.oneManga.loadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneManga(mangaId));
    }, [dispatch, mangaId]);

    const {
        /* id,
        url, */
        title,
    } = oneManga;

    if (loadingStatus === 'loading') {
        return <ProgressBar />;
    }

    return (
        <Box>
            <Helmet>
                <meta
                    name="description"
                    content={`Manga: ${title}`}
                />
                <title>{title}</title>
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
                        <SingleMangaPageMainInfo oneMangaInfo={oneManga} />
                    </Grid>

                    {/* Блок с остальной информацией. Появляется при md */}
                    <Grid
                        item
                        xs={3}
                        sx={{display: {xs: 'none', md: 'grid'}}}
                    >
                        <SingleMangaPageInfo oneMangaInfo={oneManga} />
                    </Grid>
                </Grid>

                {/* Блок с остальной информацией. Появляется при xs */}
                <Box sx={{display: {xs: 'block', md: 'none'}}}>
                    <SingleMangaPageInfo oneMangaInfo={oneManga} />
                </Box>

            </Container>
        </Box>
    );
};

export default SingleMangaPage;
