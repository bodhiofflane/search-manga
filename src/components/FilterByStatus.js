import { useState } from 'react';

import {
    Typography,
    FormControl,
    Select,
    MenuItem,
    Divider,
} from '@mui/material';

const FilterByStatus = () => {
    const [status, setStatus] = useState('');
    const handleChangeStatus = (event) => {
        console.log(event);
        setStatus(event.target.value);
    };

    return (
        <>
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
        </>
    );
};

export default FilterByStatus;
