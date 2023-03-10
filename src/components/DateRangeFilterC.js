import { useDispatch } from 'react-redux';

import { setDateRange } from '../reducers/mangaSlice';

import { debounce } from 'debounce';

import { Slider, Typography, Divider } from '@mui/material';


const DateRangeFilterC = () => {

    const dispatch = useDispatch();

    
    const handleChangeSlider = (event, newValue) => {
        dispatch(setDateRange(newValue))
    };
    
    let debouceHandleChangeSlider = debounce(handleChangeSlider, 500)
    
    console.log('Range undate')
    return (
        <>
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
            <Divider sx={{ my: '15px' }} />
        </>
    );
};

export default DateRangeFilterC;
