import Login from '../components/Login';
import NavMenuMD from '../components/NavMenuMD';
import LogoMD from '../components/LogoMD';
import LogoXS from '../components/LogoXS';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BookIcon from '@mui/icons-material/Book';
import DropdownMenu from '../components/DropdownMenu';


const pages = [
    {title: 'Home', to: '/'},
    //{title: 'Genres', to: '/genres'},
    {title: 'Random Manga', to: '/random'},
    {title: 'About', to: '/about'},
];

const Header = () => {

    return (
        <AppBar
            position="static"
            sx={{mb: '30px'}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display: 'flex', justifyItems: 'center'}}>

                    <BookIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />

                    {/* Лого при большом разрешении */}
                    <LogoMD/>

                    {/* Выподающее меню. Появляется при sx */}
                    <DropdownMenu pages={pages}/>

                    <BookIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}} />

                    {/* Лого поцентр */}
                    <LogoXS />

                    {/* Навигация при md */}
                    <NavMenuMD pages={pages}/>

                    {/* Пока выключенный вход/регистрация */}
                    <Login/>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
