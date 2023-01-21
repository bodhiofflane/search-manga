import { useState } from 'react';

import {
    Typography,
    FormControl,
    Select,
    MenuItem,
    Divider,
} from '@mui/material';

const FilterByGenre = () => {
    const [genre, setGenre] = useState('');
    const handleChangeGenre = (event) => {
        setGenre(event.target.value);
    };

    return (
        <>
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
        </>
    );
};

export default FilterByGenre;
