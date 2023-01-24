import {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {fetchOneManga} from '../reducers/oneMangaSlice';

import {Box, Grid, Container, Typography, Divider} from '@mui/material';


const SingleMangaPage = () => {
    const oneManga = useSelector((state) => state.oneManga.oneManga);
    const loadingStatus = useSelector((state) => state.oneManga.loadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneManga(336));
    }, [dispatch]);

    //console.log(oneManga);

    const {
        id,
        url,
        thumbnail,
        title,
        type,
        chapters,
        volumes,
        status,
        published,
        score,
        rank,
        members,
        favorites,
        synopsis,
        background,
        authors,
        genres,
        demographics,
    } = oneManga;

    if (loadingStatus === 'loading') {
        return <h1>Loading</h1>;
    }

    return (
        <Box>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        md={9}
                    >
                        <Box>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <img
                                        style={{width: '100%', height: 'auto'}}
                                        src={thumbnail}
                                        alt="anime"
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={8}
                                >
                                    <Typography
                                        sx={{mb: '10px'}}
                                        variant="h4"
                                        component={'h2'}
                                    >
                                        {title}
                                    </Typography>
                                    {synopsis ? (
                                        <>
                                            <Typography
                                                component={'h3'}
                                                variant={'h5'}
                                            >
                                                Synopsis:
                                            </Typography>{' '}
                                            <Typography>{synopsis}</Typography>{' '}
                                            <Divider sx={{my: '15px'}} />{' '}
                                        </>
                                    ) : null}

                                    {background ? (
                                        <>
                                            <Typography
                                                component={'h3'}
                                                variant={'h5'}
                                            >
                                                Background:
                                            </Typography>{' '}
                                            <Typography>
                                                {background}
                                            </Typography>
                                        </>
                                    ) : null}
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={3}
                    >
                        <Box sx={{display: {xs: 'none', md: 'block'}}}>
                            <Typography
                                sx={{mb: '10px'}}
                                variant="h4"
                                component={'h2'}
                            >
                                {demographics && demographics.lenght !== 0
                                    ? demographics.map((item) => item.name)
                                    : 'Info'}
                            </Typography>
                            <Divider sx={{my: '15px'}} />
                            {score ? (
                                <>
                                    <Typography>
                                        Score:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {score}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {type ? (
                                <>
                                    <Typography>
                                        Type:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {type}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {status ? (
                                <>
                                    <Typography>
                                        Status:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {status}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {chapters ? (
                                <>
                                    <Typography>
                                        Chapters:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {chapters}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {volumes ? (
                                <>
                                    <Typography>
                                        Volumes:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {volumes}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {published ? (
                                <>
                                    <Typography>
                                        Published:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {published}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {members ? (
                                <>
                                    <Typography>
                                        Members:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {members}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {rank ? (
                                <>
                                    <Typography>
                                        Rank:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {rank}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {favorites ? (
                                <>
                                    <Typography>
                                        Favorites:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {favorites}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {authors && authors.lenght !== 0 ? (
                                <>
                                    <Typography>
                                        Authors:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {authors
                                                .map((author) => {
                                                    return author.name;
                                                })
                                                .join(', ')}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}

                            {genres && genres.lenght !== 0 ? (
                                <>
                                    <Typography>
                                        Genres:{' '}
                                        <Typography
                                            color="primary"
                                            component={'span'}
                                        >
                                            {genres.join(', ')}
                                        </Typography>
                                    </Typography>
                                    <Divider sx={{my: '15px'}} />
                                </>
                            ) : null}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SingleMangaPage;
