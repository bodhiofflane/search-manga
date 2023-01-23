import { useDispatch, useSelector } from 'react-redux';

import { setMangaStatus } from '../reducers/mangaSlice';

import {
    Typography,
    FormControl,
    Select,
    MenuItem,
    Divider,
} from '@mui/material';

const statuses = [
    { value: 'publishing', title: 'Ongoing' },
    { value: 'complete', title: 'Complited' },
    { value: 'hiatus', title: 'Break' },
    { value: 'discontinued', title: 'Discontinued' },
    { value: 'upcoming', title: 'Announced' },
];

const FilterByStatus = () => {

    const mangaStatus = useSelector(state => state.manga.mangaStatus);
    const dispatch = useDispatch();
    
    const handleChangeStatus = (event) => {
        dispatch(setMangaStatus(event.target.value));
    };

    return (
        <>
            <Typography>Status</Typography>
            <FormControl fullWidth>
                <Select
                    displayEmpty
                    labelId="status-select"
                    id="status-select"
                    value={mangaStatus}
                    onChange={handleChangeStatus}
                >
                    <MenuItem value={''}>
                        <em>Select status</em>
                    </MenuItem>
                    {statuses.map(({ value, title }) => {
                        return (
                            <MenuItem key={value} value={value}>
                                {title}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <Divider sx={{ my: '15px' }} />
        </>
    );
};

export default FilterByStatus;
