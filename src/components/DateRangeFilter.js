import {useDispatch} from 'react-redux';

import {setDateRange} from '../reducers/mangaSlice';

import {debounce} from 'debounce';

import {Box, Slider, Typography, Divider} from '@mui/material';

const DateRangeFilter = () => {
    const dispatch = useDispatch();

    const handleChangeSlider = (event, newValue) => {
        dispatch(setDateRange(newValue));
    };

    const debouceHandleChangeSlider = debounce(handleChangeSlider, 500);

    return (
        <Box>
            <Typography>Filter by data</Typography>
            <Slider
                step={1}
                min={1930}
                max={2023}
                getAriaLabel={() => 'Date range'}
                defaultValue={[1930, 2023]}
                onChange={debouceHandleChangeSlider}
                valueLabelDisplay="auto"
            />
            <Divider sx={{my: '15px'}} />
        </Box>
    );
};

export default DateRangeFilter;
