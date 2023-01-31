import {Link as RouterLink} from 'react-router-dom';

import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
} from '@mui/material';

const MangaListItem = ({id, name, thumbnail, publicationPeriod}) => {
    return (
        <Card raised>
            <CardActionArea
                component={RouterLink}
                to={`/manga/${id}`}
            >
                <CardMedia
                    component="img"
                    sx={{height: '300px'}}
                    image={thumbnail}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        /* gutterBottom */
                        variant="h5"
                        component="div"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {publicationPeriod}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MangaListItem;
