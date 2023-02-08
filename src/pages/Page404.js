import {Box, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import gif404 from '../images/git404.gif';

const Page404 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                /* justifyItems: 'center', */ alignItems: 'center',
            }}
        >
            <Typography
                sx={{mb: '15px'}}
                variant="h2"
            >
                404
            </Typography>
            <Typography
                sx={{mb: '15px'}}
                variant="h3"
            >
                Page not found
            </Typography>
            <Typography
                sx={{textDecoration: 'none', mb: '15px'}}
                variant="body2"
                component={RouterLink}
                to="/"
            >
                Go to the homepage
            </Typography>

            <Box>
                <img
                    width={'auto'}
                    height={'auto'}
                    src={gif404}
                    alt="404"
                />
            </Box>
        </Box>
    );
};

export default Page404;
