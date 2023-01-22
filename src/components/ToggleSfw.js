import { useDispatch, useSelector } from 'react-redux';

import { setSfw } from '../reducers/mangaSlice';

import { Stack, Switch, Typography } from '@mui/material';


const ToggleSfw = () => {
    const sfw = useSelector(state => state.manga.sfw);

    const dispatch = useDispatch()


    const handleChange = () => {
        dispatch(setSfw())
    };

    console.log(sfw)

    return (
        <Stack flexDirection={'row'} alignItems="center" >
            <Switch
                checked={sfw}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography>
                    SFW
                </Typography>
        </Stack>
    );
};

export default ToggleSfw;
