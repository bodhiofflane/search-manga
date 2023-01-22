import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useDebounce } from 'use-debounce';

import { setDateRange } from '../reducers/mangaSlice';

import { Slider, Typography, Divider } from '@mui/material';

// !!! - Ugly uncontrolled component.
// He's just awful. Need to change sometime.

const DateRangeFilter = () => {
    const dispatch = useDispatch();

    const [rangeValue, setRangeValue] = useState([1930, 2023]);
    const [changedByUser, setChangedByUser] = useState(false);

    const [debouncedValue] = useDebounce(rangeValue, 600);


    useEffect(() => {
        if (changedByUser) {
            dispatch(setDateRange(debouncedValue));
        }
        // eslint-disable-next-line
    }, [debouncedValue]);

    const handleChangeSlider = (event, newValue) => {
        setRangeValue(newValue);
        if (!changedByUser) {
            setChangedByUser(true);
        }
    };

    return (
        <>
            <Typography>Filter by data</Typography>
            <Slider
                step={1}
                min={1930}
                max={2023}
                getAriaLabel={() => 'Date range'}
                defaultValue={[1930, 2023]}
                //value={dateRange}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
            />
            <Divider sx={{ my: '15px' }} />
        </>
    );
};

export default DateRangeFilter;
