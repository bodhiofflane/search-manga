import { Box } from '@mui/material';

import DateRangeFilter from '../components/DateRangeFilter';
import FilterByGenre from '../components/FilterByGenre';
import FilterByStatus from '../components/FilterByStatus';
import FilterByType from '../components/FilterByType';
import ToggleSfw from '../components/ToggleSfw';

const Filters = () => {

    return (
        <Box>
            <DateRangeFilter/>

            <FilterByType/>

            <FilterByGenre />

            <FilterByStatus/>

            <ToggleSfw/>
        </Box>
    );
};

export default Filters;
