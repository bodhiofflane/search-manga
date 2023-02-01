import {useDispatch} from 'react-redux';

import {resetFilters} from '../reducers/mangaSlice';

import {Button} from '@mui/material';

const ButtonResetFilters = () => {
    const dispatch = useDispatch();

    return (
        <Button
            fullWidth
            onClick={() => {
                dispatch(resetFilters());
            }}
        >
            Reset filters
        </Button>
    );
};

export default ButtonResetFilters;
