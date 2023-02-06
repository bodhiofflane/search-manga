import {Box, Grid, Typography, Divider} from '@mui/material';

const SingleMangaPageMainInfo = ({oneMangaInfo}) => {
    const {title, thumbnail, synopsis, background} = oneMangaInfo;

    return (
        <Box>

            {/* Блок с миниатюрой. Появлятеся при xs */}
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <img
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    src={thumbnail}
                    alt={title}
                />
            </Box>
            
            <Grid
                container
                spacing={3}
            >

                {/* Блок с элементом грид и миниатюрой. Исчезает при xs */}
                <Grid
                    sx={{display: {xs: 'none', md: 'grid'}}}
                    item
                    xs={4}
                >
                    <Box
                        component={'img'}
                        style={{width: '100%', height: 'auto'}}
                        src={thumbnail}
                        alt={title}
                    />
                </Grid>

                {/* Блок с основной информацией. При xs 12, при md 8. */}
                <Grid
                    item
                    md={8}
                    xs={12}
                    sx={{mb: '15px'}}
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
                            <Typography>{background}</Typography>
                        </>
                    ) : null}

                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleMangaPageMainInfo;
