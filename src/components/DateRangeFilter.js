import { useState } from 'react';

import { Slider, Typography, Divider } from '@mui/material';

const DateRangeFilter = () => {

    const [sliderRange, setSliderRange] = useState([2000, 2023]);
    const handleChangeSlider = (event, newValue) => {
        setSliderRange(newValue);
    };

    return (
        <>
            <Typography>Filter by data</Typography>
            <Slider
                step={1}
                min={1958}
                max={2023}
                getAriaLabel={() => 'Temperature range'}
                value={sliderRange}
                onChange={handleChangeSlider}
                /* valueLabelDisplay="on" */
            />
            <Divider sx={{ my: '15px' }} />
        </>
    );
};

export default DateRangeFilter;
