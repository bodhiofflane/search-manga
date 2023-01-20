import { useState } from 'react';

import {
    Box,
    Slider,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Divider,
} from '@mui/material';

const Filter = () => {
    // For slider
    const [sliderRange, setSliderRange] = useState([2000, 2023]);
    const handleChangeSlider = (event, newValue) => {
        setSliderRange(newValue);
    };

    // For genres select
    const [genre, setGenre] = useState('');
    const handleChangeGenre = (event) => {
        setGenre(event.target.value);
    };

    // For status select
    const [status, setStatus] = useState('');
    const handleChangeStatus = (event) => {
        console.log(event)
        setStatus(event.target.value)
    };

    return (
        <Box>
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

            <Typography>Genres</Typography>
            <FormControl fullWidth>
                <Select
                    displayEmpty
                    labelId="genre-select"
                    id="genre-select"
                    value={genre}
                    onChange={handleChangeGenre}
                >
                    <MenuItem value={''}>
                        <em>Select genre</em>
                    </MenuItem>
                    <MenuItem value={'shounen'}>Shounen</MenuItem>
                    <MenuItem value={'seinen'}>Seinen</MenuItem>
                    <MenuItem value={'seijo'}>Seijo</MenuItem>
                </Select>
            </FormControl>
            <Divider sx={{ my: '15px' }} />

            <Typography>Status</Typography>
            <FormControl fullWidth>
                <Select
                    displayEmpty
                    labelId="status-select"
                    id="status-select"
                    value={status}
                    onChange={handleChangeStatus}
                >
                    <MenuItem value={''}>
                        <em>Select status</em>
                    </MenuItem>
                    <MenuItem value={'ongoing'}>Ongoing</MenuItem>
                    <MenuItem value={'completed'}>Completed</MenuItem>
                    <MenuItem value={'announcement'}>Announcement</MenuItem>
                </Select>
            </FormControl>
            <Divider sx={{ my: '15px' }} />
        </Box>
    );
};

export default Filter;
