import {Typography, Divider} from '@mui/material';

const SingleMangaPageInfo = ({oneMangaInfo}) => {
    const {
        type,
        chapters,
        volumes,
        status,
        published,
        score,
        rank,
        members,
        favorites,
        authors,
        genres,
        demographics,
    } = oneMangaInfo;

    return (
        <>
            <Typography
                sx={{mb: '10px'}}
                variant="h4"
                component={'h2'}
            >
                {demographics && demographics.length !== 0
                    ? demographics.map((item) => item.name)
                    : 'Information'}
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
        </>
    );
};

export default SingleMangaPageInfo;
