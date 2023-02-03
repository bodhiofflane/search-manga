import { useDispatch } from 'react-redux';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Box, IconButton, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { setSearchTerm } from '../reducers/mangaSlice';

const validationSchema = Yup.object({
    searchQuery: Yup.string().required('Required field'),
});

const SearchPanel = () => {

    const dispatch = useDispatch();

    const Formik = useFormik({
        initialValues: {
            searchQuery: '',
        },
        validationSchema,
        onSubmit: (value) => {
            dispatch(setSearchTerm(value.searchQuery))
        },
    });

    return (
        <Box
            display="flex"
            justifyContent="center"
            component={'form'}
            onSubmit={Formik.handleSubmit}
        >
            <TextField
                type="search"
                name="searchQuery"
                label="Search manga"
                value={Formik.values.searchQuery}
                onChange={Formik.handleChange}
                error={Formik.touched.searchQuery && Formik.errors.searchQuery}
                //helperText={Formik.touched.searchQuery && Formik.errors.searchQuery}
            />
            <IconButton
                sx={{ml: '5px'}}
                type="submit"
                size="large"
            >
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default SearchPanel;
