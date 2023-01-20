import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortSelect = () => {
    const [sort, setSort] = useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    console.log(sort)
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="sort-select">Sort by...</InputLabel>
                <Select
                    labelId="sort-select"
                    id="sort-select"
                    value={sort}
                    label="Sort by.."
                    onChange={handleChange}
                >
                    <MenuItem value={''}><em>None</em></MenuItem>
                    <MenuItem value={'date'}>Release date</MenuItem>
                    <MenuItem value={'rating'}>Rating</MenuItem>
                    <MenuItem value={'name'}>Name</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
export default SortSelect;
