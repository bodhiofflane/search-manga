import { Box } from '@mui/material';

import DateRangeFilter from '../components/DateRangeFilter';
import FilterByGenre from '../components/FilterByGenre';
import FilterByStatus from '../components/FilterByStatus';

const Filters = () => {

    return (
        <Box>
            <DateRangeFilter />

            <FilterByGenre />

            <FilterByStatus/>
        </Box>
    );
};

export default Filters;
