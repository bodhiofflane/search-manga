import {NavLink} from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const NavMenuMD = ({pages}) => {
    return (
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
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {page.title}
                </Button>
            ))}
        </Box>
    );
};

export default NavMenuMD;
