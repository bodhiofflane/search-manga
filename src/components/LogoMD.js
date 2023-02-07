import {useDispatch} from 'react-redux';

import {resetFilters} from '../reducers/mangaSlice';

import Typography from '@mui/material/Typography';
import {Link as RouterLink} from 'react-router-dom';

const LogoMD = () => {
    const dispatch = useDispatch();

    return (
        <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            onClick={() => {
                dispatch(resetFilters());
            }}
        >
            Manga-App
        </Typography>
    );
};

export default LogoMD;
