import {Box, Divider, Typography} from '@mui/material';

import DateRangeFilter from '../components/DateRangeFilter';
import FilterByGenre from '../components/FilterByGenre';
import FilterByStatus from '../components/FilterByStatus';
import FilterByType from '../components/FilterByType';
import ToggleSfw from '../components/ToggleSfw';
import ButtonResetFilters from '../components/ButtonResetFilters';
import SearchPanel from '../components/SearchPanel';

const Filters = () => {
    return (
        <Box>
            <Typography
                sx={{mb: '10px'}}
                variant="h4"
                component={'h2'}
            >
                Filters
            </Typography>

            <SearchPanel />
            <Divider sx={{my: '15px'}} />

            <DateRangeFilter />

            <FilterByType />

            <FilterByGenre />

            <FilterByStatus />

            <ToggleSfw />

            <ButtonResetFilters />
        </Box>
    );
};

export default Filters;
