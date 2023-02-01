import {
    Typography,
    Card,
    CardContent,
    CardActionArea,
    Skeleton,
    Grid,
} from '@mui/material';

const SkeletonMangaList = () => {

    const createSkeletonList = () => {
        const items = [];

        const count = 20;

        for (let i = 0; i < count; i++) {
            items.push(
                <Grid
                    key={i}
                    xs={6}
                    md={3}
                    sx={{alignSelf: 'stretch'}}
                    item
                >
                    <Card raised>
                        <CardActionArea>
                            <Skeleton
                                height={'300px'}
                                variant={'rectangular'}
                            />

                            <CardContent>
                                <Typography
                                    /* gutterBottom */
                                    variant="h5"
                                    component="div"
                                >
                                    <Skeleton />
                                    <Skeleton />
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <Skeleton />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            );
        }
        return items;
    };


    return createSkeletonList();
};

export default SkeletonMangaList;
