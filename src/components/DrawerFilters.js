import {useState} from 'react';

import Filters from '../containers/Filters';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SortIcon from '@mui/icons-material/Sort';

const DrawerFilters = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <SortIcon
                fontSize="large"
                sx={{mr: '10px'}}
                onClick={() => {
                    setDrawerOpen(true);
                }}
            >
                OpenFilters
            </SortIcon>

            <Drawer
                variant="temporary"
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box sx={{padding: '22px', width: '65vw'}}>
                    <Filters />
                </Box>
            </Drawer>
        </Box>
    );
};

export default DrawerFilters;
