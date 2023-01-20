import { useState } from 'react';

import { Box, Slider, Typography } from '@mui/material';


const SliderFilter = () => {
    const [sliderRange, setSliderRange] = useState([2000, 2023]);

    const handleChange = (event, newValue) => {
        setSliderRange(newValue);
    };

    
    console.log(sliderRange)

    return (
        <Box>
            <Typography>
                SliderFilter by data
            </Typography>
            <Slider
                step={1}
                min={1958}
                max={2023}
                getAriaLabel={() => 'Temperature range'}
                value={sliderRange}
                onChange={handleChange}
                valueLabelDisplay="on"
            />
        </Box>
    );
};

export default SliderFilter;