import { useDispatch, useSelector } from 'react-redux';

import {
    Typography,
    FormControl,
    Select,
    MenuItem,
    Divider,
} from '@mui/material';
import { setFilterByType } from '../reducers/mangaSlice';

const types = [
    {value: 'manga', title: 'Manga'},
    {value: 'novel', title: 'Novel'},
    {value: 'lightnovel', title: 'Litght novel'},
    {value: 'oneshot', title: 'One-shot'},
    {value: 'doujin', title: 'Doujin'},
    {value: 'manhwa', title: 'Manhwa'},
    {value: 'manhua', title: 'Manhua'},
]

const FilterByType = () => {
    const filterByType = useSelector(state => state.manga.filterByType);
    const dispatch = useDispatch();

    const handleChangeGenre = (event) => {
        dispatch(setFilterByType(event.target.value))
    };

    return (
        <>
            <Typography>Type</Typography>
            <FormControl fullWidth>
                <Select
                    displayEmpty
                    labelId="type-select"
                    id="type-select"
                    value={filterByType}
                    onChange={handleChangeGenre}
                >
                    <MenuItem value={''}>
                        <em>Select type</em>
                    </MenuItem>
                    {types.map(({value, title}) => <MenuItem key={value} value={value}>{title}</MenuItem>)}
                </Select>
            </FormControl>
            <Divider sx={{ my: '15px' }} />
        </>
    );
};

export default FilterByType;