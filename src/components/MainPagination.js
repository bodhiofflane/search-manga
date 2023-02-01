import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage } from '../reducers/mangaSlice'; 

import { Box, LinearProgress, Pagination, Stack } from '@mui/material';

const MainPagination = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.manga.currentPage);
    const lastVisiblePage = useSelector(state => state.manga.lastVisiblePage);
    const loadingStatus = useSelector(state => state.manga.loadingStatus);

    const handlerChangePagination = (event, newPageNumber) => {
        dispatch(setCurrentPage(newPageNumber))
    };

/*     if(loadingStatus === 'loading') {
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress/>
            </Box>
        );
    } */

    return (
        <Box>
            <Stack spacing={2} alignItems="center" >
                <Pagination
                    boundaryCount={1}
                    count={lastVisiblePage}
                    page={currentPage}
                    onChange={handlerChangePagination}
                    color="primary"
                />
            </Stack>
        </Box>
    );
};

export default MainPagination;
