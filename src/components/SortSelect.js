import { useSelector, useDispatch } from 'react-redux';

import { setSortBy } from '../reducers/mangaSlice';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const menuItems = [
    {value: '', title: <em>None</em>},
    {value: 'title', title: 'Name'},
    {value: 'rating', title: 'Rating'},
    {value: 'score', title: 'Score'},
    {value: 'popularity', title: 'Popularity'},
    {value: 'chapters', title: 'Chapters'},
    {value: 'start_date', title: 'Release date'},
    {value: 'end_date', title: 'End date'},
]

const SortSelect = () => {

    const sortBy = useSelector(state => state.manga.sortBy);
    const dispatch = useDispatch();

    const handleChangeSort = (event) => {
        dispatch(setSortBy(event.target.value))
    };

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="sort-select">Sort by...</InputLabel>
                <Select
                    labelId="sort-select"
                    id="sort-select"
                    value={sortBy}
                    label="Sort by.."
                    onChange={handleChangeSort}
                >
                    {menuItems.map(({value, title})=> {
                        return (
                            <MenuItem key={value} value={value}>
                                {title}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
};
export default SortSelect;
