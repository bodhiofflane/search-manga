import {useState} from 'react';

import {useDispatch} from 'react-redux';

import {resetFilters} from '../reducers/mangaSlice';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
//import Link from '@mui/material/Link';
import BookIcon from '@mui/icons-material/Book';
import {Link as RouterLink, NavLink} from 'react-router-dom';

const pages = [
    {title: 'Home', to: '/'},
    //{title: 'Genres', to: '/genres'},
    {title: 'Random Manga', to: '/random'},
    {title: 'About', to: '/about'},
];

const Header = () => {
    const dispatch = useDispatch();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{mb: '30px'}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <BookIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        to={'/'}
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

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: 'flex', md: 'none'},
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography
                                        component={RouterLink}
                                        to={page.to}
                                        textAlign="center"
                                    >
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <BookIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
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
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: 'none', md: 'flex'},
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                component={NavLink}
                                to={page.to}
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.title}
                            </Button>
                        ))}
                        {/*                         <Link
                            color={'secondary'}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link href="/manga">Random manga</Link> */}
                    </Box>

                    <Box sx={{display: 'flex'}}>
                        <Button
                            onClick={() => {}}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Log In
                        </Button>
                        <Button
                            onClick={() => {}}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            Registry
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
