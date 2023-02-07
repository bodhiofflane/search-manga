import {useDispatch} from 'react-redux';

import {resetFilters} from '../reducers/mangaSlice';

import {Link as RouterLink} from 'react-router-dom';

import Typography from '@mui/material/Typography';

const LogoXS = () => {
    const dispatch = useDispatch();

    return (
        <Typography
            variant="h5"
            component={RouterLink}
            noWrap
            to="/"
            onClick={() => {
                dispatch(resetFilters());
            }}
            sx={{
                mr: 2,
                display: {xs: 'flex', md: 'none'},
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            Manga-App
        </Typography>
    );
};

export default LogoXS;
